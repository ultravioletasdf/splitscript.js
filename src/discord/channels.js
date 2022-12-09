const axios = require('axios');
const auth = require('../auth.js');
function isString(obj) {
	return typeof obj === 'string' || obj instanceof String;
}
async function list(guild_id) {
	try {
		let res = await axios({
			method: 'get',
			url: `https://discord.com/api/v10/guilds/${guild_id}/channels`,
			headers: {
				Authorization: `Bot ${auth.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		return res.data;
	} catch (e) {
		if (e?.response?.data)
			throw new Error(JSON.stringify(e.response.data, null, 2));
		else throw e;
	}
}
module.exports = {
	get: async function (id) {
		try {
			let res = await axios({
				method: 'get',
				url: `https://discord.com/api/v10/channels/${id}`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				}
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	list: list,
	create: async function (guild_id, channel) {
		try {
			let res = await axios({
				method: 'post',
				url: `https://discord.com/api/v10/guilds/${guild_id}/channels`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				},
				data: channel
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	modify: async function (id, channel) {
		try {
			let res = await axios({
				method: 'patch',
				url: `https://discord.com/api/v10/channels/${id}`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				},
				data: channel
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	delete: async function (id) {
		try {
			let res = await axios({
				method: 'delete',
				url: `https://discord.com/api/v10/channels/${id}`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				}
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	invites: {
		list: async function (id) {
			try {
				let res = await axios({
					method: 'get',
					url: `https://discord.com/api/v10/channels/${id}/invites`,
					headers: {
						Authorization: `Bot ${auth.get('_token')}`,
						'Content-Type': 'application/json'
					}
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		create: async function (id, invite) {
			try {
				let res = await axios({
					method: 'post',
					url: `https://discord.com/api/v10/channels/${id}/invites`,
					headers: {
						Authorization: `Bot ${auth.get('_token')}`,
						'Content-Type': 'application/json'
					},
					data: invite ?? {}
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		}
	},
	multiple: {
		get: list,
		positions: {
			update: async function (guild_id, channels) {
				try {
					await axios({
						method: 'patch',
						url: `https://discord.com/api/v10/guilds/${guild_id}/channels`,
						headers: {
							Authorization: `Bot ${auth.get('_token')}`,
							'Content-Type': 'application/json'
						},
						data: channels
					});
				} catch (e) {
					if (e?.response?.data)
						throw new Error(
							JSON.stringify(e.response.data, null, 2)
						);
					else throw e;
				}
			}
		}
	}
};
