var app= angular.module("myApp",['ngRoute'])

app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix('')
}])
app.config(["$routeProvider", function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "myHomeController"
		})
		.when("/register", {
			templateUrl: "pages/register.html",
			controller: "myRegisterController",
			
		})		
}])

app.controller("myHomeController", ["$scope", function($scope){
	$scope.message ="Hello Home Controller"
}])
app.controller("myRegisterController", ["$scope", function($scope){
	$scope.message ="Hello register Controller"
}])