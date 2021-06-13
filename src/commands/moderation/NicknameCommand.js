const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join (" ");


    if (!args[0]) return message.channel.send("🛑 Tenes que mencionar un miembro 🛑");
    if (!mentionedMember) return message.channel.send("🛑 No puedo encontrar al miembro 🛑");
    if (!nickName) return message.channel.send("🛑 Por favor pone el nickname 🛑")
    if (!mentionedMember.kickable) return message.channel.send("🛑 No le puedo cambiar el nickname a alguien con mi misma jerarquia o mayor 🛑");

    await mentionedMember.setNickname(nickName).catch(err => console.log(err) && message.channel.send(" Hubo un error en el proceso."))
    
    message.channel.send(`Nickname de ${mentionedMember} cambiado a  ${nickName}`)
    console.log(`Nickname of ${mentionedMember} changed to ${nickName}`)
  


}}    
  