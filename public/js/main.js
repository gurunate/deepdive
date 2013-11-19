/**
 * @author Nate Johnson
 */
require.config({
	baseUrl : 'js',

	paths : {
		jquery : ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'libs/jquery-1.10.2.min'],
		domReady : 'libs/require/domReady',
		text : 'libs/require/text',
		css : 'libs/require/css'
	}
});

require(['modules/chat', 'domReady!'], function(Chat) {
	// TODO implement
});
