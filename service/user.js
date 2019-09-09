const User = require('../models/user');

exports.getAll = (where={}, projection={}) => {
  return User.find(where, projection).exec();
};

exports.createOne = async (user) => {

  if (await _isEmailAlreadyInUse(user.email))
    return Promise.reject({ status: 401, message: "Já existe um usuário cadastrado com o email informado." });

  const newUser = new User({
    ...user,
    id: await _getNextIdValue()
  });

  return newUser.save();
};

const _getNextIdValue = async function() {
  return await User.countDocuments({}).exec() + 1;
};

const _isEmailAlreadyInUse = async function(email) {
  const qtd = await User.countDocuments({ email }).exec();
  return qtd > 0;
};
