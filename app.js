var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){
$scope.message="hi Raj h r u";
$scope.employeeList=[{id:101 , name:"Raj" , salary:5000},
{id:102 , name:"Sri" , salary:3000},
{id:103 , name:"Chotu" , salary: 1000
}]
	}]);