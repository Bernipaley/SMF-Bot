const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class modcommandsCommand extends BaseCommand {
  constructor() {
    super('modcommands', 'various', []);
  }

  run(client, message, args) {
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("Moderation commands")
    .addField('N-1','s!ban')
    .addField('Como se usa?','Facil! \`s!ban @usuario razon (//Porque queres banear al miembro//)\`  El miembro va a recibir un mensaje privado con la razon del baneo ')
    .addField('N-2','s!tempban')
    .addField('Como se usa?','Facil! \` s!tempban @usuario razon tiempo\` El miembro va a recibir un mensaje privado con la razon del baneo temporal')
    .addField('N-3','s!kick')
    .addField('Como se usa?',' Facil! \`s!kick @usuario razon \` El miembro va a recibir un mensaje privado con la razon de la expulsion ')
    .addField('N-4','s!lock')
    .addField('Como se usa?','Facil! \`s!lock\` (Tenes que poner eso en el canal que queres bloquear. Por ejemplo, voy hacia <#853406475552030733> y pongo s!lock cuando mandas eso, nadie va a poder mandar mensajes')
    .addField('N-5','s!unlock')
    .addField('Como se usa?','Facil! \`s!unlock\` (Tenes que poner eso en el canal que queres desbloquear. Por ejemplo, voy hacia <#853406475552030733> y pongo s!unlock cuando mandas eso, van a poder volver a mandar mensajes')
    .addField('N-6','s!nickname')
    .addField('Como se usa?','Facil! \`s!nickname @usuario nuevo nickname\` Si alguien tiene un nickname ofensivo, lo podes cambiar con este comando')
    .addField('N-7','s!purge')
    .addField('Como se usa?','Facil! \`s!purge 1-100 (cantidad de mensajes que queres eliminar)\`')
    .addField('N-8','s!tempmute')
    .addField('Como se usa?','Facil! \` s!tempmute @usuario razon\` //El miembro va a recibir un mensaje privado con la razon del muteo temporal con el tiempo. ')
    .addField('N-9','o!mute')
    .addField('Como se usa?','Facil! \` s!mute @usuario razon\` //El miembro va a recibir un mensaje privado con la razon del muteo')
    .addField('N-10','o!unmute')
    .addField('Como se usa?','Facil! \` s!unmute @usuario razon\` //El miembro va a recibir un mensaje privado con la razon del desmuteo ')
    .addField('N-11', 'o!nuke')
    .addField('Como se usa?', 'Facil! \n\ s!nuke (En el canal que queres recrear)')
    .setTimestamp();
    message.delete()
    message.channel.send(rulesEmbed);
  }
}