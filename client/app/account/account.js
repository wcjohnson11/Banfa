'use strict';

angular.module('banfaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('select', {
        url: '/select/:id',
        templateUrl: 'app/select/select.html',
        controller: 'SelectCtrl'
      })
      .state('match', {
        url: '/match',
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl'
      })
      .state('match.review', {
        url: '/review',
        templateUrl: 'app/review/review.html',
        controller: 'ReviewCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl'
      });
  });