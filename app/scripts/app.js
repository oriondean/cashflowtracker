'use strict';

/**
 * @ngdoc overview
 * @name cashflowTracker
 * @description
 * # cashflowTracker
 *
 * Main module of the application.
 */
angular
  .module('cashflowTracker', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/expenseList.html',
        controller: 'ExpenseListCtrl'
      })
	    .when('/new', {
		    templateUrl: 'views/newDayExpense.html',
		    controller: 'NewDayExpenseCtrl'
	    })
      .otherwise({
        redirectTo: '/'
      });
  });
