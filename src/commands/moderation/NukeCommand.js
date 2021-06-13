const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

    const nukeChannel = message.channel;


    let  reason = args.join("  ");

    if (!reason) reason = 'No se dio razon';
    if (nukeChannel.deleteable) return message.channel.send("🛑 Este canal no se puede eliminar 🛑")

   await nukeChannel.clone().catch(err => console.log(err));
   await nukeChannel.delete(reason).catch(err => console.log(err));
   


  }
}