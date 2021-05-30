const joi = require('@hapi/joi');

const userName = joi.string().max(20);
const email = joi.email();
const password = joi.string().min(6).max(100).required();

const login = {
  userName,
  email,
  password,
};

module.exports = {
  login,
};
