'use strict';

const Plugins = [
    {
        register: require('hapi-auth-jwt2'),
        options: {}

    }
];

module.exports = Plugins;