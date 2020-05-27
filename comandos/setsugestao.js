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
  .setColor('GOLD')
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Você não tem permissão para executar esse comando!")
  
  if(!args.slice(0).join(" ")) return message.channel.send(erro)
  const canal = db.set(`sugest_${message.guild.id}`, args.join(" ").trim())
  if(isNaN(args.join(' '))) return message.channel.send(erro)
  
  message.channel.send("**Configuração do canal de sugestões concluída com sucesso!**")
}

exports.help = {
  name: 'setsugestao'
}