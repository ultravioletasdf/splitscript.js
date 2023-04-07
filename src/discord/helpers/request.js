const https = require('splitscript.https');
const variable = require('../../variable.js');

const url = `https://discord.com/api/v10/`;

module.exports = {
	get: async function (path, params) {
		let response = await https.get(url + path, params, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	post: async function (path, data) {
		let response = await https.post(url + path, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	patch: async function (path, data) {
		let response = await https.patch(url + path, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	put: async function (path, data) {
		let response = await https.put(url + path, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	delete: async function (path) {
		let response = await https.delete(url + path, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json'
			}
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	}
};
