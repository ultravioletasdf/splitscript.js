const { get, post, patch, put, delete: deleteReq } = require('../request');
module.exports = {
	get: async (invite_code, params) =>
		get(`https://discord.com/api/v10/invites/${invite_code}`, params),
	delete: async (invite_code) =>
		deleteReq(`https://discord.com/api/v10/invites/${invite_code}`),
};
