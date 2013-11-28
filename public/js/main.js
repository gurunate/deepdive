/**
 * @author Nate Johnson
 */
require.config({
	baseUrl : 'js',

	paths : {
		angular : 'libs/angular.min',
		domReady : 'libs/require/domReady',
		text : 'libs/require/text',
		css : 'libs/require/css'
	}
});

require(['modules/chat', 'domReady!'], function(Chat) {
	// TODO implement
	// new Chat('.chat');
});
