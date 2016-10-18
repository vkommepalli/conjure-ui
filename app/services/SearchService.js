'use strict';
app.factory('SearchService', function(Restangular){
    var service ={};
    service.findNeeds = function(callback) {
        Restangular.one("searchService").get().then(callback);
    };


    return service;
});