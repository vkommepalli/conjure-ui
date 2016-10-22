'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getDonors = function(callback) {
        Restangular.one("donors").get().then(callback);
    };
    return service;
});