const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');

module.exports = {
	create: async (message, channel_id) =>
		post(`channels/${channel_id}/messages`, message),
	edit: async (newMessage, channel_id, message_id) =>
		patch(`channels/${channel_id}/messages/${message_id}`, newMessage),
	delete: async (message_id, channel_id) =>
		deleteReq(`channels/${channel_id}/messages/${message_id}`),
	bulkDelete: async (channel_id, messages) =>
		post(`channels/${channel_id}/messages/bulk-delete`, {
			messages: messages
		}),
	get: async (message_id, channel_id) =>
		get(`channels/${channel_id}/messages/${message_id}`),
	list: async (channel_id, options) =>
		get(`channels/${channel_id}/messages`, options),
	reactions: {
		list: async (message_id, channel_id, emoji, options) =>
			get(
				`channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
					emoji
				)}`,
				options
			),
		create: async (message_id, channel_id, emoji) =>
			post(
				`channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
					emoji
				)}/@me`
			),
		delete: {
			own: async (message_id, channel_id, emoji) =>
				deleteReq(
					`channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}/@me`
				),
			user: async (message_id, channel_id, emoji, user_id) =>
				deleteReq(
					`channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}/${user_id}`
				),
			all: async (message_id, channel_id, emoji) =>
				deleteReq(
					`channels/${channel_id}/messages/${message_id}/reactions/${encodeURIComponent(
						emoji
					)}`
				)
		}
	}
};
