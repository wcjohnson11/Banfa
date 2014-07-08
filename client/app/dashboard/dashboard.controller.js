'use strict';

angular.module('banfaApp')
  .service('dashboardService', function () {
    return {
      opponent: function() {

      }
    };
  })
  //$stateParams $stateParams.id
  .controller('DashboardCtrl', function ($scope, $state, $http) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });
    $scope.opponent= $scope.opponent || false;
    $scope.category = $scope.category || false;
    $scope.playing = false;

    $scope.challenge = function(user) {
      $scope.opponent = user;

      var userid = $scope.opponent._id;
      $state.go('select', {id: userid});
    };
  });
