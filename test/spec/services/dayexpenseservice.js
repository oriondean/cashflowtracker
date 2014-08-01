'use strict';

describe('Service: DayExpenseService', function () {

  // load the service's module
  beforeEach(module('cashflowTracker'));

  // instantiate service
  var DayExpenseService;
  beforeEach(inject(function (_DayExpenseService_) {
    DayExpenseService = _DayExpenseService_;
  }));

  it('should exist!', function () {
    expect(!!DayExpenseService).toBe(true);
  });

});
