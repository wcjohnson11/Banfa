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
      // $('#users').hide();
      //this is routing to select with both opponent and category, probably will need to 
      //be opponent._id
      $state.go('.select', { opponent: $scope.opponent, category: $scope.category});
      //dashboard/user.id
      // $state.go('match');
    };
/* on opponent and category -> route to /Match
    */
  });
