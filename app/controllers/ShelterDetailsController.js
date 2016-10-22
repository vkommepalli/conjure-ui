'use strict';
angular.module('conjure-ui')
    .controller('shelterDetailsController', function ($scope, $mdDialog,ShelterService) {

        ShelterService.getShelterDetails($scope.uuid, $scope.handleDetailsCallback);

        $scope.handleDetailsCallback = function (data) {
            $scope.shelter = data;
        };

        $scope.selected = function (cardId) {
            $scope.shelter = data;
        };



    });