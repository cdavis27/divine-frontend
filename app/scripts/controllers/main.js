'use strict';

/**
 * @ngdoc function
 * @name divineFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divineFrontendApp
 */
angular.module('divineFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
