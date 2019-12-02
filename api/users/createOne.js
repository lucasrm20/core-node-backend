const UserService = require("../../services/User.service");

function createOne(req, res, next) {

  const userService = new UserService();

  userService
    .createOne(req.body)
    .then(users => {
      res.json("Usuário Cadastrado com Sucesso.");
    })
    .catch(err => next(err));

};

module.exports = createOne;