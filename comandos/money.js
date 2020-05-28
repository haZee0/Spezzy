const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    const member = message.mentions.users.first() || message.author;

    let reais = await db.get(`reais_${member.id}`)
    if(reais === null) reais = 0;

    let embed = new Discord.MessageEmbed()

    .addField(`**Saldo atual**`, `**${reais} BitCodes**`)
    .setColor('GREEN')
    .setThumbnail(member.displayAvatarURL())
    .setFooter(`${member.username}`)

    message.channel.send(embed)
}

exports.help = {
    name: 'money',
    aliases: ['dinheiro']
}