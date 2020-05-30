const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem executar esse comando!`)
  
  db.delete(`punichannel_${message.guild.id}`)
  
  message.reply("sistema desativado com sucesso!")
}

exports.help = {
  name: 'punicoes-off'
}