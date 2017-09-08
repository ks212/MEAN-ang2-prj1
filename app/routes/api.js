var User = require('../models/user');

//change app object to router so that to return the whole object back to server file
module.exports = function(router){
	router.post('/users',function(req,res){
	//res.send('testing user route');
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	//user.save();
	//res.send('user created!');
	
	user.save(function(err){
		if (err){
			res.send(err);
		}
		else{
			res.send('user created');
		}
	});
});
/*
router.get('/', function(req, res){
  res.send('hello world');
});*/

	return router;
}
