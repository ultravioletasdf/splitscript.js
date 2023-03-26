const { get, post, patch, put, delete: deleteReq } = require('../request');

module.exports = {
	create: async (message, channel_id) =>
		post(
			`https://discord.com/api/v10/channels/${channel_id}/messages`,
			message
		),
	edit: async (newMessage, channel_id, message_id) =>
		patch(
			`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}`,
			newMessage
		),
	delete: async (message_id, channel_id) =>
		deleteReq(
			`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}`
		),
	bulkDelete: async (channel_id, messages) =>
		post(
			`https://discord.com/api/v10/channels/${channel_id}/messages/bulk-delete`,
			{ messages: messages }
		),
	get: async (message_id, channel_id) =>
		get(
			`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}`
		),
	list: async (channel_id, options) =>
		get(
			`https://discord.com/api/v10/channels/${channel_id}/messages`,
			options
		),
	reactions: {
		list: async (message_id, channel_id, emoji, options) =>
			get(
				`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
					emoji
				)}`,
				options
			),
		create: async (message_id, channel_id, emoji) =>
			post(
				`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
					emoji
				)}/@me`
			),
		delete: {
			own: async (message_id, channel_id, emoji) =>
				deleteReq(
					`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}/@me`
				),
			user: async (message_id, channel_id, emoji, user_id) =>
				deleteReq(
					`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}/${user_id}`
				),
			all: async (message_id, channel_id, emoji) =>
				deleteReq(
					`https://discord.com/api/v10/channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}`
				)
		}
	}
};
