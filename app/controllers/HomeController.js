'use strict';
angular.module('conjure-ui')
    .controller('homeController', function ($scope, $rootScope, $mdDialog, SearchService, ToastService) {
        $scope.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        $scope.statements = [];



         $scope.showSessionError = function(ev) {
            if($scope.sessionError && !$scope.errorDialogIsShowing){
                var dialog = $mdDialog.alert({
                    controller: $scope.dialogHelper,
                    templateUrl: '../error403.html',
                    parent: angular.element(document.body),
                    targetEvent: ev
                });
                $scope.errorDialogIsShowing = true;
                $mdDialog.show(dialog);
            }
        };







    });
