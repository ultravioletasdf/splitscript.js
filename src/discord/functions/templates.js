const { get, post, patch, put, delete: deleteReq } = require('../request');

module.exports = {
	/** Returns a guild template object for the given code. */
	get: async (code) =>
		get(`https://discord.com/api/v10/guilds/templates/${code}`),
	/** Create a new guild based on a template. */
	createGuild: async (code, guild) =>
		post(`https://discord.com/api/v10/guilds/templates/${code}`, guild),
	/** Returns an array of guild template objects */
	list: async (guild_id) =>
		get(`https://discord.com/api/v10/guilds/${guild_id}/templates`),
	/** Creates a template for the guild. */
	create: async (guild_id, template) =>
		post(
			`https://discord.com/api/v10/guilds/${guild_id}/templates`,
			template
		),
	/** Syncs the template to the guild's current state */
	sync: async (guild_id, code) =>
		put(`https://discord.com/api/v10/guilds/${guild_id}/templates/${code}`),
	/** Modifies the template's metadata. */
	modify: async (guild_id, code, template) =>
		patch(
			`https://discord.com/api/v10/guilds/${guild_id}/templates/${code}`,
			template
		),
	/** Deletes the template */
	delete: async (guild_id, code) =>
		deleteReq(
			`https://discord.com/api/v10/guilds/${guild_id}/templates/${code}`
		)
};
