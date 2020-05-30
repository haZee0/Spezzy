const Discord = require('discord.js')
const p = require('../config.json')
const db = require('quick.db')

exports.run = async(client, message, args, prefix) => {
  let erroA = new Discord.MessageEmbed()
  .setTitle(`Informações`)
  .setDescription("**Selecione o canal que as denúncias serão enviadas!**")
  .addField("**Uso**", `\`${prefix}setdenuncia <id do canal>\``, true)
  .addField("**Exemplo**", `\`${prefix}setdenuncia **ID**\``, true)
  .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
  .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
  .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Canal de denúncias setado com sucesso!")
  .setColor('GREEN')
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(erroB)
  if(!args.join(" ")) return message.channel.send(erroA)
  if(isNaN(args.join(" "))) return message.channel.send(erroA)
  
  var dCanal = db.set(`denuchannel_${message.guild.id}`, args.join(" ").trim())

   message.channel.send(ok) 
}

exports.help = {
  name: 'setdenuncia'
}