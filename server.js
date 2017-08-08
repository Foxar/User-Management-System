

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var UserGroup = require('./models/userGroup');
var User = require('./models/user');

var app = express();
var router = express.Router();


//app.use(express.static(__dirname+'/src/index.js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});




//CONNECT TO MONGOOSE

console.log("cool");

mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/foxmanage');
var db = mongoose.connection;


router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.get('/userGroups', function(req, res){
	UserGroup.getUserGroups(function(err, userGroups){
		if(err){
			throw err;
		}
		res.json(userGroups);
	});
});

router.post('/userGroups', function(req, res){
	var userGroup = req.body;
	UserGroup.addUserGroup(userGroup, function(err, userGroup){
		if(err){
			throw err;
		}
		res.json(userGroup);
	});
});

router.put('/userGroups/:_id', function(req, res){
	var id = req.params._id;
	var userGroup = req.body;
	UserGroup.updateUserGroup(id, userGroup, {}, function(err, userGroup){
		if(err){
			throw err;
		}
		res.json(userGroup);
	});
});

router.delete('/userGroups/:_id', function(req, res){
	var id = req.params._id;
	UserGroup.removeUserGroup(id, function(err, userGroup){
		if(err){
			throw err;
		}
		res.json(userGroup);
	});
});

router.route('/users')
  .get(function(req, res){
	User.getUser(function(err, users){
		if(err){
			throw err;
		}
    //res.sendFile(__dirname + '/src/index.js');
    console.log("GET USERS");
		res.json(users);
	});
})
.post(function(req, res){
  console.log("Test");
	var user = req.body;
  console.log(user);
	User.addUser(user, function(err, users){
		if(err){
      console.log("THROW ERROR");
			throw err;
		}
		res.json(users);
	});
});

router.put('/users/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
  console.log("ID: " + req.params._id);
  console.log(req.body);

	User.updateUser(id, user, {},function(err, users){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.get('/users/:_id', function(req, res){
	User.getUserById(req.params._id,function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.delete('/users/:_id', function(req, res){
	var id = req.params._id;
	User.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.use('/api', router);


app.listen(3001);
console.log('Running on port 3001...');
