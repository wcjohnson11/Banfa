'use strict';

angular.module('banfaApp.select', [])
  .controller('SelectCtrl', function ($scope, $http, $stateParams, $state) {
    $http.get('/api/categorys').success(function(categorys) {
      $scope.categorys = categorys;
    });
    $scope.play = function(category) {
      $scope.category = category;

      var catname = $scope.category.name;
      var userid = $stateParams;
      $state.go('match', {id: userid, catid: catname});
    };
  });
