const axios = require('axios');
const variable = require('../variable.js');
module.exports = {
	get: async function (invite_code, params) {
		try {
			let res = await axios({
				method: 'get',
				url: `https://discord.com/api/v10/invites/${invite_code}`,
				headers: {
					Authorization: `Bot ${variable.get('_token')}`
				},
				params: params
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	delete: async function (invite_code) {
		try {
			let res = await axios({
				method: 'delete',
				url: `https://discord.com/api/v10/invites/${invite_code}`,
				headers: {
					Authorization: `Bot ${variable.get('_token')}`
				}
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	}
};
