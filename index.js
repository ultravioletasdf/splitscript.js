module.exports = {
	sleep: function sleep(milliseconds) {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	},
	discord: require('./src/discord/index.js'),
	https: require('splitscript.https'),
	debug: require('./src/debug.js')
};
