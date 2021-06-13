const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" No tenes los permisos suficientes para usar este comando, mil disculpas ")
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send (" No tengo los permisos suficientes para usar este comando, mil disculpas ")

    const value = Number(args[0]);
    

    if(!args[0]) return message.channel.send('Tenes que poner el tiempo que deseas para el slowmode');
    if(!value || value < 5 || value > 21600) return message.channel.send('Tenes que poner un numero entre `5-21600` esto representan los segundos del comando.');

    try {
      await message.channel.setRateLimitPerUser(value)
      message.channel.send(`Slowmode para ${message.channel} seteado a ${value} segundos.`)

    } catch (err) {
      console.log(err)
      message.channel.send('Ocurrio un error');

    }

  }
}