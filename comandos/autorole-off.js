const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('você não tem permissão para utilizar esse comando!')
  
  db.delete(`autorole_${message.guild.id}`)
  
  message.reply("sistema desativado com sucesso!")
}

exports.help = {
  name: 'autorole-off'
}