const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  const member =  message.author;
  
  let desc = db.get(`desc_${member.id}`)
  if(!desc) desc = "Sem descrição definida"
  
  let a = args.slice(0).join(' ')
  
  
  if(!args[0]) return message.channel.send("Escreva uma descrição, por favor")
  db.set(`desc_${member.id}`, a)
  message.channel.send("**Configuração da descrição concluída com sucesso!**")
}

exports.help = {
  name: 'desc'
}