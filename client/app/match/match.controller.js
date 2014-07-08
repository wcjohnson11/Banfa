'use strict';

angular.module('banfaApp')
  .controller('MatchCtrl', function ($scope, $stateParams, $http, $state) {
	$http.get('/api/cards').success(function(cards) {
      $scope.cards = cards;
    });
    $scope.counter= $scope.counter || 0;
    console.log($scope.counter);
    $scope.next = function(counter) {
      console.log($scope.counter);
      $scope.counter++;
      if ($scope.cards.length - 1  === counter) {
      	$state.go('dashboard');
      } 
    };
});
