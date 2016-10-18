'use strict';
app.factory('DonarService', function(Restangular){
    var service ={};
    service.findNeeds = function(callback) {
        Restangular.one("searchService").get().then(callback);
    };


    return service;
});