'use strict';
app.factory('DonorService', function(Restangular){
    var service ={};
    service.getDonors = function(callback) {
        Restangular.one("donors").get().then(callback);
    };
    return service;
});