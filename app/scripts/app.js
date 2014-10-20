(function() {
  var app = angular.module('app', ['routes'])

  var albums = "http://jsonplaceholder.typicode.com/albums/"

  app.controller('app', function() {
    this.content = test;
  });

  app.controller('album', function($scope, $routeParams, $http) {
    $http({method: 'GET', url: albums}).
    success(function(data, status, headers, config) {
      $scope.content = data;
      console.log($scope)
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    $scope.model = {
        message: "Address: " + $routeParams.param,
        hola : "hello"
    }
  });

  app.controller('single', function($scope, $routeParams, $http) {
    $http({method: 'GET', url: albums+$routeParams.id}).
    success(function(data, status, headers, config) {
      $scope.content = data;
      console.log($scope)
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    $scope.model = {
        message: "Address: " + $routeParams.param,
        hola : "hello"
    }
  });

})();

