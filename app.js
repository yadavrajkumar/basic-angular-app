var app= angular.module("myApp",['ui.router'])

app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix('')
}])
app.config(["$stateProvider", function($stateProvider){
	$stateProvider
		.state("home", {
			url:'/',
			templateUrl: "pages/home.html",
			controller: "myHomeController"
		})
		.state("register", {
			url:'/register',
			templateUrl: "pages/register.html",
			controller: "myRegisterController",
			caseInsensitiveMatch:true
		})		
}])

app.controller("myHomeController", ["$scope", function($scope){
	$scope.message ="Hello Home Controller"
}])
app.controller("myRegisterController", ["$scope", function($scope){
	$scope.message ="Hello register Controller"
}])