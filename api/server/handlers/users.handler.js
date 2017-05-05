'use strict';

const User = require('../models/Users');
const Joi = require('joi');
const Boom = require('boom');

const getAllUsers = {
    handler: (request, response) => {
        User.find({}, (error, users) => {
            if (!error) {
                response({
                    statusCode: 200,
                    message: 'List of Users succesfully fetched!',
                    data: users
                });
            } else {
                response(Boom.badImplementation(err));
            }
        });
    }
};

const getUserByID = {
    description: 'Get user details by userID',
    handler: (request, response) => {
        const { _id } = request.params;

        User.findOne({ _id }, (error, user) => {
            if (!error) {
                response({
                    statusCode: 200,
                    message: `User details found ${_id}`,
                    data: user
                });
            } else {
                response({
                    statusCode: 404,
                    message: 'User not found'
                });
            }
        })
    }
};

const createUser = {
    description: 'Register a new user',
    validate: {
        payload: {
            userID: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
        }
    },
    handler: (request, response) => {
        var user = new User(request.payload);
        user.save((error, user) => {
            if (!error) {
                response({
                    statusCode: 200,
                    message: 'A new user successfully registered',
                    data: user
                });
            } else {
                response(Boom.badData(error));
            }
        });
    }
};

module.exports = {
    getAllUsers,
    getUserByID,
    createUser
};