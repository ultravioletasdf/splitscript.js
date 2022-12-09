const axios = require('axios');
const auth = require('splitscript.js/src/auth.js');
module.exports = {
	list: async function (guild_id) {
		try {
			let res = await axios({
				method: 'get',
				url: `https://discord.com/api/v10/guilds/${guild_id}/emojis`,
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
	get: async function (guild_id, emoji_id) {
		try {
			let res = await axios({
				method: 'get',
				url: `https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`,
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
	create: async function (guild_id, emoji) {
		try {
			let res = await axios({
				method: 'post',
				url: `https://discord.com/api/v10/guilds/${guild_id}/emojis`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				},
				data: emoji
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	modify: async function (guild_id, emoji_id, emoji_object) {
		try {
			let res = await axios({
				method: 'patch',
				url: `https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`,
				headers: {
					Authorization: `Bot ${auth.get('_token')}`,
					'Content-Type': 'application/json'
				},
				data: emoji_object
			});
			return res.data;
		} catch (e) {
			if (e?.response?.data)
				throw new Error(JSON.stringify(e.response.data, null, 2));
			else throw e;
		}
	},
	delete: async function (guild_id, emoji_id) {
		try {
			let res = await axios({
				method: 'delete',
				url: `https://discord.com/api/v10/guilds/${guild_id}/emojis/${emoji_id}`,
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
};
