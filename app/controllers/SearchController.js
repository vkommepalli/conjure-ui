'use strict';
angular.module('conjure-ui')
    .controller('searchController', function ($scope, $rootScope, DonorService) {


        $scope.donors = [];

        $scope.getDonors = function () {
            DonorService.getDonors(function (donors) {
                $scope.donors = donors;
            });
        };

    });
