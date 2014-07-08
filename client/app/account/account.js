'use strict';

angular.module('banfaApp')
  .config(function ($stateProvider) {
    $stateProvider
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
        url: '/:id',
        templateUrl: 'app/select/select.html',
        controller: 'SelectCtrl'
      })
      .state('match', {
        url: '/:catid',
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl'
      });
  });