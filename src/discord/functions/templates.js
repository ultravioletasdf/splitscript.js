const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');

module.exports = {
	/** Returns a guild template object for the given code. */
	get: async (code) => get(`guilds/templates/${code}`),
	/** Create a new guild based on a template. */
	createGuild: async (code, guild) => post(`guilds/templates/${code}`, guild),
	/** Returns an array of guild template objects */
	list: async (guild_id) => get(`guilds/${guild_id}/templates`),
	/** Creates a template for the guild. */
	create: async (guild_id, template) =>
		post(`guilds/${guild_id}/templates`, template),
	/** Syncs the template to the guild's current state */
	sync: async (guild_id, code) => put(`guilds/${guild_id}/templates/${code}`),
	/** Modifies the template's metadata. */
	modify: async (guild_id, code, template) =>
		patch(`guilds/${guild_id}/templates/${code}`, template),
	/** Deletes the template */
	delete: async (guild_id, code) =>
		deleteReq(`guilds/${guild_id}/templates/${code}`)
};
