'use strict';

angular.module('banfaApp')
  .controller('ReviewCtrl', function ($scope, $rootScope) {
    $scope.message = 'Hello';
    $scope.right = $rootScope.right;
    $scope.wrong = $rootScope.wrong;


  });
