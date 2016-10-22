'use strict';
angular.module('conjure-ui').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/facilities', {
        templateUrl: 'views/shelterlist.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      })
      .when('/clients', {
        templateUrl: 'views/shelterlist.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      })
      .when('/reservations', {
        templateUrl: 'views/shelterlist.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      }).when('/', {
      templateUrl: 'views/shelterlist.html',
      controller: 'shelterController',
      controllerAs: 'shelterController'
    })
    ;

    $locationProvider.html5Mode(false);
  }]);
