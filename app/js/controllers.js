'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.name = 'Elias';
}]);

cvAppControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
	$http.get('/app/info/info.json').success(function(data) {
		$scope.stuff = data;
	});
}]);