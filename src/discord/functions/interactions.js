const { get, post, patch, put, delete: deleteReq } = require('../request');
const variable = require('../../variable.js');
let APP_ID;
variable.emitter.on('set', (key, value) => {
	if (key === '_application_id') APP_ID = value;
}); // Set application_id when it is sent by gateway/login

module.exports = {
	commands: {
		create: async (command, guild_id) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands`;
			return post(URL, command);
		},
		delete: async (command_id, guild_id) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
			return deleteReq(URL);
		},
		update: async (command_id, command, guild_id) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
			return patch(URL, command);
		},
		list: async (guild_id, with_localizations) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands`;
			return get(URL, {
				with_localizations: with_localizations,
			});
		},
		bulkOverwrite: async (commands, guild_id) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands`;
			return post(URL, commands);
		},
		get: async (command_id, guild_id) => {
			let URL = guild_id
				? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`
				: `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
			return get(URL);
		},
		permissons: {
			get: async (command_id, guild_id) => {
				let URL = guild_id
					? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`
					: `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}/permissions`;
				return get(URL);
			},
			update: async (command_id, permissions, guild_id) => {
				let URL = guild_id
					? `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`
					: `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}/permissions`;
				return put(URL, permissions);
			},
		},
	},
	responses: {
		create: async (id, token, response) =>
			post(
				`https://discord.com/api/v10/interactions/${id}/${token}/callback`,
				response
			),
		get: async (token) =>
			get(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`
			),
		edit: async (token, response) =>
			patch(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`,
				response
			),
		delete: async (token) =>
			deleteReq(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`
			),
	},
	followups: {
		create: async (token, message) =>
			post(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}`,
				message
			),
		get: async (token, message_id) =>
			get(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`
			),
		edit: async (token, message_id, message) =>
			patch(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`,
				message
			),
		delete: async (token, message_id) =>
			deleteReq(
				`https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`
			),
	},
};
