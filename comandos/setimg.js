const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  const member =  message.author;
  
  
  let erro = new Discord.MessageEmbed()
  .setTitle("**__ERRO__**")
  .setDescription("Você não colocou o link de nenhuma imagem!")
  .setColor('RED');
  
  let ok = new Discord.MessageEmbed()
  .setTitle("**__Sucesso!__**")
  .setDescription("Sua imagem de perfil foi alterada com sucesso!")
  .setColor('GREEN')
  
  let pimg = db.get(`pimg_${member.id}`)
  if(!pimg) pimg = `${client.user.avatarURL()}`
  
  let a = args.slice(0).join(' ')
  
  if(!args[0]) return message.channel.send(erro)
  db.set(`pimg_${member.id}`, a)
  message.channel.send(ok)
}

exports.help = {
  name: 'setimg'
}