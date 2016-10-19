'use strict';
angular.module('conjure-ui')
  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/donor.html',
        controller: 'donorController',
        controllerAs: 'donorController'
      });

    $locationProvider.html5Mode(false);
  }]);
