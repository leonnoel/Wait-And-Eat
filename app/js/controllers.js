'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('landingPageController', [function(){

	}])
	.controller('waitlistController', ['$scope','partyService', 'textMessageService', 'authService', function($scope, partyService, textMessageService, authService){

		//Binds user's parties to $scope.parties.
		authService.getCurrentUser().then(function(user){
			if (user){
				$scope.parties = partyService.getPartiesByUserId(user.id);
			}

		})

		//Object to store data from the waitlist form.
		$scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};

		//Function to save a new party to the waitlist.
		$scope.saveParty = function(){
			partyService.saveParty($scope.newParty, $scope.currentUser.id);
			$scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};
		};

		//Function to send text message to party.
		$scope.sendTextMessage = function(party){
			textMessageService.sendTextMessage(party,$scope.currentUser.id);
		};

	}])
	.controller('authController', ['$scope', 'authService', function($scope, authService){

		//Object bound to inputs on the register and login pages
		$scope.user = {email: '',password:''};

		//Method to register a new user using authService
		$scope.register = function(){
			authService.register($scope.user);
		};

		//Method to log in a user using the authService
		$scope.login = function(){
			authService.login($scope.user);
		};

		//Method to log out a user using the authService
		$scope.logout = function(){
			authService.logout();
		};	

	}]);