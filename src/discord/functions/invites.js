const {
	get,
	post,
	patch,
	put,
	delete: deleteReq
} = require('../helpers/request');
module.exports = {
	get: async (invite_code, params) => get(`invites/${invite_code}`, params),
	delete: async (invite_code) => deleteReq(`invites/${invite_code}`)
};
