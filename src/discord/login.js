const auth = require('../auth.js');
module.exports = (token) => {
	auth.set('_token', token);
};
