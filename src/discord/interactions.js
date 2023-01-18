const axios = require('axios');
const variable = require('../variable.js');
let APP_ID;
variable.emitter.on('set', (key, value) => {
	if (key === '_application_id') APP_ID = value;
}); // Set application_id when it is sent by gateway/login

module.exports = {
	commands: {
		create: async function (command, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands`;
				let res = await axios({
					method: 'post',
					url: URL,
					data: command,
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
		},
		delete: async function (command_id, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
				await axios({
					url: URL,
					method: 'delete',
					headers: {
						Authorization: `Bot ${variable.get('_token')}`
					}
				});
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		update: async function (command_id, command, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
				await axios({
					url: URL,
					method: 'patch',
					data: command,
					headers: {
						Authorization: `Bot ${variable.get('_token')}`
					}
				});
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		list: async function (guild_id, with_localizations) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands`;
				let res = await axios({
					url: URL,
					method: 'get',
					headers: {
						Authorization: `Bot ${variable.get('_token')}`
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
		bulkOverwrite: async function (commands, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands`;
				let res = await axios({
					url: URL,
					method: 'put',
					data: commands,
					headers: {
						Authorization: `Bot ${variable.get('_token')}`,
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
		get: async function (command_id, guild_id) {
			try {
				let URL;
				if (guild_id)
					URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}`;
				else
					URL = `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}`;
				let res = await axios({
					method: 'get',
					url: URL,
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
		},
		permissons: {
			get: async function (command_id, guild_id) {
				try {
					let URL;
					if (guild_id)
						URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`;
					else
						URL = `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}/permissions`;
					let res = await axios({
						method: 'get',
						url: URL,
						headers: {
							Authorization: `Bot ${variable.get('_token')}`
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
			update: async function (command_id, permissions, guild_id) {
				try {
					let URL;
					if (guild_id)
						URL = `https://discord.com/api/v10/applications/${APP_ID}/guilds/${guild_id}/commands/${command_id}/permissions`;
					else
						URL = `https://discord.com/api/v10/applications/${APP_ID}/commands/${command_id}/permissions`;
					let res = await axios({
						method: 'put',
						url: URL,
						data: {
							permissions: permissions
						},
						headers: {
							Authorization: `Bearer ${variable.get('_token')}`,
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
					data: response
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		get: async function (token) {
			try {
				let res = await axios({
					method: 'get',
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		edit: async function (token, response) {
			try {
				let res = await axios({
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`,
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
		delete: async function (token) {
			try {
				let res = await axios({
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/@original`,
					method: 'delete'
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		}
	},
	followups: {
		create: async function (token, message) {
			try {
				let res = await axios({
					method: 'post',
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}`,
					data: message
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		get: async function (token, message_id) {
			try {
				let res = await axios({
					method: 'get',
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		edit: async function (token, message_id, message) {
			try {
				let res = await axios({
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`,
					method: 'patch',
					data: message
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		},
		delete: async function (token, message_id) {
			try {
				let res = await axios({
					url: `https://discord.com/api/v10/webhooks/${APP_ID}/${token}/messages/${message_id}`,
					method: 'delete'
				});
				return res.data;
			} catch (e) {
				if (e?.response?.data)
					throw new Error(JSON.stringify(e.response.data, null, 2));
				else throw e;
			}
		}
	}
};
