//= require_directory ./controllers

(function(angular) {
  "use strict";

  angular.module('lexicon', ["lexicon.controllers", "ngRoute"]).
    config([
      '$routeProvider',
      '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
          templateUrl: '_partials/home',
          controller: 'HomeController'
        });

        $routeProvider.when('/spells/', {
          templateUrl: '_partials/spells/main',
          controller: 'SpellsController'
        });

        $routeProvider.when('/spells/:path', {
          templateUrl: '_partials/spells/view',
          controller: 'SpellsController'
        });

        $locationProvider.html5Mode(false);
      }
      ]);
})(angular);
