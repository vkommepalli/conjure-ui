'use strict';
angular.module('conjure-ui')
    .controller('shelterController', function ($scope, $rootScope, ShelterService) {

        //$scope.donors = donors

         $scope.getShelters = function () {
             ShelterService.getShelters(function (sheltersData) {
                 //var shelters = [];
                 //var shelter = {};

                 $scope.shelters = sheltersData._embedded.shelters;;

             });
         };
        $scope.getShelterAvailablity = function () {
            var shelters = [];
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '0'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '1'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '5'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '8'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '20'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '21'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '25'});
            shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '28'});
            $scope.shelters = shelters;
        };


    });