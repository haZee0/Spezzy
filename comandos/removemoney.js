const Discord = require('discord.js')
const db = require('quick.db')
const p = require('../config.json')

exports.run = async(client, message, args) => {
  if(!['360834865639325697','397725731985293312','572827880091025408', '599563864509513739'].includes(message.author.id)){
    return message.reply("Apenas desenvolvedores tem acesso a esse comando!")
  }
  
  let erro = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Escreva uma quantia!")
  .setColor('RED')
  
  if(!args[0]) return message.channel.send(erro)
  if(isNaN(args[0])) return message.channel.send(erro)
  
  let member = message.mentions.users.first() || message.guil.members.cache.get(args[1]) || message.author;

  
    let ok = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription(`<a:check:715556795002650694> | ${message.author} removeu **${args[0]} BitCodes na conta do membero **${member}**`)
    .setColor('GREEN')
    
  message.channel.send(ok)
  db.subtract(`reais_${member.id}`, args[0])

}

exports.help = {
  name: 'removemoney'
}