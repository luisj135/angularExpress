var angular = require('angular');

var app = angular.module('addblockModule', [require('angular-route')]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/index_cont',
      controller: 'iniciocontrol'
    }).
    otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
