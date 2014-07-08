'use strict';

angular.module('banfaApp')
  .controller('DashboardCtrl', function ($scope, $state, $http) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
    $scope.challenge = function(user) {
      console.log('challenge', user);
      $state.go('match');
    };
/*  Set up to be challenge instead of delete
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
    */
  });
