// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.get('853426080546422784');
    welcomeChannel.send(`Hola, <@${member.user.id}> Bienvenid@ a ${member.guild.name} Recorda leer las <#853424946376867840> y ante cualquier duda avisarle a los moderadores!`)
    
  }
}
