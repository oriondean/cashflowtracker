'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:ExpenseCtrl
 * @description
 * # ExpenseCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('ExpenseCtrl', function ($scope) {

		$scope.category = '';

		$scope.description = '';

		$scope.price = 0;

  });
