const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client,message,args) => {

  let embed = new Discord.MessageEmbed()
  
  .setColor("PURPLE")
  .setTitle(`<:info:712475983005089852> ${message.guild.name}`)
  .addField(`__**Quantidade de membros**__`, `${message.guild.memberCount}`)
  .addField(`__**Cargos**__`, message.guild.roles.cache.map(a => `\`${a.name}\``).join(", "), true)
  .setThumbnail(message.guild.iconURL())

  message.channel.send(embed)
}

exports.help = {
  name: 'serverinfo'
}