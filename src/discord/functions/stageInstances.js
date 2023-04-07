const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
module.exports = {
	/** Creates a new Stage instance associated to a Stage channel */
	create: async (instance) => post(`stage-instances`, instance),
	/** Gets the stage instance associated with the Stage channel, if it exists. */
	get: async (channel_id) => get(`stage-instances/${channel_id}`),
	/** Updates fields of an existing Stage instance.  */
	modify: async (channel_id, instance) =>
		patch(`stage-instances/${channel_id}`, instance),
	/** Deletes the Stage instance.  */
	delete: async (channel_id) => deleteReq(`stage-instances/${channel_id}`)
};
