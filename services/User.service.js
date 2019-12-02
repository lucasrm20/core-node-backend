const User = require('../models/user');

const eventEmitter = require('../util/event-emitter').getInstance();
const userEvents = require('../listeners/user').events;

class UserService {

  constructor() {}

  getAll(where={}, projection={}) {
    return User.find(where, projection).exec();
  }

  async createOne(user) {

    if (await this._isEmailAlreadyInUse(user.email))
      return Promise.reject({ status: 401, message: "Já existe um usuário cadastrado com o email informado." });
  
    const newUser = new User({
      ...user,
      id: await this._getNextIdValue()
    });
  
    return new Promise((resolve, reject) => {
      
      newUser
        .save()
        .then(user => {
          eventEmitter.emit(userEvents.USER_REGISTRATION, user);
          resolve(user);
        })
        .catch(err => reject(err)); 
    });

  }

  async _getNextIdValue() {
    return await User.countDocuments({}).exec() + 1;
  };

  async _isEmailAlreadyInUse(email) {
    const qtd = await User.countDocuments({ email }).exec();
    return qtd > 0;
  }

}

module.exports = UserService;
