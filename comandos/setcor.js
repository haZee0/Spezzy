const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  const member = message.author;
  
  let erro = new Discord.MessageEmbed()
  .setTitle("**__ERRO__**")
  .setDescription("Parece que você não citou nenhuma cor!")
  .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("**__Sucesso!__**")
  .setDescription('<a:check:715556795002650694> | Sua cor de perfil foi alterado com sucesso!')
  .setColor('GREEN')
  
  let cor = db.get(`cor_${member.id}`)
  if(!cor) cor = 'GOLD'
  
  let a = args.slice(0).join(' ')
  
  if(!args[0]) return message.channel.send(erro)
  db.set(`cor_${member.id}`, a)
  message.channel.send(ok)
}

exports.help = {
  name: 'setcor'
}