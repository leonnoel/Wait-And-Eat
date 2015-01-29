'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'partials/landing-page.html',
		controller: 'landingPageController'

	});
	$routeProvider.when('/waitlist',{
		templateUrl: 'partials/waitlist.html',
		controller: 'waitlistController'

	});
	$routeProvider.when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'authController' 
	});
	$routeProvider.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'authController' 
	});
	$routeProvider.otherwise({redirectTo: '/'});
}]);
