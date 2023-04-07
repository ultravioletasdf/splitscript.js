module.exports = (token) => {
	let id = token.split('.')[0];
	return Buffer.from(id, 'base64').toString('ascii');
};
