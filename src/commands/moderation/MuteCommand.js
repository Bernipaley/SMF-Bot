const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")
    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('853430040012521482');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`Fuiste muteado en ${message.guild.name}`)
      .setDescription(`Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
    const sEmbed = new Discord.MessageEmbed()
      .setTitle(`${mentionedMember} Muteado`);


    if (!args[0]) return message.channel.send('\`s!mute @usuario razon\`');
    if (!mentionedMember) return message.channel.send('🛑 No encuentro al miembro 🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑 No te podes mutear a vos mismo 🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑 No me podes mutear con mi mismo comando 🛑');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(muteRole)) return message.channel.send('🛑 Este miembro ya esta muteado 🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑 No podes mutear a alguien con tu misma jerarquia 🛑')


    await mentionedMember.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(muteRole).catch(err => console.log(err).then(message.channel.send('🛑 Hubo un error tratando de mutear al miembro 🛑')));
    message.channel.send(mentionedMember + "muted")



  }
} 