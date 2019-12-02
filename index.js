const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandlers = require('./middlewares/error-handlers');

require('dotenv').config();
require('./config/db-connection').connect();

const app = express();
const api = '/api/v1';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Disable Morgan Logs on TEST Environment
if (!process.env.NODE_ENV || !process.env.NODE_ENV === 'test') {
  app.use(morgan(process.env.LOG_LEVEL));
}

app.get('/', function(req, res) {
  res.json('ok');
});

// API Routes
app.use(`${api}/users`, require('./api/users/_index'));

// Error Handlers
app.use(errorHandlers.handler404);
app.use(errorHandlers.handler500);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${listener.address().port}`);
});

module.exports = app;
