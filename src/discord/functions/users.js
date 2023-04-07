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
	me: {
		get: async () => get(`users/@me`),
		modify: async (settings) => patch(`users/@me`, settings),
		guilds: {
			list: async () => get(`users/@me/guilds`),
			/** Returns a guild member object for the current user. */
			getMember: async (guild_id) =>
				get(`users/@me/guilds/${guild_id}/member`),
			/** Leave a guild */
			leave: async (id) => deleteReq(`users/@me/guilds/${id}`)
		}
	},
	get: async (id) => get(`users/${id}`),
	dm: {
		create: async (recipient_id) =>
			post(`users/@me/channels`, {
				recipient_id: recipient_id
			}),
		createGroup: async (options) => post(`users/@me/channels`, options)
	},
	listConnections: async () => get(`users/@me/connections`),
	applicationRoleConnection: {
		get: async () =>
			get(`users/@me/applications/${APP_ID}/role-connection`),
		update: async (options) =>
			put(`users/@me/applications/${APP_ID}/role-connection`, options)
	}
};
