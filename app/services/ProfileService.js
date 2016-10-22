'use strict';
app.factory('ProfileService', function(Restangular){
    var service ={};
    service.getShelters = function(callback) {
        Restangular.one("profiles").get().then(callback);
    };
    return service;
});