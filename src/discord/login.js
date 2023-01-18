const variable = require('../variable.js');
module.exports = (token) => {
	variable.set('_token', token);
};
