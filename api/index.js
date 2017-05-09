'use strict';

const server = require('./server/server');
const config = require('./server/config/config');

server.start(config.server.host, config.server.port);