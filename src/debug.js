const auth = require('./auth.js');
module.exports = function () {
	auth.set('debug', true);
};
