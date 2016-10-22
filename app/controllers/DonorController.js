'use strict';
angular.module('conjure-ui')
    .controller('donorController', function ($scope, $rootScope, DonorService) {
      var donors = [];
      $scope.donors = donors

        // $scope.getDonors = function () {
        //     DonorService.getDonors(function (donors) {
        //         $scope.donors = donors;
        //     });
        // };
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      donors.push({lastname: Math.random(), firstname: Math.random(), email: 'email@email.com'});
      $scope.donors = donors;

    });