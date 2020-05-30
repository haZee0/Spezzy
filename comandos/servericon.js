const Discord = require('discord.js') 

exports.run = (client, message, args) => {

    let member = message.mentions.users.first() || message.author;

    let embed = new Discord.MessageEmbed()

    .setColor('#FFFF')
    .setTitle(`${message.author.username}`)
    .setDescription("**[Baixe-a](" + message.guild.iconURL({size: 2048})+ ")**")
    .setImage(message.guild.iconURL())

    message.reply(embed)
}

exports.help = {
    name: 'servericon'
}
