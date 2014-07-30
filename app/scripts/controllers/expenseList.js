'use strict';

/**
 * @ngdoc function
 * @name cashflowTracker.controller:ExpenseListCtrl
 * @description
 * # ExpenseListCtrl
 * Controller of the cashflowTracker
 */
angular.module('cashflowTracker')
  .controller('ExpenseListCtrl', function ($scope) {

		$scope.dayExpenses = [
			{
				date: new Date(2014, 6, 29),
				expenses: [
					{ description: 'Sainsbury\' s Meal Deal', category: 'Food', price: '4.80' },
					{ description: 'Stagecoach DaySaver', category: 'Travel', price: '3.80' },
					{ description: 'Irn Bru can', category: 'Food', price: '0.65' }
				]
			},
			{
				date: new Date(2014, 6, 28),
				expenses: [
					{ description: 'Stagecoach DaySaver', category: 'Travel', price: '3.80' },
					{ description: 'Starbucks Latte', category: 'Food', price: '2.50' },
					{ description: 'Subway Footlong', category: 'Food', price: '5.50' }
				]
			}
		]

  });
