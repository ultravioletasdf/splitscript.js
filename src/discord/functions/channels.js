const { get, post, patch, put, delete: deleteReq } = require('../request');

module.exports = {
	get: async (id) => get(`https://discord.com/api/v10/channels/${id}`),
	list: async (guild_id) =>
		get(`https://discord.com/api/v10/guilds/${guild_id}/channels`),
	create: async (guild_id, channel) =>
		post(
			`https://discord.com/api/v10/guilds/${guild_id}/channels`,
			channel
		),
	modify: async (id, channel) =>
		patch(`https://discord.com/api/v10/channels/${id}`, channel),
	delete: async (id) =>
		deleteReq(`https://discord.com/api/v10/channels/${id}`),
	invites: {
		list: async (id) =>
			get(`https://discord.com/api/v10/channels/${id}/invites`),
		create: async (id, invite) =>
			post(
				`https://discord.com/api/v10/channels/${id}/invites`,
				invite ?? {}
			),
	},
	positions: {
		update: async (guild_id, channels) =>
			patch(
				`https://discord.com/api/v10/guilds/${guild_id}/channels`,
				channels
			),
	},
};
