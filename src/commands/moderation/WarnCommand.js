const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class WarnCommand extends BaseCommand {
  constructor() {
    super('warn', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")


    const warnrole1 = message.guild.roles.cache.find(role => role.name == 'Warnings : [1]');
    const warnrole2 = message.guild.roles.cache.find(role => role.name == 'Warnings : [2]');
    const warnrole3 = message.guild.roles.cache.find(role => role.name == 'Warnings : [3]');
    const muteRole = message.guild.roles.cache.get('853430040012521482');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let punishment = 1;
    let reason = args.slice(2).join(" ");

    if (!warnrole1) await message.guild.roles.create({
      data: {
        name: 'Warnings : [1]',
        color: 'GREY'
      }
    }).catch(err => console.log(err));

    if (!warnrole2) await message.guild.roles.create({
      data: {
        name: 'Warnings : [2]',
        color: 'GREY'
      }
    }).catch(err => console.log(err));

    if (!warnrole3) await message.guild.roles.create({
      data: {
        name: 'Warnings : [3]',
        color: 'GREY'
      }
    }).catch(err => console.log(err));

    if (!args[0]) return message.channel.send('Tenes que mencionar a un miembri para checkear cuantas warn tiene, añadir o remover warns')
    if (!mentionedMember) return message.channel.send('Tenes que mencionar a un usuario');
    if (!reason) reason = 'No se dio razon'

    if (mentionedMember.roles.cache.has(warnrole1)) punishment = 2;
    if (mentionedMember.roles.cache.has(warnrole2)) punishment = 3;
    if (mentionedMember.roles.cache.has(warnrole3)) punishment = 4;

    if (!['add', 'remove'].includes(args[1])) {
      if (punishment == 1) {
        return message.channel.send(`${mentionedMember.user.tag} no tiene warnings.`);
      } else if (punishment == 2) {
        return message.channel.send(`${mentionedMember.user.tag} tiene 1 warning.`);

      } else if (punishment == 3) {
        return message.channel.send(`${mentionedMember.user.tag} tiene 2 warnings.`);

      } else if (punishment == 4) {
        return message.channel.send(`${mentionedMember.user.tag} tiene 3 warnings.`);

      }

    } else {
      if (args[1] == 'add') {
        if (punishment == 1) {
          await mentionedMember.roles.add(warnrole1.id).catch(err => console.log(err))
          return message.channel.send(`${mentionedMember} fuiste advertido por ${reason}`)
	  

        } else if (punishment == 2) {
          await mentionedMember.roles.add(warnrole2.id).catch(err => console.log(err))
          await mentionedMember.roles.remove(warnrole1.id).catch(err => console.log(err))
          return message.channel.send(`${mentionedMember}, fuiste advertido por ${reason}`)
      
        } else if (punishment == 3) {
          await mentionedMember.roles.add(warnrole3.id).catch(err => console.log(err))
          await mentionedMember.roles.remove(warnrole2.id).catch(err => console.log(err))
          return message.channel.send(`${mentionedMember}, fuiste advertido por ${reason}`)
       
        } else if (punishment == 4) {
          await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err))
          await mentionedMember.roles.remove(warnrole3.id)
          message.channel.send(`${mentionedMember} muteado porque alcanzo el limite de warns`)
          
  
        }

      } else if (args[1] == 'remove') {
        if (punishment == 1) {
          return message.channel.send(`${mentionedMember.user.tag}, no tiene warnings.`)

        } else if (punishment == 2) {
          await mentionedMember.roles.remove(warnrole1.id).catch(err => console.log(err))
          return message.channel.send(`Le saque 1 warning a  ${mentionedMember.user.tag}`)
      
        } else if (punishment == 3) {
          await mentionedMember.roles.remove(warnrole2.id).catch(err => console.log(err))
          return message.channel.send(`Le saque 1 warning a ${mentionedMember.user.tag}`)
       
        } else if (punishment == 4) {
          
        }
      }
    }
  }
}