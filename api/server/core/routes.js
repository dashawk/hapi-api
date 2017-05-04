'use strict';

const handlers = require('../helpers/handler-helpers');

const routes = (server) => [
    {
        method: 'GET',
        path: '/api/user',
        config: {
            handler: handlers.users.getAllUsers,
            description: 'Get all users'
        }
    },

    {
        method: 'GET',
        path: '/api/user/{id}',
        config: {
            handler: handlers.users.getUserByID,
            description: 'Get user data by user ID'
        }
    }
];

module.exports = routes;