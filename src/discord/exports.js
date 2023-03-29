module.exports = {
	// Authentication
	listen: require('./listen.js'),
	login: require('./login.js'),

	// Functions
	channels: require('./functions/channels.js'),
	emojis: require('./functions/emojis.js'),
	guilds: require('./functions/guilds.js'),
	interactions: require('./functions/interactions.js'),
	invites: require('./functions/invites.js'),
	messages: require('./functions/messages.js'),
	users: require('./functions/users.js')
};
