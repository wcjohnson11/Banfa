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
      // $('#users').hide();
      //this is routing to select with both opponent and category, probably will need to 
      console.log($scope.opponent);
      $state.go('dashboard.select', {id: userid});
      //dashboard/user.id
      // $state.go('match');
    };
/* on opponent and category -> route to /Match
    */
  });
