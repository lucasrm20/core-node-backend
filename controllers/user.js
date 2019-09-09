const userService = require("../service/user");

const Joi = require('@hapi/joi');
const userValidation = require('../validation/user');

exports.getAll = (req, res, next) => {
  
  userService
    .getAll({}, { _id: 0, password: 0 })
    .then(users => res.json(users))
    .catch(err => next(err));

};

exports.createOne = (req, res, next) => {

  const validation = Joi.validate(req.body, userValidation.register);
  
  if (validation.error)
    return res.status(401).json(validation.error.details[0].message);
  
  userService
    .createOne(req.body)
    .then(users => res.json("Usuário Cadastrado com Sucesso."))
    .catch(err => next(err));

};
