'use strict';
angular.module('conjure-ui')
    .controller('beneficiaryController', function ($scope, $rootScope, BeneficiaryService) {


        $scope.beneficiary = [];



        $scope.add = function (fName, lName, dob, gender) {

                $scope.beneficiary.fName = fName;
            $scope.beneficiary.lName = lName;
            $scope.beneficiary.dob = dob;
            $scope.beneficiary.gender = gender;

            BeneficiaryService.add($scope.baseClientStatementId, dateIn,
                    createErrorCallback('Date In save FAILED!'));

        };

    });