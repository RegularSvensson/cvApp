'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('info/info.json').success(function(data) {
		$scope.stuff = data;
	});
	$scope.backgroundImg = "/app/img/kugghjulet.png";
	console.log("I'm in home! :D")
}]);

cvAppControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
	$http.get('info/info.json').success(function(data) {
		$scope.stuff = data;

	});
	console.log("I'm in about! :D")
}]);