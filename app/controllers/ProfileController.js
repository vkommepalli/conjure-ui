'use strict';
angular.module('conjure-ui')
    .controller('profileController', function ($scope, $rootScope, ProfileService) {
        //ProfileService.getProfiles(function (profileData) {
                 //$scope.profiles = profileData._embedded.profiles;
                  var profiles = [];
                 profiles.push({firstName: 'John', lastName: 'Doe', clientId: '5435234', dob:'08-11-1972'});
                 profiles.push({firstName: 'Jane', lastName: 'Doe', profileImage: 'images/2.jpg'});
                 profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                 profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                  profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                  profiles.push({firstName: 'Jane', lastName: 'Doe', profileImage: 'images/2.jpg'});
                                  profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                  profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                                   profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                                   profiles.push({firstName: 'Jane', lastName: 'Doe', profileImage: 'images/2.jpg'});
                                                   profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});
                                                   profiles.push({firstName: 'John', lastName: 'Doe', profileImage: 'images/1.jpg'});

                 $scope.profiles = profiles;
             //});
         }
    );