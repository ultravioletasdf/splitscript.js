module.exports = {
	variable: {},
	set: function (key, value) {
		this.variable[key] = value;
	},
	get: function (key) {
		return this.variable[key];
	}
};
