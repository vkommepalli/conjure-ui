'use strict';
app.factory('ProfileService', function(Restangular){
    var service ={};
    service.getProfiles = function(callback) {
        Restangular.one("clients").get().then(callback);
    };
    service.searchProfiles = function( lastName, callback) {
        Restangular.one("clientlist", lastName).get().then(callback);
    };
    return service;
});