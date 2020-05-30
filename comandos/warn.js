const Discord = require('discord.js')
const p = require('../config.json')

exports.run = async(client, message, args, prefix) => {
  let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
    .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você não pode aplicar punições em você mesmo!")
    .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Aviso enviado com sucesso!")
    
    
  
  if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply(erroA)
  
  let erro = new Discord.MessageEmbed()
  .setTitle("Informação")
  .setDescription("**Aplique um warn a um usuário**")
  .addField("**Uso**", `\`${prefix}warn <pessoa> <motivo>\``, true)
  .addField("**Exemplo**", `\`${prefix}warn cereja xingamentos em massa\``, true)
  .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
  .setColor('RED')
  
  let motivo = args.slice(1).join(" ");
  if(!motivo) return message.channel.send(erro)
  
  let membro = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  if(!membro) return message.channel.send(erro);
  if(membro === message.author) return message.reply(erroB)
  
  let embed = new Discord.MessageEmbed()
  .setTitle("WARN", membro.avatarURL())
  .setColor('RED')
  .setDescription(motivo)
  .setFooter(`Responsável pela punição: ${message.author.username}`, message.author.avatarURL())
  
  membro.send(embed)
  message.reply(ok)
}

exports.help = {
  name: 'warn'
}