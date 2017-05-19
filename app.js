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
		.when("/login", {
			templateUrl: "pages/login.html",
			controller: "myLoginController",
			
		})		
}])

app.controller("myHomeController", ["$scope", function($scope){
	$scope.message ="Hello Home Controller"
}])
app.controller("myRegisterController", ["$scope",function($scope){
	$scope.message ="Hello register Controller"
	

}])
app.controller("myLoginController", ["$scope",function($scope){
	$scope.message ="Hello login Controller"
	

}])