const Discord = require('discord.js')
const db = require('quick.db')
const p = require('../config.json')

exports.run = async(client, message, args) => {
  if(!['360834865639325697','397725731985293312','572827880091025408'].includes(message.author.id)){
    return message.reply("Apenas desenvolvedores tem acesso a esse comando!")
  }
  
  if(!args[0]) return message.channel.send("Escreva um número, por favor")
  if(isNaN(args[0])) return message.channel.send("Um número, por favor")
  
  let member = message.mentions.users.first() || message.guil.members.cache.get(args[1]) || message.author;
  
  message.channel.send(`**${message.author}** removeu **${args[0]} BitCodes** da conta do usuário **${member}**`)
  db.subtract(`reais_${member.id}`, args[0])

}

exports.help = {
  name: 'removemoney'
}