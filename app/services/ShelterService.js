'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("shelters").get().then(callback);
    };
    service.getShelterDetails = function(callback) {
        Restangular.one("shelters").get().then(callback);
    };
    return service;
});