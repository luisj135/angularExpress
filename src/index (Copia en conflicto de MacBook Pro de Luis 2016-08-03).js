var angular = require('angular');

var app = angular.module('addblockModule', [require('angular-route')]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: 'iniciocontrol'
      }).
      when('/login', {
        templateUrl: 'login',
        controller: 'loginControl'
      }).
      when('/logout', {
        templateUrl: 'logout',
        controller: 'logoutControl'
      }).
       when('/projects/', {
        templateUrl: 'projects/index',
        controller: 'projectsControl'
      }).
      when('/projects/new/', {
        templateUrl: 'projects/index',
        controller: 'projectsNewControl'
      }).
      when('/projects/edit/:id', {
        templateUrl: 'projects/index',
        controller: 'projectsEditControl'
      }).
      when('/projects/delete/:id', {
        templateUrl: 'projects/index',
        controller: 'projectsDeleteControl'
      }).
      when('/configdata/', {
        templateUrl: 'confgdata/index',
        controller: 'configDataControl'
      }).
      when('/configdata/new/', {
        templateUrl: 'confgdata/new',
        controller: 'configDataNewControl'
      }).
      when('/configdata/edit/:id', {
        templateUrl: 'confgdata/edit',
        controller: 'configDataEditControl'
      }).
      when('/configdata/delete/:id', {
        templateUrl: 'confgdata/delete',
        controller: 'configDataDeleteControl'
      }).
      when('/msn', {
        templateUrl: 'msn/index',
        controller: 'msnController'
      }).
      when('/msn/new/', {
        templateUrl: 'msn/new',
        controller: 'msnNewController'
      }).
      when('/msn/edit/:id', {
        templateUrl: 'msn/edit',
        controller: 'msnEditController'
      }).
      when('/msn/delete/:id', {
        templateUrl: 'msn/delete',
        controller: 'msnDeleteControl'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);

app.controller('iniciocontrol', function($scope) {
  console.log('dashboardControl');
});

app.controller('loginControl', function($scope) {
  console.log('loginControl');
});

app.controller('logoutControl', function($scope) {
  console.log('logoutControl');
});

app.controller('projectsControl', function($scope) {
  console.log('projectsControl');
});

app.controller('projectsNewControl', function($scope) {
  console.log('projectsNewControl');
});

app.controller('projectsEditControl', function($scope) {
  console.log('projectsEditControl');
});

app.controller('projectsDeleteControl', function($scope) {
  console.log('projectsDeleteControl');
});

app.controller('configDataControl', function($scope) {
  console.log('configDataControl');
});

app.controller('configDataNewControl', function($scope) {
  console.log('configDataNewControl');
});

app.controller('configDataEditControl', function($scope) {
  console.log('configDataEditControl');
});

app.controller('configDataDeleteControl', function($scope) {
  console.log('configDataDeleteControl');
});

app.controller('msnController', function($scope) {
  console.log('msnController');
});

app.controller('msnNewController', function($scope) {
  console.log('msnNewController');
});

app.controller('msnEditController', function($scope) {
  console.log('msnEditController');
});

app.controller('msnDeleteControl', function($scope) {
  console.log('msnDeleteControl');
});