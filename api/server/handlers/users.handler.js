'use strict';

const getAllUsers = (request, response) => {
    response({
        message: 'get all users'
    });
};

const getUserByID = (request, response) => {
    
    const { id } = request.params;

    response({
        message: `get user by user ID using ${id}`
    });
};

module.exports = {
    getAllUsers,
    getUserByID
};