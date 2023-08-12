const Joi = require("joi");

const { REGEXPS } = require("../constants");

const addContactSchema = Joi.object({
  name: Joi.string().min(4).max(255).required(),
  email: Joi.string().min(4).max(255).pattern(REGEXPS.email).required(),
  phone: Joi.string().min(4).max(20).required(),
});

module.exports = addContactSchema;
