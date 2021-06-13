const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  

 async  run(client, message, args) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given"
    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(` Fuiste kickeado de: ${message.guild.name}`)
    .setDescription(`Razon: ${reason}`)
    .setColor('RANDOM')
    .setTimestamp()
    const syntaxEmbed = new Discord.MessageEmbed()
   .setAuthor(client.user.tag, client.user.displayAvatarURL())
   .addField('**Error de sintaxsis detectado**', 'Asegurate de estar escribiendo el comando bien (`s!kick @usuario razon`)')
   .addField('**Si no, puede ser un problema con el bot**', 'Si estas escribiendo bien el comando, mandale un mensaje a Berni#5331 Para solucionar el problema')
   .setColor('RANDOM')
   .setTimestamp();
   const unkickableEmbed = new Discord.MessageEmbed()
   .setAuthor(client.user.tag, client.user.displayAvatarURL())
   .setTitle(`I cant kick ${mentionedMember}`)
   .setColor('RANDOM')
   .setTimestamp();
    // ¿kick @user reason
    if (!args[0]) return message.channel.send(syntaxEmbed);
    if (!mentionedMember) return message.channel.send(syntaxEmbed);
    if (!mentionedMember.kickable) return message.channel.send(unkickableEmbed);
    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log('i was unable to message the member');
    }

    try {
      await mentionedMember.kick(reason), message.channel.send("Succesfully kicked")
    } catch (err) {
      console.log(err)
      return message.channel.send("i was unable to kick the user")
    }
  }
}