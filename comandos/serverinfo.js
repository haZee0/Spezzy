const Discord = require("discord.js");
const c = require("../config.json");
const moment = require('moment');
require("moment-duration-format")

exports.run = (client,message,args) => {

  let canaistexto = message.guild.channels.cache.filter(a => a.type === "text").size
  let canaisvoz = message.guild.channels.cache.filter(a => a.type === "voice").size

  let embed = new Discord.MessageEmbed()
  
  .setColor("PURPLE")
  .setThumbnail(message.guild.iconURL())
  .setTitle(`<:info:712475983005089852> ${message.guild.name}`)
  .addField(`👑 Owner`, message.guild.owner, true)
  .addField(`💻 ID`, message.guild.id, true)
  .addField(`👥 Quantidade de membros`, message.guild.memberCount, true)
  .addField(`🤖 Bots`, message.guild.members.cache.filter(mem => mem.user.bot).size, true)
  .addField(`🌐 Região do servidor`, message.guild.region,true)
  .addField(`💬 Canais de texto`, `${canaistexto}`,true)
  .addField(`📢 Canais de voz`, `${canaisvoz}`,true)
  .addField(`📅 Criada em:`,  moment(message.guild.createdAt).format("dddd,Do MMMM , YYYY", true))

  let embed1 = new Discord.MessageEmbed()
  .addField('sla', 'teste')

  message.channel.send(embed).then(msg => {
    msg.react('◀️')
    msg.react('▶️')

    let filtro = (reaction,usuario) => reaction.emoji.name === "▶️" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, {max: 2})

    let filtro1 = (reaction,usuario) => reaction.emoji.name === "◀️" && usuario.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1, {max:2})

    coletor.on("collect", cp => {
      cp.remove(message.author.id)
      msg.edit(embed1)
      msg.react('◀️')
    });
    coletor1.on("collect", cp1 => {
      cp1.remove(message.author.id)
      msg.edit(embed)
      msg.react('◀️')
      msg.react('▶️')
    });
  });
}

exports.help = {
  name: 'serverinfo'
}