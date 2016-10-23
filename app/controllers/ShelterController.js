'use strict';
angular.module('conjure-ui')
    .controller('shelterController', function ($scope, $rootScope, $mdDialog, ShelterService) {



      function getShelters(){
        ShelterService.getShelters(function (sheltersData) {
          $scope.shelters = sheltersData;

        });
      }

        //$scope.donors = donors
        ShelterService.getShelters(function (sheltersData) {
            $scope.shelters = sheltersData;
            ;

        });



        $scope.getShelterDetails = function (event, shelter) {
            $scope.uuid = shelter.uuid;
            $scope.shelter = shelter;
            $mdDialog.show({
                controller: $scope.dialogHelper,
                scope: $scope,
                preserveScope: true,
                templateUrl: '../views/shelterdetails.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: false,
                fullscreen: true
            });
        };

        $scope.dialogHelper = function dialogHelper($scope, $rootScope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
                getShelters();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
                getShelters();
            };
        };

        //$scope.getShelterAvailablity = function () {
        //    var shelters = [];
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '0'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '1'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '5'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '8'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '20'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '21'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '25'});
        //    shelters.push({shelterName: 'Abc', totalBeds: '100', availableBeds: '20', unAvailableBeds: '10', distance: '28'});
        //    $scope.shelters = shelters;
        //};


    });