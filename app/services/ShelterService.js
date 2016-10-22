'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("shelters").get().then(callback);
    };
    service.getShelterDetails = function(uuid,callback) {
        Restangular.one("shelters", uuid).get().then(callback);
    };
    return service;
});