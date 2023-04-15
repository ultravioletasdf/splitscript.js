const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');

module.exports = {
	/** Get a list of all rules currently configured for the guild */
	list: async (guild_id) => get(`guilds/${guild_id}/auto-moderation/rules`),
	/** Get a single rule */
	get: async (guild_id, rule_id) =>
		get(`guilds/${guild_id}/auto-moderation/rules/${rule_id}`),
	/** Create a new rule  */
	create: async (guild_id, rule) =>
		post(`guilds/${guild_id}/auto-moderation/rules`, rule),
	/** Modify an existing rule */
	modify: async (guild_id, rule_id, rule) =>
		patch(`guilds/${guild_id}/auto-moderation/rules/${rule_id}`, rule),
	/** Delete a rule. */
	delete: async (guild_id, rule_id) =>
		deleteReq(`guilds/${guild_id}/auto-moderation/rules/${rule_id}`)
};
