'use strict';

const server = require('./server/server');
const host = process.env.host || 'localhost';
const port = process.env.port || 7000;

server.start(host, port);