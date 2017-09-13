angular.module('userControllers',[]).config(function(){
	console.log('testing user controller');
})
.controller('regCtrl',function(){
	this.regUser = function(){
		console.log('testing button');
	}
});