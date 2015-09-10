'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', function($scope) {
	$scope.name = 'Elias';
}]);

cvAppControllers.controller('AboutController', ['$scope', function($scope) {
	$scope.name = 'Elias';
}]);


/*
phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});
*/