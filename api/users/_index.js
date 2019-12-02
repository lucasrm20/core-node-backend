const express = require('express');
const router = express.Router();

// Middlewares
const getAll = require('./getAll');
const createOne = require('./createOne');

// Joi Validate
const createOneValidate = require('./_validates/createOne.validate');

router.get('/', getAll);

router.post('/', [
  createOneValidate,
  createOne
]);

module.exports = router;
