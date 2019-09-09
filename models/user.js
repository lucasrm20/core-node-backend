const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema, 'user');
