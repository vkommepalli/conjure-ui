'use strict';
angular.module('conjure-ui')
  .controller('toastController', function (message) {
    var vm = this;

    vm.message = message;
  });



