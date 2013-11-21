(function(angular) {
  "use strict";

  var module = angular.module("lexicon.controllers", ["ngRoute"]);

  module.controller("SpellsController", function($scope, $routeParams, $http){
      $scope.path = null;
      $scope.spells = null;

      var params = $routeParams;
      $scope.path = params.path;
      console.log($scope.path);

      if ($scope.path) {
        $http.get('/api/spells?'+ $scope.path, function(error, results) {
          if (error) return;
          $scope.spells = results;
        });
      }
    }
  );

})(angular);
