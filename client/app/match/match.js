'use strict';

angular.module('banfaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('match', {
        url: '/match',
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl'
      });
  });