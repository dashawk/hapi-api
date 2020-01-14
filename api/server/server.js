'use strict';

const Hapi = require('hapi');
const plugins = require('./modules/plugins');	// Register HapiJS plugins here
const Routes = require('./core/routes');	// Get all routes

/**
 * TODO: Need to start database connection before initializing the Hapi Server
 */
require('./config/database');	

const start = (host, port) => {

	return new Promise((resolve, reject) => {

		// Initialize the server
		const server = new Hapi.Server();
		server.connection({ host, port, routes: { cors: true } });

		// Register all plugins
		server.register(plugins, (error) => {
			if (error) {
				console.log(error);
				return reject(error);
			}

			// Initialize Routes
			server.route(Routes.endpoints);

			// Start listening for requests
			server.start((error) => {
				if (error) {
					console.log(error);
					return reject(error);
				}

				console.log(`Server running at: ${server.info.uri}`);
				resolve();
			});

			server.on('request-error', (request, error) => {
				console.log(error);
			});

		});

	});
};

module.exports = { start };