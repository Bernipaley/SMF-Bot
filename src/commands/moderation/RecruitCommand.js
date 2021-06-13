const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RecruitCommand extends BaseCommand {
  constructor() {
    super('recruit', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")
    const staffRole = message.guild.roles.cache.get('853409311198806027');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffPrefix = ' | MOD'
    const staffEmbed = new Discord.MessageEmbed()
      .setTitle(`Ahora sos staff en ${message.guild.name}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`SFM Bot, Comando solicitado por: ${message.author.tag}`);
    const sEmbed = new Discord.MessageEmbed()
      .setTitle('staff added');
      const staffwEmbed = new Discord.MessageEmbed()
      .setDescription("¡Hola! \n\ Bienvenido al equipo de moderadores del servidor de SFM Scrims \n\ Se te pide releer las reglas. \n\ Para revisar los comandos de moderacion (que es de caracter OBLIGATORIO) usar el comando `s!modcommands`")
    
    
    if (!args[0]) return message.channel.send('🛑\`s!recruit @user reason\`🛑 ');
    if (!mentionedMember) return message.channel.send('🛑No encuentro el miembro🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑No podes ser staff vos mismo ya lo sos🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑 Yo ya soy staff 🛑');
    if (mentionedMember.roles.cache.has(staffRole)) return message.channel.send('🛑 Este miembro ya es staff 🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑 No le podes dar moderador a alguien con tu misma jerarquia 🛑')

    message.channel.send(sEmbed)
    await mentionedMember.send(staffwEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(staffRole.id).catch(err => console.log(err).then(message.channel.send('🛑 Hubo un error en el proceso🛑')));
    await mentionedMember.setNickname(mentionedMember.user.username +   staffPrefix);
    



  }
} 