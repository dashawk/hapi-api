'use strict';

const handlers = require('../helpers/handler-helpers');
const routes = {
	endpoints: [
		{ method: 'POST', path: '/api/login', config: handlers.auth.login },
		{ method: 'POST', path: '/api/logout', config: handlers.auth.logout },
	   
		{ method: 'GET', path: '/api/user', config: handlers.users.getAllUsers },
		{ method: 'POST', path: '/api/user', config: handlers.users.createUser },
		{ method: 'GET', path: '/api/user/{_id}', config: handlers.users.getUserByID }
	]
};

module.exports = routes;