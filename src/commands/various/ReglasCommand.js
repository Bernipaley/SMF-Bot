const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ReglasCommand extends BaseCommand {
  constructor() {
    super('reglas', 'various', []);
  }

  run(client, message, args) {
    const reglasEmbed = new Discord.MessageEmbed()
    .setTitle("Reglas")
    .addField("Regla 1","✅ Ser respetuoso con **todos**")
    .addField("Regla 2","✅ Ser amable con todos")
    .addField("Regla 3","✅ Jugar Fortnite")
    .addField("Regla 4","✅ Notificarle a los moderadores si hay algun problema")
    .addField("Regla 5","✅ Usar cada canal para su proposito")
    .addField("Regla 6","✅ Tener nicknames que se entiendan y que no sean ofensivos.")
    .addField("Regla 7","🚫 Compartir contenido NO relacionado al grupo = 2 warnings")
    .addField("Regla 8","🚫Insultar, atacar o realizar una accion malhiriente, ya sea por privado o por el sevidor = 1 Warn")
    .addField("Regla 9","🚫Realizar spam = Muteada temporal por 30 minutos")
    .addField("Regla 10","🚫Abusar de tu rol")
    .addField("Regla 11", "🚫 Enviar contenido NSFW o GORE = Ban por 24Hs")
    .addField("Regla 12", "🚫 Molestar en un canal de voz = Muteada por 30 minutos")
    .addField("Regla 13", "🚫 No mensajes subliminales")
    .setTimestamp();
    message.delete();
    message.channel.send('@everyone')
    message.channel.send(reglasEmbed);

  }
}