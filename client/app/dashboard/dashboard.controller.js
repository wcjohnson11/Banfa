'use strict';

angular.module('banfaApp')
  .controller('DashboardCtrl', function ($scope, $state, $http) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
    $scope.enemy= $scope.enemy || false;
    $scope.playing = false;

    $scope.challenge = function(user) {
      $scope.enemy = user;
      console.log($scope.enemy);
      // $state.go('match');
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
