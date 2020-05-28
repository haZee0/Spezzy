const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  const member =  message.author;
  
  let erro = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("Parece que você não informou nenhuma descrição!")
  .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Sua descrição foi definida com sucesso!")
  .setColor('GREEN')
  
  let desc = db.get(`desc_${member.id}`)
  if(!desc) desc = "Sem descrição definida"
  
  let a = args.slice(0).join(' ')
  
  
  if(!args[0]) return message.channel.send(erro)
  db.set(`desc_${member.id}`, a)
  message.channel.send(ok)
}

exports.help = {
  name: 'desc'
}