'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.name = 'Elias';
}]);

cvAppControllers.controller('AboutController', ['$scope', function($scope) {
	$scope.name = 'Elias';
}]);