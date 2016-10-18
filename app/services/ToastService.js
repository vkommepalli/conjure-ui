'use strict';

app.factory('ToastService', function($mdToast){
  var service ={ };

  service.show = function(msg) {
    $mdToast.show({
      templateUrl: '../views/toast.html',
      position: 'bottom left',
      controller:'toastController',
      controllerAs: 'vm',
      locals: {
        message: msg
      }
    });
  };

  service.showError = function(msg) {
    $mdToast.show({
      templateUrl: '../views/toastError.html',
      position: 'bottom left',
      controller:'toastController',
      hideDelay: 10000,
      controllerAs: 'vm',
      locals: {
        message: msg
      }
    });
  };

  return service;
});
