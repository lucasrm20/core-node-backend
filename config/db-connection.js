const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.NODE_ENV && process.env.NODE_ENV==='test' ?
  process.env.DB_TEST_NAME : process.env.DB_NAME;

const mdbUrl = `mongodb+srv://${dbUser}:${password}@cluster0-ihqlt.mongodb.net/${dbName}?retryWrites=true&w=majority`;

exports.connect = function() {

  mongoose.connect(mdbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', () => {
    mongoose.set('useFindAndModify', false);
    console.log(`Connected to MongoDB: ${mdbUrl}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log(`Database disconnected from: ${mdbUrl}`);
  });

  mongoose.connection.on('error', err => {
    console.log(`Database error on connection: ${err}`);
  });

  process.on('SIGINT', () => {

    mongoose.connection.close(() => {
      console.log('Database disconnected due the end of application');
      process.exit(0);
    });

  });

};
