'use strict';

describe('Controller: ExpenseListCtrl', function () {

  // load the controller's module
  beforeEach(module('cashflowTracker'));

  var ExpenseListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenseListCtrl = $controller('ExpenseListCtrl', {
      $scope: scope
    });
  }));

  it('should have a default set of day expenses', function () {
    expect(scope.dayExpenses.length).toBe(2);
  });
});
