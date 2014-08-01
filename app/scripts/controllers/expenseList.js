'use strict';

/**
 * @ngdoc function
 * @name cashflowTracker.controller:ExpenseListCtrl
 * @description
 * # ExpenseListCtrl
 * Controller of the cashflowTracker
 */
angular.module('cashflowTracker')
  .controller('ExpenseListCtrl', ['$scope', 'DayExpenseService', function ($scope, dayExpenseService) {

    $scope.dayExpenses = dayExpenseService.dayExpenses;

  }]);
