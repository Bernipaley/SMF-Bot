const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")
    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('853430040012521482');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const unmuteEmbed = new Discord.MessageEmbed()
      .setTitle(`Fuiste desmuteado en ${message.guild.name}`)
      .setDescription(`Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
    


    if (!args[0]) return message.channel.send('\`S!unmute @usuario razon\` ');
    if (!mentionedMember) return message.channel.send(' No encuentro al miembro ');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send(' No te podes desmutear a vos mismo ')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send(' No me podes desmutear con mi mismo comando ');
    if (!reason) reason = 'No reason given';
    if (!mentionedMember.roles.cache.has(muteRole)) return message.channel.send(' Este miembro ya esta desmuteado ');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send(' No podes desmutear a alguien con tu misma jerarquia ')


    await mentionedMember.send(unmuteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.remove(muteRole).catch(err => console.log(err).then(message.channel.send(' Ocurrio un error en el proceso de desmuteo del usuario ')));
    message.channel.send(mentionedMember +  "Unmuted")



  }
} 
  
