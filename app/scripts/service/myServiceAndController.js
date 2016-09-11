(function() {
  'use strict';

  angular.module('Users', [])
    .service('Users', function() {
      var Users = {};
      var names = [
        {
          id: 1,
          name: 'Damian'
        }
      ];

      Users.getNames = function() {
        return names;
      };

      Users.setName = function(name) {
        names.push({
          id: names.length + 1,
          name: name
        })
      };

      return Users;
    })

    .controller("ctrl1", ["$scope", "Users", function($scope, Users) {


      $scope.valueA = [];

      $scope.addNewName = function(name) {
        Users.setName(name);
        $scope.valueA = Users.getNames();
      }

    }]);
})();
