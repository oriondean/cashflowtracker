'use strict';

/**
 * @ngdoc function
 * @name cashflowApp.controller:DayexpenseCtrl
 * @description
 * # DayexpenseCtrl
 * Controller of the cashflowApp
 */
angular.module('cashflowApp')
  .controller('DayExpenseCtrl', function ($scope) {

		$scope.expenses = [];

		$scope.date = '20140728'; // YYYYMMDD

		$scope.total = 0; // computed property?

  });
