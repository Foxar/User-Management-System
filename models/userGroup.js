var mongoose = require('mongoose');

// Create schema

var userGroupSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
},{collection: 'userGroups'});

var UserGroup = module.exports = mongoose.model('UserGroup', userGroupSchema);

//Get userGroups
module.exports.getUserGroups = function(callback, limit){
	UserGroup.find(callback).limit(limit);
}


//Add userGroup
module.exports.addUserGroup = function(userGroup, callback){
	UserGroup.create(userGroup, callback)
}

//Update userGroup
module.exports.updateUserGroup = function(id, userGroup, options, callback){
	var query = {_id : id};
	var update = {
		name: userGroup.name
	}
	UserGroup.findOneAndUpdate(query, update, options, callback)
}


//Delete userGroup
module.exports.removeUserGroup = function(id, callback){
	var query = {_id : id};
	UserGroup.remove(query, callback)
}