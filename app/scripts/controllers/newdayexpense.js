'use strict';

/**
 * @ngdoc function
 * @name cashflowTracker.controller:NewDayExpenseCtrl
 * @description
 * # NewDayExpenseCtrl
 * Controller of the cashflowTracker
 */
angular.module('cashflowTracker')
  .controller('NewDayExpenseCtrl', ['$scope', 'DayExpenseService', function ($scope, dayExpenseService) {

		$scope.categories = ['Food', 'Travel', 'Utility', 'Entertainment', 'Car', 'Rent'];

    $scope.date = '';
		$scope.expenses = [];

		$scope.addExpense = function() {
			$scope.expenses.push($scope.newExpense);
			$scope._resetExpenseForm();
		};

    $scope.addDayExpense = function() {
      dayExpenseService.dayExpenses.push({
        date: $scope.date,
        expenses: $scope.expenses
      });

      $scope.date = '';
      $scope.expenses = [];
      $scope._resetExpenseForm();
    };

		$scope._resetExpenseForm = function() {
			$scope.newExpense = {
				description: '',
				category: $scope.categories[0],
				price: ''
			};

      if($scope.expenseForm) {
        $scope.expenseForm.$setPristine();
      }
		};

		$scope._resetExpenseForm(); // reset form for first use
  }]);
