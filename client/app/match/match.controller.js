'use strict';

angular.module('banfaApp')
  .controller('MatchCtrl', function ($scope, $stateParams, $rootScope,$http, $state) {
	$http.get('/api/cards').success(function(cards) {
      $scope.cards = cards;
    });
    $scope.counter= $scope.counter || 0;
    $scope.right = [];
    $scope.done = false;
    $scope.wrong = [];
    $scope.next = function(counter) {
      $scope.counter++;
      if ($scope.cards.length - 1  === counter) {
      	$scope.done = true;
      	$rootScope.wrong = $scope.wrong;
      	$rootScope.right = $scope.right;
	    $state.go('.review', {wrong: $scope.wrong, right: $scope.right});
      }
    };
    $scope.bunext = function(counter) {
      $scope.wrong.push($scope.cards[counter]);
      console.log($scope.wrong);
      $scope.next(counter);
    };
    $scope.haonext = function(counter) {
      $scope.right.push($scope.cards[counter]);
      console.log($scope.right);
      $scope.next(counter);
    };

});
