const Discord = require('discord.js')
const p = require('../config.json')

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply("apenas membros com permissão de administrador podem executar esse comando!")
  
  let erro = new Discord.MessageEmbed()
  .setTitle("Informação")
  .setDescription("**Aplique um warn a um usuário**")
  .addField("**Uso**", `\`${p.prefix}warn <pessoa> <motivo>\``, true)
  .addField("**Exemplo**", `\`${p.prefix}warn cereja xingamentos em massa\``, true)
  .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
  .setColor('GOLD')
  
  let motivo = args.slice(1).join(" ");
  if(!motivo) return message.channel.send(erro)
  
  let membro = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  if(!membro) return message.channel.send(erro);
  if(membro === message.author) return message.reply("você não pode aplicar um warn em você mesmo!")
  
  let embed = new Discord.MessageEmbed()
  .setTitle("WARN", membro.avatarURL())
  .setColor('RED')
  .setDescription(motivo)
  .setFooter(`Responsável pela punição: ${message.author.username}`, message.author.avatarURL())
  
  membro.send(embed)
  message.reply("Aviso enviado para o membro com sucesso!")
}

exports.help = {
  name: 'warn'
}