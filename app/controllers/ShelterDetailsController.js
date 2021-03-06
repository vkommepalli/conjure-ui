'use strict';
angular.module('conjure-ui')
    .controller('shelterDetailsController', function ($scope, $mdDialog,ShelterService) {



        $scope.handleDetailsCallback = function (data) {
            $scope.shelter = data;
            $scope.cells = data.cells;
            window.console.log("===================================");
            window.console.log($scope.cells);
            window.console.log(data);
        };
        $scope.getColor = function (isReserved) {
            if(isReserved){
                return "backgrond: lightgreen";
            }else{
                return "backgrond: lightgreen";
            }
        }


        ShelterService.getShelterDetails($scope.uuid,function (data) {
            //var shelters = [];
            //var shelter = {};

            $scope.shelter = data;
            $scope.cells = data.cells;

        });
        $scope.selectedCellId = '';
        $scope.selectedCell = {};


        $scope.selectedCell = function (cell) {
            $scope.selectedCellId = cell.id;
            $scope.selectedCell=cell;
        };


        $scope.reserveUnit = function () {
             ShelterService.reserveUnit($scope.selectedCell.id,$scope.selectedClientId,$scope.selectedCell.shelterId,$scope.selectedCell.date,$scope.selectedCell.cellId,function () {
                 ShelterService.getShelterDetails($scope.uuid,function (data) {
                     $scope.shelter = data;
                     $scope.cells = data.cells;
                     $scope.selectedCellId = '';
                     $scope.selectedClientId='';
                 })
                    });
        };



    });