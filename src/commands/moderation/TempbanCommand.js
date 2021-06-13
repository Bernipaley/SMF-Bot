const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class TempbanCommand extends BaseCommand {
  constructor() {
    super('tempban', 'moderation', []);
  }

  async run (client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(2).join(" ");
    let time = args[1];
    const banEmbed = new Discord.MessageEmbed()
    .setTitle(`Fuiste baneado temporalmente de ${message.guild.name}`)
    .addField(`reason: ${reason}`, `Duration: ${time}`)
    .setTimestamp()

    if (!args[0]) return message.channel.send(' Tenes que mencionar a un usuario');
    if (!mentionedMember) return message.channel.send('No encuentro al miembro');
    if (!mentionedMember.bannable) return message.channel.send('No puedo banear al miembro');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(" No puedo banear a alguien con mi misma jerarquia o mayor ");
    if (!reason) reason = 'No reason given';
    if (!time) return message.channel.send(' Tenes que poner un tiempo ')

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    mentionedMember.ban({
      reason: reason
    }).catch(err => console.log(err)); message.channel.send(`${mentionedMember.tag} baneado exitosamente`)

  setTimeout(async function () {
     await message.guild.fetchBans().then(async bans => {
       if (bans.size == 0) return message.channel.send(' No hay baneados en este servidor ')
       let bannedUser = bans.find(b => b.user.id == mentionedMember.id)
       if (!bannedUser) return console.log(`${mentionedMember.tag} desbaneado luego de ${time}`)
        await message.guild.members.unban(bannedUser.user, reason).catch(err => console.log(err))
        message.delete();
     })
  }, ms(time));
  }
} 