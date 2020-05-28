const db = require('quick.db')
const p = require('../config.json')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  let erro = new Discord.MessageEmbed()
  
  .setTitle('Informação')
  .setDescription("**Selecione o canal para enviar sugestões**")
  .addField("**Uso**", `\`${p.prefix}setsugestao <id>\``, true)
  .addField("**Exemplo**", `\`${p.prefix}setsugestao **ID**\``, true)
  .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
  .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
  .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Configuração do canal de sugestões concluída com sucesso!")
  .setColor('GREEN')
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(erroB)
  
  if(!args.slice(0).join(" ")) return message.channel.send(erro)
  const canal = db.set(`sugest_${message.guild.id}`, args.join(" ").trim())
  if(isNaN(args.join(' '))) return message.channel.send(erro)
  
  message.channel.send(ok)
}

exports.help = {
  name: 'setsugestao'
}