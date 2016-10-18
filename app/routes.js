'use strict';
angular.module('conjure-ui')
  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'homeController'
      });

    $locationProvider.html5Mode(false);
  }]);
