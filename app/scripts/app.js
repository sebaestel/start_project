(function() {
  var app = angular.module('app', ['routes','highcharts-ng','ui.scrollfix'])
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


  app.controller('chart', function($scope, $routeParams, $http) {

  });

  app.controller('animation', function($scope, $routeParams, $http) {

  });

  app.controller('header', function($scope, $routeParams, $http) {

  });

  app.controller('chartCtrl', function ($scope) {

    $scope.addPoints = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.highchartsNG.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.options = {
        type: 'line'
    }

    $scope.swapChartType = function () {
        if (this.highchartsNG.options.chart.type === 'line') {
            this.highchartsNG.options.chart.type = 'bar'
        } else {
            this.highchartsNG.options.chart.type = 'line'
        }
    }

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
        loading: false
    }

  });

})();

