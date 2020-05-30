  const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  let p = db.get(`prefix_${message.guild.id}`)
  
  if(!p) p = 's!'
  
  let erro = new Discord.MessageEmbed()
  
  .setTitle('Informação')
  .setDescription('**Defina um prefixo alternativo para o servidor**')
  .addField("**Uso**", `\`${p}setprefix <prefixo>\``)
  .addField("**Exemplo**", `\`${p}setprefix .\``)
  .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
  .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
  
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
  .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Prefixo alterado com sucesso!")
  .setColor('GREEN')
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(erroB)
  if(!args.join(" ")) return message.channel.send(erro)
   db.set(`prefix_${message.guild.id}`, args.join(" ").trim())
  
  message.channel.send(ok)
}

exports.help = {
  name: 'setprefix'
}