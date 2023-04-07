const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
module.exports = {
	/** Creates a new Stage instance associated to a Stage channel */
	create: async (instance) =>
		post(`https://discord.com/api/v10/stage-instances`, instance),
	/** Gets the stage instance associated with the Stage channel, if it exists. */
	get: async (channel_id) =>
		get(`https://discord.com/api/v10/stage-instances/${channel_id}`),
	/** Updates fields of an existing Stage instance.  */
	modify: async (channel_id, instance) =>
		patch(
			`https://discord.com/api/v10/stage-instances/${channel_id}`,
			instance
		),
	/** Deletes the Stage instance.  */
	delete: async (channel_id) =>
		deleteReq(`https://discord.com/api/v10/stage-instances/${channel_id}`)
};
