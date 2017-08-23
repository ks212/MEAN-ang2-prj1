var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = new schema({
	
	username:{type:String,lowercase:true,required:true,unique:true},
	password:{type:String,required:true},
	email:{type:String,lowercase:true,required:true,unique:true}
	
});
module.exports = mongoose.model('User',UserSchema);

/*
var blogSchema = new Schema({
	title:String,
	author:String,
	body:String,
	comments:[{body:String, date:Date}],
	date:{type:Date, default:Date.now},
	hidden:Boolean,
	meta:{
		votes:Number,
		favs:Number
	}

});
*/