const EventEmitter = require('events');
module.exports = {
	variable: {},
	emitter: new EventEmitter(),
	set: function (key, value) {
		this.variable[key] = value;
		this.emitter.emit('set', key, value);
	},
	get: function (key) {
		return this.variable[key];
	}
};
