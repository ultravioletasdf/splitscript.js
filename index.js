module.exports = {
	sleep: function sleep(milliseconds) {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	},
	discord: {
		listen: require('./src/discord/gateway.js'),
		messages: require('./src/discord/messages.js'),
		channels: require('./src/discord/channels.js'),
		emojis: require('./src/discord/emojis.js'),
		invites: require('./src/discord/invites.js'),
		interactions: require('./src/discord/interactions.js'),
		login: require('./src/discord/login.js')
	},
	debug: require('./src/debug.js')
};
