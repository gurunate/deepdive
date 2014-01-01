console.log('socket.js loaded');

module.exports = function (socket) {
	var greetings = [
		"Hello.",
		"Hi.",
		"How's it going?",
		"What's Up?",
		"Well, well, well.  Who do we have here?",
		"Hey guy.",
		"Hi-O.",
		"Hey Aaron, long time no see.  You look like you're hiding something.",
		"Aaron?  Sorry, you look so different I couldn't tell if it was you.  It's like you've aged 10 years in 2.",
		"What's the password?",
		"Were you followed?",
		"Are you a cop?"
	];

	socket.on('chat', function (data) {
		socket.emit('chat', {
			sender : 'Hal.io',
			msg : greetings[Math.floor(Math.random() * greetings.length)]
		});
	});
};