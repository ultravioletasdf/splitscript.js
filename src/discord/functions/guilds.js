const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
const users = require('./users');
module.exports = {
	/** Create a new guild.  */
	create: async (guild) => post(`guilds`, guild),
	/** Returns the guild object for the given id */
	get: async (id, with_counts) =>
		get(`guilds/${id}`, {
			with_counts: with_counts
		}),
	list: users.me.guilds.list,
	getAuditLog: async (id, options) => get(`guilds/${id}/audit-logs`, options),
	/** Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be lurkable. */
	getPreview: async (id) => get(`guilds/${id}/preview`),
	/** Modify a guild's settings */
	modify: async (id, guild) => patch(`guilds/${id}`, guild),
	/** Delete a guild permanently. User must be owner.  */
	delete: async (id) => deleteReq(`guilds/${id}`),
	roles: {
		/** Returns a list of role objects for the guild. */
		list: async (id) => get(`guilds/${id}/roles`),
		/** Create a new role for the guild. */
		create: async (id, role) => post(`guilds/${id}/roles`, role),
		/** Modify a guild role. */
		modify: async (id, role_id, role) =>
			patch(`guilds/${id}/roles/${role_id}`, role),
		/** Delete a guild role.  */
		delete: async (id, role_id) =>
			deleteReq(`guilds/${id}/roles/${role_id}`),
		members: {
			/** Adds a role to a guild member.  */
			add: async (guild_id, user_id, role_id) =>
				put(`guilds/${guild_id}/members/${user_id}/roles/${role_id}`),
			/** Removes a role from a guild member. */
			remove: async (guild_id, user_id, role_id) =>
				deleteReq(
					`guilds/${guild_id}/members/${user_id}/roles/${role_id}`
				)
		}
	},
	members: {
		me: {
			/** Returns a guild member object for the current user. */
			get: users.me.guilds.getMember,
			/** Modifies the current member in a guild.  */
			modify: async (id, options) =>
				patch(`guilds/${id}/members/@me`, options)
		},
		/** Returns a guild member object for the specified user. */
		get: async (id, user_id) => get(`guilds/${id}/members/${user_id}`),
		/** Returns a list of guild member objects that are members of the guild. */
		list: async (id, options) => get(`guilds/${id}/members`, options),
		/** Returns a list of guild member objects whose username or nickname starts with a provided string. */
		search: async (id, options) =>
			get(`guilds/${id}/members/search`, options),
		/** Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. */
		add: async (id, user_id, options) =>
			put(`guilds/${id}/members/${user_id}`, options),
		/** Remove a member from a guild */
		remove: async (id, user_id) =>
			deleteReq(`guilds/${id}/members/${user_id}`),
		/** Modify attributes of a guild member. */
		modify: async (id, user_id, member) =>
			patch(`guilds/${id}/members/${user_id}`, member),
		voice: {
			/** Updates another user's voice state.  */
			modify: async (id, user_id, options) =>
				patch(`guilds/${id}/voice-states/${user_id}`, options),
			/** Updates the current user's voice state.  */
			modifyMe: async (id, options) =>
				patch(`guilds/${id}/voice-states/@me`, options)
		}
	},
	bans: {
		/** Returns a list of ban objects for the users banned from this guild. */
		list: async (id, options) => get(`guilds/${id}/bans`, options),
		/** Returns a ban object for the given user or a 404 not found if the ban cannot be found. */
		get: async (id, user_id) => get(`guilds/${id}/bans/${user_id}`),
		/** Create a guild ban, and optionally delete previous messages sent by the banned user. */
		create: async (id, user_id, options) =>
			put(`guilds/${id}/bans/${user_id}`, options),
		/** Remove the ban for a user */
		remove: async (id, user_id) => deleteReq(`guilds/${id}/bans/${user_id}`)
	},
	/** Modify a guild's MFA level. Requires guild ownership.  */
	modifyMFA: async (id, level) => post(`guilds/${id}/mfa`, { level: level }),
	prune: {
		/** Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. */
		count: async (id, options) => get(`guilds/${id}`, options),
		/** Begin a prune operation. */
		begin: async (id, options) => post(`guilds/${id}/prune`, options)
	},
	integrations: {
		/** Returns a list of integration objects for the guild. */
		list: async (id) => get(`guilds/${id}/integrations`),
		/** Delete the attached integration object for the guild. */
		delete: async (id, integration_id) =>
			deleteReq(`guilds/${id}/integrations/${integration_id}`)
	},
	widgets: {
		/** Returns a guild widget settings object.  */
		settings: async (id) => get(`guilds/${id}/widget`),
		/** Returns the widget for the guild. */
		get: async (id) => get(`guilds/${id}/widget.json`),
		/** Modify a guild widget settings object for the guild */
		modify: async (id, widget) => patch(`guilds/${id}/widget`, widget),
		/** Returns a PNG image widget for the guild. Requires no permissions or authentication. */
		image: async (id, options) => get(`guilds/${id}/widget.png`, options)
	},
	/** Returns a partial invite object for guilds with that feature enabled.  */
	getVanity: async (id) => get(`guilds/${id}/vanity-url`),
	welcomeScreen: {
		/** Returns the Welcome Screen object for the guild.  */
		get: async (id) => get(`guilds/${id}/welcome-screen`),
		/** Modify the guild's Welcome Screen. */
		modify: async (id, options) =>
			patch(`guilds/${id}/welcome-screen`, options)
	},
	leave: users.me.guilds.leave
};
