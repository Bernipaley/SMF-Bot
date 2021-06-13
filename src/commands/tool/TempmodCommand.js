const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmodCommand extends BaseCommand {
  constructor() {
    super('tempmod', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑 No tenes los permisos suficientes para usar este comando. Mil disculpas 🛑');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑 No tengo los permisos suficientes, mil disculpas 🛑');

    
    const modRole = message.guild.roles.cache.get('853409311198806027');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");

    const tempmodEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste asignado como moderador en ${message.guild.name}`)
      .addField(`Duracion ${time}`, `Razon: ${reason}`)
      .setColor('RANDOM')
      .setFooter(`SMF Bot. Comando solicitado por: ${message.author.tag}`)
      .setTimestamp();
      
      const staffPrefix = ' | TEMP MOD'
    const modfinishedEmbed = new discord.MessageEmbed()
      .setTitle(` Termino tu tiempo como moderador en ${message.guild.name} gracias por colaborar!`)
      .setFooter(`SMF Bot. Comando solicitado por: ${message.author.tag}`)
      .setColor('RANDOM');

    if (!args[0]) return message.channel.send('🛑 Tenes que mencionar a un usuario para asignarle el rol \`s!tempmod @user tiempo razon\`🛑');
    if (!mentionedMember) return message.channel.send('🛑 No encuentro al miembro 🛑');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('🛑 No podes asignarle este rol a alguien que tiene tu misma jerarquia que usted. 🛑');
    if (!time) return message.channel.send('🛑 Tenes que asignar un tiempo para asignarle el rol 🛑');
    if (reason) reason = 'No se dio razon';

    await mentionedMember.roles.add(modRole).catch(err => console.log(err));
      await mentionedMember.send(tempmodEmbed).catch(err => console.log(err)); message.channel.send(`Moderador añadido a: ${mentionedMember} por: ${time} `)
      await mentionedMember.setNickname(mentionedMember.user.username +   staffPrefix);
    
    setTimeout(async function () {
      await mentionedMember.roles.remove(modRole).catch(err => console.log(err)); message.channel.send(`Se le a removido el rol de moderador a ${mentionedMember.tag}`)
      await mentionedMember.send(modfinishedEmbed).catch(err => console.log(err));
      await mentionedMember.setNickname(mentionedMember.user.username);
    }, ms(time));
    



  }
}