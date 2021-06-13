const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const recon = require('reconlx'); 
const ReactionPages = recon.ReactionPages;

module.exports = class ComandosCommand extends BaseCommand {
  constructor() {
    super('comandos', 'fun', []);
  }

  async run(client, message, args) {
    const embed1 = new discord.MessageEmbed()
    .setTitle('Comandos')
    .addField('s!avatar', 'Con este comando, podes ver tu avatar')
    .addField('s!cronometro', 'Con este comando podes poner un cronometro. Se usa: `o!cronometro (tiempo)`')
    .setColor('RANDOM')
    .setFooter(`SMF Bot. Comando solicitado por: ${message.author.tag}`)
    const embed2 = new discord.MessageEmbed()
    .setTitle('Comandos')
    .addField('s!meme', 'Con este comando, el bot te da un meme')
    .addField('s!say', 'Con este comando, el bot va a mandar un mensaje diciendo lo que quieras.')
    .addField('s!suggest', 'Con este comando, podes mandar sugerencias en el servidor (<#853411814116163614>) Se usa asi: `s!suggest (la sugerencia)`')
    .setColor('RANDOM')
    .setFooter(`SMF Bot. Comando solicitado por: ${message.author.tag}`)
    const embed3 = new discord.MessageEmbed()
    .setTitle('Comandos')
    .addField('s!snipe', 'con este comando podes ver el ultimo mensaje eliminado del servidor.')
    .addField('s!reglas', 'Con este comando podes ver las reglas')
    .addField('Hay mas comandos, ', 'pero son de moderacion')
    .setColor('RANDOM')
    .setFooter(`SMF Bot. Comando solicitado por: ${message.author.tag}`)
    const pages = [embed1, embed2, embed3];
    const emojis = ['⬅️', '➡️'];

    ReactionPages(message, pages, true, emojis);
  }
}