(function() {

  var app = angular.module('routes', ['ngRoute'])
  var routePrefix = '../views/';

   //ejemplo de rutas
  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl : routePrefix+'home.html'
      })
      .when('/404', {
        templateUrl : '404.html'
      })      
      .when('/albums', {
        templateUrl : routePrefix+'content.html',
        controller: 'album',
      })         
      .when('/charts', {
        templateUrl : routePrefix+'charts.html',
        controller: 'chart',
      })    
      .when('/header', {
        templateUrl : routePrefix+'header.html',
        controller: 'header',
      })         
      .when('/animation', {
        templateUrl : routePrefix+'animation.html',
        controller: 'animation',
      })      
      .when('/album/:id', {
        templateUrl : routePrefix+'post.html',
        controller: 'single',
      })      
      .otherwise({ redirectTo: '/404' })
      $locationProvider.html5Mode(true);
    });

})();
