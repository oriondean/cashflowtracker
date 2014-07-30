'use strict';

/**
 * @ngdoc function
 * @name cashflowTracker.controller:NavBarCtrl
 * @description
 * # NavBarCtrl
 * Controller of the cashflowTracker
 */
angular.module('cashflowTracker')
	.controller('NavBarCtrl', function ($scope, $location) {

		// Source: http://stackoverflow.com/questions/16199418/how-do-i-implement-the-bootstrap-navbar-active-class-with-angular-js
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};

	});
