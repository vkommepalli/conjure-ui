'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("shelters").get().then(callback);
    };
    service.getShelterDetails = function(uuid, callback) {
        Restangular.one("shelterslist/" + uuid+"/"+ '2016-10-30').get().then(callback);
    };

    service.reserveUnit = function(cellId, clientId, callback) {
        Restangular.one("cells/" + cellId).put({clientId:clientId, reserved:true}).then(callback);
    };
    return service;
});