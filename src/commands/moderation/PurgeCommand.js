const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  
  async run(client, message, args) {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You dont have permissions to delete messages')
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("i dont have permissions to delete messages")
    if (!args[0]) return message.channel.send("You must put a number to use this command! (1-500)")
    const amonutToDelete = Number(args[0], 10);
    

    if (isNaN(amonutToDelete)) return message.channel.send("Number invalid!")
    if (!Number.isInteger(amonutToDelete)) return message.channel.send("Number must be a whole number");
    if(!amonutToDelete  || amonutToDelete < 1 || amonutToDelete > 100) return message.channel.send('The number must be between ```1-100```')
    const fetched = await message.channel.messages.fetch({
      limit: amonutToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
      .then(messages => message.channel.send(`Succesfully! I have deleted ${messages.size} messages!`))
      
      
    } catch (err) {
      console.log(err);
      message.channel.send(`i was unable to delete the amount selected, make sure they are within 14 days old.`);
      
      

    }
  }
}