(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('githubController',githubController);

  githubController.$inject = ['$http'];

  function githubController($http) {
    var vm = this;

    vm.getUser = function getUser() {
      $http
        .get("http://api.github.com/users/" + vm.userName)
        .then(function(response) {
          vm.userData = response.data;
        })
        .catch(function(error) {
          alert('An error occured downloading userName from GitHub');
      });
    }
  }
})();
