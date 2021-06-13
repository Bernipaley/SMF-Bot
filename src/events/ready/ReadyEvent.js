const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    client.user.setPresence({
      activity: {
        name: 'o!comandos | o!ayuda',
        type: "WATCHING"
      }
})
  }
}