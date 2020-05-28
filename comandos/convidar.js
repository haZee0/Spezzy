const Discord = require('discord.js')

exports.run = async(client, message, args) => {
   var member = message.author;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${member.username}`, member.avatarURL())
    .setDescription(`Olá, caso queira me adicionar em seu servidor, basta clicar no link abaixo!`)
    .addField("__📫 Convite__", "**Clique [aqui](https://discord.com/api/oauth2/authorize?client_id=712770826478419988&permissions=8&scope=bot)**")
    .setColor('RED')
    .setThumbnail(message.guild.iconURL())
    message.channel.send(embed)
}

exports.help = {
  name: 'convidar'
}