const https = require('splitscript.https');
const variable = require('splitscript.js/src/variable');
module.exports = {
	get: async function (url, params) {
		let response = await https.get(url, params, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	post: async function (url, data) {
		let response = await https.post(url, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	patch: async function (url, data) {
		let response = await https.patch(url, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	put: async function (url, data) {
		let response = await https.put(url, data, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
	delete: async function (url) {
		let response = await https.delete(url, {
			headers: {
				Authorization: `Bot ${variable.get('_token')}`,
				'Content-Type': 'application/json',
			},
		});
		if (response.errors) throw new Error(JSON.stringify(response, null, 2));
		return response;
	},
};
