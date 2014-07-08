'use strict';

describe('Controller: SelectCtrl', function () {

  // load the controller's module
  beforeEach(module('banfaApp'));

  var SelectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectCtrl = $controller('SelectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
