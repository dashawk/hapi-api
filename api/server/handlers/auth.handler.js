'use strict';

const login = {
	handler: (request, response) => {
		response({
			statusCode: 200,
			message: 'user should login here.'
		});
	}
};

const logout = {
	handler: (request, response) => {
		response({
			statusCode: 200,
			message: 'succesfully logged out!'
		});
	}
};

module.exports = {
	login,
	logout
};