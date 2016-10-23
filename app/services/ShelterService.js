'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("shelters").get().then(callback);
    };
    service.getShelterDetails = function(uuid, callback) {
        Restangular.one("shelterslist/" + uuid+"/"+ '2016-10-22').get().then(callback);
    };
    return service;
});