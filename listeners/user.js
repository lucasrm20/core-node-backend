const eventEmitter = require('../util/event-emitter').getInstance();
const mailer = require('../util/mailer');

const events = Object.freeze({
  USER_REGISTRATION: "USER_REGISTRATION",
});

eventEmitter.on(events.USER_REGISTRATION, (user) => {
  console.log(`User Registered: ${user.email}`);
});

eventEmitter.on(events.USER_REGISTRATION, (user) => {
  mailer.sendMail(user.email, 'Bem Vindo', 'register-success', { user });
});

module.exports = {
  events
}
