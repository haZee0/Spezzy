const db = require('quick.db')
const Discord = require('discord.js')
const p = require('../config.json')

exports.run = async(client, message, args) => {
  let erroA = new Discord.MessageEmbed()
  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
    .setDescription(`\`denunciar\` -> Denuncie um usuário`)
    .addFields(
        {name: `**Uso**`, value:  `\`${p.prefix}denunciar @user <motivo>\``},
        {name: `:books: **Exemplo**`, value: `\`${p.prefix}denunciar @cereja divulgação dm\``})
    .setColor("RED")
  
const membro = message.mentions.members.first();
    if (!membro) { 
        let erroC = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Informe um membro para denunciar!")
  .setColor('RED')
}
  
const motivo = args.slice(1).join(" ");
    if (!motivo) {
      let erroB = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Informe um motivo para denunciar!")
  .setColor('RED')
}
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription("<a:check:715556795002650694> | Denúncia enviada com sucesso!")
  .setColor('GREEN')
  
  let rEmbed = new Discord.MessageEmbed()
  .setTitle("**Nova Denúncia!**")
  .addField("Autor da denúncia:", `${message.author}`)
  .addField("Membro denunciado:", `${membro}`)
  .addField("Motivo da denúncia:", `${motivo}`)
  
  if(!args.join(" ")) return message.channel.send(erroA)
  
  var canal = message.guild.channels.cache.get(db.get(`denuchannel_${message.guild.id}`))
  if(!canal){
    message.channel.send(`Caso dejese escolher um canal para enviar denúncias, utilize \`${p.prefix}setdenuncia\``, rEmbed)
  } else {
    canal.send(rEmbed)
  }
  
  message.channel.send(ok)
  
}

exports.help = {
  name: 'denunciar'
}