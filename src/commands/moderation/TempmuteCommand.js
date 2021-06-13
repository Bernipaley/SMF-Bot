const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmuteCommand extends BaseCommand {
  constructor() {
    super('tempmute', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

    const muteRole = message.guild.roles.cache.get('853430040012521482');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");

    const tempmuteEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste muteado temporalmente en ${message.guild.name}`)
      .addField(`Duracion ${time}`, `Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp();
      

    const tempmutefinishedEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste desmuteado en  ${message.guild.name}`)
      .setColor('RANDOM');

    if (!args[0]) return message.channel.send('Tenes que mencionar a un miembro con la respectiva duracion');
    if (!mentionedMember) return message.channel.send(' No encuentro al miembro ');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(' No podes mutear a alguien con tu misma jerarquia ');
    if (!time) return message.channel.send(' Tenes que poner una duracion ');
    if (reason) reason = 'No se dio razon';

    await mentionedMember.roles.add(muteRole).catch(err => console.log(err));
      await mentionedMember.roles.remove(memberRole).catch(err => console.log(err));
      await mentionedMember.send(tempmuteEmbed).catch(err => console.log(err)); message.channel.send(`${mentionedMember.tag} Muteado por ${time}`)
    
    setTimeout(async function () {
      await mentionedMember.roles.remove(muteRole).catch(err => console.log(err));
      await mentionedMember.roles.add(memberRole).catch(err => console.log(err)); message.channel.send(`${mentionedMember.tag} desmuteado`)
      await mentionedMember.send(tempmutefinishedEmbed).catch(err => console.log(err));
    }, ms(time));
    



  }
}