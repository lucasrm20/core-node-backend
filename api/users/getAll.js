const UserService = require("../../services/User.service");

function getAll(req, res, next) {

  const userService = new UserService();
  
  userService
    .getAll({}, { _id: 0, password: 0 })
    .then(users => res.json(users))
    .catch(err => next(err));

};

module.exports = getAll;
