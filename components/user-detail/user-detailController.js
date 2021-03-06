'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.userDetails = window.cs142models.userModel($routeParams.userId);
    console.log('UserDetail of ', userId);
    $scope.main.sectionHeader = $scope.userDetails.first_name + ' ' + $scope.userDetails.last_name;
        

  }]);
