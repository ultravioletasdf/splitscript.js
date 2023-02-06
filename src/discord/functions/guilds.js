const { get, post, patch, put, delete: deleteReq } = require('../request');
module.exports = {
	create: async (guild) => post(`https://discord.com/api/v10/guilds`, guild),
	get: async (id, with_counts) =>
		get(`https://discord.com/api/v10/guilds/${id}`, {
			with_counts: with_counts,
		}),
	preview: async (id) =>
		get(`https://discord.com/api/v10/guilds/${id}/preview`),
	modify: async (id, guild) =>
		patch(`https://discord.com/api/v10/guilds/${id}`, guild),
	delete: async (id) => deleteReq(`https://discord.com/api/v10/guilds/${id}`),
};
