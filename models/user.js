var mongoose = require('mongoose');

// Create schema

var userSchema = mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	surname:{
		type: String,
		required: true
	},
	dob: {
		type: Date,
		required:false
	},
	usergroup:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	usergroups: [String]
},{collection: 'user'});

var User = module.exports = mongoose.model('User', userSchema);

//Get users
module.exports.getUser = function(callback, limit){
	User.find(callback).limit(limit);
}

//Get users
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//Add user
module.exports.addUser = function(user, callback){
	User.create(user, callback)
}

//Update user
module.exports.updateUser = function(id,user,options, callback){
	var query = {_id: id};
	var update = {
		name : user.name,
		surname : user.surname,
		userGroup : user.userGroup
	}

	User.findOneAndUpdate(query, update, options, callback);
}

//Delete userGroup
module.exports.removeUser = function(id, callback){
	var query = {_id : id};
	User.remove(query, callback)
}
