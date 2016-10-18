'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('conjure-ui', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'md.data.table',
    'angular-clipboard',
    'ngSanitize',
    'ngCsv',
    'restangular',
    'config',
    'ngRoute',
    'ngCookies',
    'fixed.table.header'
]);

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '500',
        'hue-1': '100',
        'hue-2': '700'
      })
      .accentPalette('amber', {
        'default': '500',
        'hue-1': 'A100',
        'hue-2': 'A700'
      })
      .warnPalette('red');
});

app.config(['RestangularProvider', 'ENV', function (RestangularProvider, ENV) {
  RestangularProvider.setBaseUrl(ENV.apiEndpoint);
}]);

//config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//  $locationProvider.hashPrefix('!');
//
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);
