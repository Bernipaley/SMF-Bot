const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnlockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

    const role = message.guild.roles.cache.get('853428831305072651');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;

    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: true
    }).catch(err => console.log(err));
    message.channel.send('Desbloquee el canal exitosamente! :unlock:');
  }
}