'use strict';

describe('Controller: NewDayExpenseCtrl', function () {

  // load the controller's module
  beforeEach(module('cashflowTracker'));

  var NewDayExpenseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewDayExpenseCtrl = $controller('NewDayExpenseCtrl', {
      $scope: scope
    });
  }));

  it('initially has an empty list of new expenses', function () {
	  expect(scope.expenses.length).toBe(0);
  });
	
});
