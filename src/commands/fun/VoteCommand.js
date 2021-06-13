const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('vote', 'information', []);
  }

  async run(client, message, args) {
    const filter = m => m.author.id == message.author.id;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No podes usar esto"); 
    let embed = new Discord.MessageEmbed()
      .setFooter(`Votacion por ${message.author.tag}`);
      

    message.channel.send('Cual es el topico de la votacion?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.setTitle(msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Te quedaste sin tiempo, intenta nuevamente');
    }

    message.channel.send('Cual es el primer punto a votar?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.addField(`[🔴] Primera opcion para votar:`, msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Te quedaste sin tiempo, intenta nuevamente');
    }

    message.channel.send('Cual es el segundo punto a votar?');
    try {
      let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
      console.log(msg.first().content);
      embed.addField(`[🔵] Segunda opcion para votar:`, msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Te quedaste sin tiempo, intenta nuevamente');
    }
    message.channel.send(embed).then(sentMessage => sentMessage.react('🔴')).then(reaction => reaction.message.react('🔵'));
  }
}