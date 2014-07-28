'use strict';

/**
 * @ngdoc function
 * @name cashflowApp.controller:ExpenseCtrl
 * @description
 * # ExpenseCtrl
 * Controller of the cashflowApp
 */
angular.module('cashflowApp')
  .controller('ExpenseCtrl', function ($scope) {

		$scope.category = '';

		$scope.description = '';

		$scope.price = 0;

  });
