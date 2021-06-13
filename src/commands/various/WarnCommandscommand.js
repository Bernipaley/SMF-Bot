const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class WarncommandCommand extends BaseCommand {
  constructor() {
    super('warncommand', 'various', []);
  }

  run(client, message, args) {
    const warnEmbed = new Discord.MessageEmbed()
    .setTitle("Warn commands")
    .addField('N-1', 'o!warn1')
    .addField('How to use it?','Simple! \n\ o!warn1 @user reason \n\  This command is for give the first warn to a user')
    .addField('N-2', 'o!warn2')
    .addField('How to use it?','Simple! \n\ o!warn2 @user reason \n\  This command is for give the second warn to a user')
    .addField('N-3', 'o!warn3')
    .addField('How to use it?','Simple! \n\ o!warn3 @user reason \n\  This command is for give the third warn to a user')
    .setColor('RANDOM')
    .setImage('https://media.discordapp.net/attachments/820290191490154512/820691273148923974/FOOTER_ORT_BOT.jpg')

    message.channel.send(warnEmbed);    
    
    
  }
}