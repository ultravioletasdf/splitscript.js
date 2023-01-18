const variable = require('../variable.js');
const tokenToId = require('./tokenToId.js');
module.exports = (token) => {
	variable.set('_token', token);
	variable.set('_application_id', tokenToId(token)); // Saves and gets application id for auth
};
