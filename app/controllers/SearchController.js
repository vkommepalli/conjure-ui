'use strict';
angular.module('conjure-ui')
    .controller('searchController', function ($scope, $rootScope, $mdDialog, SearchService) {


        $scope.results = [];

        $scope.findNeeds = function() {
            SearchService.findNeeds(function (results) {
                results.forEach(function (result) {
                    //incase any logic need to alter data
                });
                $scope.results = results;
            });
        };

    });
