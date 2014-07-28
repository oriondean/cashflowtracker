'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:DayexpenseCtrl
 * @description
 * # DayexpenseCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('DayExpenseCtrl', function ($scope) {

		$scope.expenses = [];

		$scope.date = '20140728'; // YYYYMMDD

		$scope.total = 0; // computed property?

  });
