module.exports = {
	auth: {},
	set: function (key, value) {
		this.auth[key] = value;
	},
	get: function (key) {
		return this.auth[key];
	}
};
