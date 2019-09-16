const eventEmitter = require('../util/event-emitter').getInstance();

function initListeners() {

  eventEmitter.on('batata', x => {
    console.log(`Outro listener: ${x.msg}`);
  });

}

module.exports = {
  initListeners
}