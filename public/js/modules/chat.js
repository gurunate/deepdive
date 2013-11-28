/**
 * @author Cat in the Hat Johnson
 */
define(['angular', 'domReady!', 'css!/css/chat.css'], function() {
	var chatApp = angular.module('chatApp', []);

	chatApp.controller('chatCtrl', function ($scope) {

		$scope.messages = [
			{
				sender : 'Sam I am',
				msg : 'Hello'
			},
			{
				sender : 'Cat in the Hat',
				msg : 'Hi'
			},
			{
				sender : 'Cat in the Hat',
				msg : 'Happy Thanksgiving!'
			},
			{
				sender : 'Sam I am',
				msg : 'Same to you.'
			}
		];

		$scope.chat = function(msg) {
			$scope.messages.push({
				sender : 'me',
				msg : msg
			});

			$scope.msg = '';
		}
	});
});