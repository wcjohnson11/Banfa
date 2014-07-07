'use strict';

angular.module('banfaApp')
  .controller('DashboardCtrl', function ($scope, $http) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
  });
