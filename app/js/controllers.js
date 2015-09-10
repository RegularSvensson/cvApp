'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('/app/info/info.json').success(function(data) {
		$scope.stuff = data;
	});
	$scope.backgroundImg = "/app/img/kugghjulet.png"
}]);

cvAppControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
	$http.get('/app/info/info.json').success(function(data) {
		$scope.stuff = data;
	});
}]);