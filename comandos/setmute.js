const Discord = require('discord.js');
const p = require("../config.json")
const db = require("quick.db")

exports.run = (client,message,args, prefix) => {
  const role = message.mentions.roles.first() //Código para mencionar a role 
  
  //Criação de embed's
  
  let erro = new Discord.MessageEmbed()
  .setTitle("**Informações**")
  .setDescription("Selecione o cargo que usará para mutar usuários.")
  .addFields(
    {name: "**Uso**", value: `\`${prefix}setmute <@cargo>\``, inline: false },
    {name: "**Exemplo**", value: `\`${prefix}setmute <@silenciado>\``, inline: false},
    {name: "**Permissão Necessária**", value: `\`ADMINISTRATOR\`` , inline: false}
  )

  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso !**__")
  .setDescription("<a:check:715556795002650694> | Cargo de mute configurado com sucesso !")

  //Fim da criação

  //Requirindo permissão para poder usar o comando e algumas coisinhas a mais.
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(erro)
  }
  if(!args.join(" ")) {
    return message.channel.send(erro)
  }

  //Encaminhando...
  db.set(`muterole_${message.guild.id}`, role.id)

  message.channel.send(ok)
}

exports.help = {
  name: "setmute"
}