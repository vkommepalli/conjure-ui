'use strict';
angular.module('conjure-ui')
    .controller('shelterDetailsController', function ($scope, $mdDialog,ShelterService) {

        ShelterService.getShelterDetails($scope.uuid, $scope.handleDetailsCallback);
        $scope.selectedCellId = '';
        $scope.handleDetailsCallback = function (data) {
            $scope.shelter = data;
        };

        $scope.selectedCell = function (cellId) {
            $scope.selectedCellId = cellId;
        };



    });