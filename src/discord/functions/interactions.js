const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
const variable = require('../../variable.js');
let APP_ID;
variable.emitter.on('set', (key, value) => {
	if (key === '_application_id') APP_ID = value;
}); // Set application_id when it is sent by gateway/login

module.exports = {
	commands: {
		create: async (command, guild_id) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands`
				: `applications/${APP_ID}/commands`;
			return post(URL, command);
		},
		delete: async (command_id, guild_id) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `applications/${APP_ID}/commands/${command_id}`;
			return deleteReq(URL);
		},
		update: async (command_id, command, guild_id) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `applications/${APP_ID}/commands/${command_id}`;
			return patch(URL, command);
		},
		list: async (guild_id, with_localizations) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands`
				: `applications/${APP_ID}/commands`;
			return get(URL, {
				with_localizations: with_localizations
			});
		},
		bulkOverwrite: async (commands, guild_id) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands`
				: `applications/${APP_ID}/commands`;
			return post(URL, commands);
		},
		get: async (command_id, guild_id) => {
			let URL = guild_id
				? `applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `applications/${APP_ID}/commands/${command_id}`;
			return get(URL);
		},
		permissons: {
			get: async (command_id, guild_id) => {
				let URL = guild_id
					? `applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`
					: `applications/${APP_ID}/commands/${command_id}/permissions`;
				return get(URL);
			},
			update: async (command_id, permissions, guild_id) => {
				let URL = guild_id
					? `applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`
					: `applications/${APP_ID}/commands/${command_id}/permissions`;
				return put(URL, permissions);
			}
		}
	},
	responses: {
		create: async (id, token, response) =>
			post(`interactions/${id}/${token}/callback`, response),
		get: async (token) =>
			get(`webhooks/${APP_ID}/${token}/messages/@original`),
		edit: async (token, response) =>
			patch(`webhooks/${APP_ID}/${token}/messages/@original`, response),
		delete: async (token) =>
			deleteReq(`webhooks/${APP_ID}/${token}/messages/@original`)
	},
	followups: {
		create: async (token, message) =>
			post(`webhooks/${APP_ID}/${token}`, message),
		get: async (token, message_id) =>
			get(`webhooks/${APP_ID}/${token}/messages/${message_id}`),
		edit: async (token, message_id, message) =>
			patch(
				`webhooks/${APP_ID}/${token}/messages/${message_id}`,
				message
			),
		delete: async (token, message_id) =>
			deleteReq(`webhooks/${APP_ID}/${token}/messages/${message_id}`)
	}
};
