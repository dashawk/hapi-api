'use strict';

const Utility = {};

Utility.isValidEmail = (email) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);

module.exports = Utility;