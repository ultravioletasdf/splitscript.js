const axios = require('axios');
const auth = require('../auth.js');
module.exports = {
	commands: {
		create: async function (app_id, command, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands`;
				let res = await axios({
					method: 'post',
					url: URL,
					data: command,
					headers: {
						Authorization: `Bot ${auth.get('_token')}`
					}
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		delete: async function (app_id, command_id, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands/${command_id}`;
				await axios({
					url: URL,
					method: 'delete',
					headers: {
						Authorization: `Bot ${auth.get('_token')}`
					}
				});
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		update: async function (app_id, command_id, command, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands/${command_id}`;
				await axios({
					url: URL,
					method: 'patch',
					data: command,
					headers: {
						Authorization: `Bot ${auth.get('_token')}`
					}
				});
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		list: async function (app_id, guild_id, with_localizations) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands`;
				let res = await axios({
					url: URL,
					method: 'get',
					headers: {
						Authorization: `Bot ${auth.get('_token')}`
					},
					params: {
						with_localizations: with_localizations
					}
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		bulkOverwrite: async function (app_id, commands, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands`;
				let res = await axios({
					url: URL,
					method: 'put',
					data: commands,
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
		get: async function (app_id, command_id, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${app_id}/commands/${command_id}`;
				let res = await axios({
					method: 'get',
					url: URL,
					headers: {
						Authorization: `Bot ${auth.get('_token')}`
					}
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		permissons: {
			get: async function (app_id, command_id, guild_id) {
				try {
					let URL;
					if (guild_id)
						URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands/${command_id}/permissions`;
					else
						URL = `https://discord.com/api/v10/applications/${app_id}/commands/${command_id}/permissions`;
					let res = await axios({
						method: 'get',
						url: URL,
						headers: {
							Authorization: `Bot ${auth.get('_token')}`
						}
					});
					return res.data;
				} catch (e) {
					if (e?.response?.data)
						throw new Error(
							JSON.stringify(e.response.data, null, 2)
						);
					else throw e;
				}
			},
			update: async function (app_id, command_id, permissions, guild_id) {
				try {
					let URL;
					if (guild_id)
						URL = `https://discord.com/api/v10/applications/${app_id}/guilds/${guild_id}/commands/${command_id}/permissions`;
					else
						URL = `https://discord.com/api/v10/applications/${app_id}/commands/${command_id}/permissions`;
					let res = await axios({
						method: 'put',
						url: URL,
						data: {
							permissions: permissions
						},
						headers: {
							Authorization: `Bearer ${auth.get('_token')}`,
							'Content-Type': 'application/json'
						}
					});
					return res.data;
				} catch (e) {
					if (e?.response?.data)
						throw new Error(
							JSON.stringify(e.response.data, null, 2)
						);
					else throw e;
				}
			}
		}
	},
	responses: {
		create: async function (id, token, response) {
			try {
				let res = await axios({
					method: 'post',
					url: `https://discord.com/api/v10/interactions/${id}/${token}/callback`,
					data: response,
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		get: async function (app_id, token) {
			try {
				let res = await axios({
					method: 'get',
					url: `https://discord.com/api/v10/webhooks/${app_id}/${token}/messages/@original`,
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		edit: async function (app_id, token, response) {
			try {
				let res = await axios({ 
					url: `https://discord.com/api/v10/webhooks/${app_id}/${token}/messages/@original`,
					method: 'patch',
					data: response
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		delete: async function (app_id, token) {
			try {
				let res = await axios({ 
					url: `https://discord.com/api/v10/webhooks/${app_id}/${token}/messages/@original`,
					method: 'delete',
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
	}
};
