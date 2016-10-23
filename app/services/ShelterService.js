'use strict';
app.factory('ShelterService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("shelterslist/"+ '2016-10-23').get().then(callback);
    };
    service.getShelterDetails = function(uuid, callback) {
        Restangular.one("shelterslist/" + uuid+"/"+ '2016-10-23').get().then(callback);
    };

    service.reserveUnit = function(id, clientId, shelterId, date,cellId, callback) {
        Restangular.one("cells/" + id).customPUT({clientId:clientId, shelterId:shelterId, date:date,cellId:cellId , reserved:true}).then(callback);
    };
    return service;
});