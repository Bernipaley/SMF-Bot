 const BaseCommand = require('../../utils/structures/BaseCommand');
 const Discord = require('discord.js');


module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSay = args.join(" ")
    const sayEmbed = new Discord.MessageEmbed()
    .setDescription(`${messageToSay}`)
    .setFooter(message.author.tag ,message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();
    message.delete();

    try {
      await message.channel.send(sayEmbed);
      
   }  catch(err) {
     console.log(err)
     message.channel.send('Uhm, tuve un problema en mi intestino! Prueba nuevamente o enviale un mensaje a Berni#5331');
   }
  }
 }
