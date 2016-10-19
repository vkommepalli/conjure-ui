'use strict';
app.factory('DonarService', function(Restangular){
    var service ={};
    service.getDonors = function(callback) {
        Restangular.one("http://registrationservice.cfapps.io/donors").get().then(callback);
    };
    return service;
});