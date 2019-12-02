const Joi = require('@hapi/joi');

module.exports = function(req, res, next) {

  Joi
    .object()
    .keys({
      name:     Joi.string().trim().required(),
      lastName: Joi.string().trim().required(),
      email:    Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().trim().required()
    })
    .validate(req.body, err => {
      if (err) 
        return res.status(401).json(err.details);
      
      return next();
    });

}
