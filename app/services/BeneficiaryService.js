'use strict';
app.factory('BeneficiaryService', function(Restangular){
    var service ={};


    service.add = function(beneficiary, callback) {
        Restangular.one("beneficiary/add").get({fName: beneficiary.fName, lName: beneficiary.lName, dob: beneficiary.dob, gender: beneficiary.gender}).then(callback);
    };
    return service;
});