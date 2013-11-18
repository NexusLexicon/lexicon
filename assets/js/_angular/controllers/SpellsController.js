(function(angular) {
  "use strict";

  var module = angular.module("lexicon.controllers", ["ngRoute"]);

  module.controller("SpellsController", function($scope, $routeParams){
      var params = $routeParams;
      $scope.path = params.path;
      console.log($scope.path);

    }
  );

})(angular);
