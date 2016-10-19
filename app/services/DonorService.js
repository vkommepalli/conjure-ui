'use strict';
app.factory('DonorService', function(Restangular){
    var service ={};
    service.getDonors = function(callback) {
        Restangular.one("donors").get(null,{},{'Access-Control-Allow-Origin': ''}).then(callback);
    };
    return service;
});