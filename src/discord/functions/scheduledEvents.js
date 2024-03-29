const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
module.exports = {
	/** Returns a list of guild scheduled event objects for the given guild. */
	list: async (guild_id, with_user_count) =>
		get(`guilds/${guild_id}/scheduled-events`, {
			with_user_count: with_user_count
		}),
	/** Create a guild scheduled event in the guild */
	create: async (guild_id, scheduled_event) =>
		post(`guilds/${guild_id}/scheduled-events`, scheduled_event),
	/** Get a guild scheduled event. */
	get: async (guild_id, scheduled_event_id, with_user_count) =>
		get(`guilds/${guild_id}/scheduled-events/${scheduled_event_id}`, {
			with_user_count: with_user_count
		}),
	/** Modify a guild scheduled event */
	modify: async (guild_id, scheduled_event_id, scheduled_event) =>
		patch(
			`guilds/${guild_id}/scheduled-events/${scheduled_event_id}`,
			scheduled_event
		),
	/** Delete a guild scheduled event */
	delete: async (guild_id, scheduled_event_id) =>
		deleteReq(`guilds/${guild_id}/scheduled-events/${scheduled_event_id}`),
	/** Get a list of guild scheduled event users subscribed to a guild scheduled event.  */
	getUsers: async (guild_id, scheduled_event_id, options) =>
		get(
			`guilds/${guild_id}/scheduled-events/${scheduled_event_id}/users`,
			options
		)
};
