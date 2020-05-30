const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem utilizar esse comando!`)
  
  db.delete(`denuchannel_${message.guild.id}`)
  
  message.reply("sistema desativado com sucesso!")
}
exports.help = {
  name: 'denuncias-off'
}