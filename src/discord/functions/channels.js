const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');

module.exports = {
	get: async (id) => get(`channels/${id}`),
	list: async (guild_id) => get(`guilds/${guild_id}/channels`),
	create: async (guild_id, channel) =>
		post(`guilds/${guild_id}/channels`, channel),
	modify: async (id, channel) => patch(`channels/${id}`, channel),
	delete: async (id) => deleteReq(`channels/${id}`),
	invites: {
		list: async (id) => get(`channels/${id}/invites`),
		create: async (id, invite) =>
			post(`channels/${id}/invites`, invite ?? {})
	},
	positions: {
		update: async (guild_id, channels) =>
			patch(`guilds/${guild_id}/channels`, channels)
	}
};
