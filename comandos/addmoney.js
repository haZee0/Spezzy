const Discord = require('discord.js')
const db = require('quick.db')
const p = require('../config.json')

exports.run = async(client, message, args) => {
    if(!['360834865639325697', '397725731985293312', '572827880091025408'].includes(message.author.id)){
        return message.reply(`Esse comando só pode ser executado pelos desenvolvedores :)`)
    }

    if(!args[0]) return message.channel.send(`Escreva uma quantia a ser depositada`)
    if(isNaN(args[0])) return message.channel.send(`Um número por favor!`)

    let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;

    message.channel.send(`${message.author} depositou **${args[0]}** BitCodes na conta do membro ${member}`)
    db.add(`reais_${member.id}`, args[0])

}

exports.help = {
    name: 'addmoney'
}