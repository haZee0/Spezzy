const Discord = require('discord.js')

exports.run = async(client, message, args) => {

  let user = message.author;

  let sEmbed = new Discord.MessageEmbed()
  .setTitle("<a:hype:710964726481551490> Servidores onde estou:")
  .setDescription(client.guilds.cache.map(x => x.name))
  .setFooter(`Requisitado por ${message.author.username}`, user.avatarURL())
  .setThumbnail(client.user.displayAvatarURL())

  message.channel.send(sEmbed)
}

exports.help = {
  name: 'servidores'
}