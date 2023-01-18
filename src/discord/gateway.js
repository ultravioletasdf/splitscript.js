const WS = require('ws');
const fs = require('fs');
const path = require('path');
const root = path.dirname(require.main.filename);
const variable = require('../variable.js');
function connect(token, options) {
	if (!token) throw new TypeError('Property TOKEN must be set');
	variable.set('_token', token);
	const ws = new WS('wss://gateway.discord.gg/?v=6&encoding=json');
	const heartbeat = (ms) => {
		return setInterval(() => {
			ws.send(JSON.stringify({ op: 1, d: null }));
		}, ms);
	};
	let interval = 0;
	let payload = {
		op: 2,
		d: {
			token: token,
			properties: {
				os: 'windows',
				browser: 'splitscript',
				device: 'splitscript'
			},
			presence: options?.presence ?? { status: 'online' },
			intents: options?.intents ?? 32767 // Default to all perms
		}
	};
	ws.on('open', () => {
		ws.send(JSON.stringify(payload));
		if (variable.get('debug')) {
			console.log('Open Payload: ', payload);
		}
	});
	ws.on('message', (data) => {
		const DEBUG = variable.get('debug');
		let payload = JSON.parse(data);
		let { t, event, op, d } = payload;
		if (op === 10) {
			// Keep connection open
			const { heartbeat_interval } = d;
			interval = heartbeat(heartbeat_interval);
		}
		if (op === 1) {
			ws.send(JSON.stringify({ op: 1, d: null }));
		}
		if (op === 7) {
			ws.send(JSON.stringify({ op: 6, d: null }));
		}
		if (DEBUG) console.log('Message Payload: ', payload);
		if (!t) return;
		const funcPath =
			'/functions/discord/' + t.toLowerCase().replace(/_/g, '/') + '/';
		let funcs;
		try {
			funcs = fs.readdirSync(root + funcPath);
		} catch (e) {
			if (DEBUG) {
				console.log(
					e.response?.data
						? new Error(JSON.stringify(e.response?.data, null, 2))
						: e
				);
			}
			return;
		}
		funcs.forEach((func) => {
			const ex = require(path.resolve(root + funcPath + func));
			try {
				ex(d);
			} catch (e) {
				console.log('Error: \n', JSON.stringify(e, null, 2));
			}
		});
	});
	ws.on('close', (data) => {
		setTimeout(() => {
			connect(token, options);
		}, 5000);
	});
}

module.exports = connect;
