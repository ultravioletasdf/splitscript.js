const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
module.exports = {
	list: async (guild_id) =>
		get(`https://discord.com/api/v10/guilds/${guild_id}/emojis`),
	get: async (guild_id, emoji_id) =>
		get(
			`https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`
		),
	create: async (guild_id, emoji) =>
		post(`https://discord.com/api/v10/guilds/${guild_id}/emojis`, emoji),
	modify: async (guild_id, emoji_id, emoji_object) =>
		patch(
			`https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`,
			emoji_object
		),
	delete: async (guild_id, emoji_id) =>
		deleteReq(
			`https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`
		)
};
