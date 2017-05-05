'use strict';

const config = {
    server: {
        host: process.env.host || 'localhost',
        port: process.env.PORT || 7000
    },
    database: {
        host: process.env.host || 'localhost',
        port: 27017,
        db: 'db-api',
        username: '',
        password: ''
    }
};

module.exports = config;