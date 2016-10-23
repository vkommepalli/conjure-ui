'use strict';
angular.module('conjure-ui').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/facilities', {
        templateUrl: 'views/shelterlist.html',
        controller: 'shelterController',
        controllerAs: 'shelterController'
      })
     .when('/profiles', {
             templateUrl: 'views/profiles.html',
             controller: 'profileController',
             controllerAs: 'profileController'
        })
      .when('/reservations', {
        templateUrl: 'views/reservations.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      }).when('/', {
      templateUrl: 'views/shelterlist.html',
      controller: 'shelterController',
      controllerAs: 'shelterController'
    })
    ;

    $locationProvider.html5Mode(false);
  }]);


