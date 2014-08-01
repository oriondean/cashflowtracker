'use strict';

/**
 * @ngdoc function
 * @name cashflowTracker.controller:NewDayExpenseCtrl
 * @description
 * # NewDayExpenseCtrl
 * Controller of the cashflowTracker
 */
angular.module('cashflowTracker')
  .controller('NewDayExpenseCtrl', function ($scope) {

		$scope.categories = ['Food', 'Travel', 'Utility', 'Entertainment', 'Car', 'Rent'];

		$scope.expenses = [];

		$scope.addExpense = function() {
			$scope.expenses.push($scope.newExpense);
			$scope._resetExpenseForm();
		};

    $scope.addDayExpense = function() {
    //TODO
    };

		$scope._resetExpenseForm = function() {
			$scope.newExpense = {
				description: '',
				category: $scope.categories[0],
				price: ''
			};
		};

		$scope._resetExpenseForm(); // reset form for first use
  });
