'use strict';

/**
 * @ngdoc overview
 * @name divineFrontendApp
 * @description
 * # divineFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('divineFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/get-started', {
        templateUrl: 'views/get-started.html',
        controller: 'GetStartedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
