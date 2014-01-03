/**
 * @author Cat in the Hat Johnson
 */
 define(['jquery', 'angular', 'socket', 'domReady!', 'css!/css/chat.css'], function($) {
	var socket = io.connect();

 	var chatApp = angular.module('chatApp', []).directive('initFocus', function() {
 		return function(scope, el, attr) {
 			el[0].focus();
 		};
 	});

 	chatApp.controller('chatCtrl', function ($scope, $timeout) {
 		$scope.messages = [];

 		$scope.$watch('messages', function() { 
 			$timeout(function(){
 				$('.chat ul').scrollTop($('.chat ul')[0].scrollHeight);
 			}, 10);
 		}, true);

		// send chat messages
 		$scope.chat = function(msg) {
 			if (msg) {
	 			$scope.messages.push({
	 				sender : 'me',
	 				msg : msg
	 			});
	 			
		 		socket.emit('chat', {
	 				sender : 'me',
	 				msg : msg
	 			});
	 			
	 			$scope.msg = '';
 			}
 		};

		// listen chat responses
	 	socket.on('chat', function (data) {
	 		$timeout(function() {
		 		$scope.messages.push(data);
	 		}, 10);
	 	});
 	});
 });