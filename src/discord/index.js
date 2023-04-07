module.exports = {
	// Authentication
	listen: require('./auth/listen.js'),
	login: require('./auth/login.js'),
	generateIntents: require('./auth/generateIntents.js'),

	// Functions
	channels: require('./functions/channels.js'),
	emojis: require('./functions/emojis.js'),
	guilds: require('./functions/guilds.js'),
	interactions: require('./functions/interactions.js'),
	invites: require('./functions/invites.js'),
	messages: require('./functions/messages.js'),
	users: require('./functions/users.js'),
	automod: require('./functions/automod.js'),
	stageInstaces: require('./functions/stageInstances.js'),
	scheduledEvents: require('./functions/scheduledEvents.js'),
	templates: require('./functions/templates.js')
};
