'use strict';
angular.module('conjure-ui').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/shelterlist.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      });

    $locationProvider.html5Mode(false);
  }]);
