const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

   let reason = args.slice(1).join(" ")
   let userID = args[0];

  if (!reason) reason = ('No reason given');
  if (!args[0]) return message.channel.send("Tenes que poner el id para desbanear.")
  if (isNaN(args[0])) return message.channel.send("El ID no es valido")

  message.guild.fetchBans().then(async bans => {
    if (bans.size == 0) return message.channel.send(' En este servidor no hay baneos ');
    let bUser = bans.find(b => b.user.id == userID);
    if (!bUser) return message.channel.send(' El ID Citado no esta baneado ');
    await message.guild.members.unban(bUser.user, reason).catch(err => {
      console.log(err);
      return message.channel.send(' Ocurrio un error ');
    }).then(() => {
      message.channel.send(`${args[0]} desbaneado exitosamente`);
    })
  })

  }
}