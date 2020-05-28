const Discord = require("discord.js")
const db = require("quick.db")
const p = require("../config.json")

exports.run = async(client, message, args) => {
    const cargo = message.mentions.roles.first()
  
  
    let erro = new Discord.MessageEmbed()
    .setTitle("**Informações**")
    .setDescription("**Selecione o autorole do servidor**")
    .addField("**Uso**", `\`${p.prefix}autorole <cargo>\``, true)
    .addField("**Exemplo**", `\`${p.prefix}autorole **@membro**\``, true)
    .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
    .setColor('RED')
    
    let ok = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Autorole configurado com sucesso!")

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author}, você não tem permissão para executar esse comando!`)
    if(!args.join(" ")) return message.channel.send(erro)

    db.set(`autorole_${message.guild.id}`, cargo.id)

    message.channel.send(ok)

}

exports.help = {
    name: "autorole"
}