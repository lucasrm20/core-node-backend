const Joi = require('@hapi/joi');

const register = Joi.object().keys({
  name:     Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email:    Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().trim().required()
});

module.exports = { register };
