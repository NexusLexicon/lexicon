(function(angular) {
  "use strict";

  var module = angular.module("lexicon.controllers", []);

  module.controller("HomeController", function($scope){
      $scope.posts = [
        {title: "test", text: "body" }
      ];
    }
  );

})(angular);
