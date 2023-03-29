const { get, post, patch, put, delete: deleteReq } = require('../request');

const variable = require('../../variable.js');
let APP_ID;
variable.emitter.on('set', (key, value) => {
	if (key === '_application_id') APP_ID = value;
}); // Set application_id when it is sent by gateway/login

module.exports = {
	me: {
		get: async () => get(`https://discord.com/api/v10/users/@me`),
		modify: async (settings) =>
			patch(`https://discord.com/api/v10/users/@me`, settings),
		guilds: {
			list: async () =>
				get(`https://discord.com/api/v10/users/@me/guilds`),
			/** Returns a guild member object for the current user. */
			getMember: async (guild_id) =>
				get(
					`https://discord.com/api/v10/users/@me/guilds/${guild_id}/member`
				),
			/** Leave a guild */
			leave: async (id) =>
				deleteReq(`https://discord.com/api/v10/users/@me/guilds/${id}`)
		}
	},
	get: async (id) => get(`https://discord.com/api/v10/users/${id}`),
	dm: {
		create: async (recipient_id) =>
			post(`https://discord.com/api/v10/users/@me/channels`, {
				recipient_id: recipient_id
			}),
		createGroup: async (options) =>
			post(`https://discord.com/api/v10/users/@me/channels`, options)
	},
	listConnections: async () =>
		get(`https://discord.com/api/v10/users/@me/connections`),
	applicationRoleConnection: {
		get: async () =>
			get(
				`https://discord.com/api/v10/users/@me/applications/${APP_ID}/role-connection`
			),
		update: async (options) =>
			put(
				`https://discord.com/api/v10/users/@me/applications/${APP_ID}/role-connection`,
				options
			)
	}
};
