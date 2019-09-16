const { EventEmitter } = require('events');

let instance;

class MyEventEmitter extends EventEmitter {
  constructor() {
    super();
  }
}

module.exports = {
  getInstance: () => {
    return instance || (instance = new MyEventEmitter());
  }
}
