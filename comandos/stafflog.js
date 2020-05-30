const db = require("quick.db")
const p = require("../config.json")
const Discord = require("discord.js")

exports.run = async(client, message, args, prefix) => {
    let erro = new Discord.MessageEmbed()
    .setTitle(`Informações`)
    .setDescription(`**Selecione o canal de punições!**`)
    .addField("**Uso**", `\`${prefix}stafflog <id do canal>\``, true)
    .addField("**Exemplo**", `\`${prefix}stafflog **ID**\``, true)
    .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
    .setColor('RED')
    
    let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
    .setColor('RED')
    
    let ok = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Canal de punições setado com sucesso!")
    .setColor('GREEN')

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(erroB)
    if(!args.join(" ")) return message.channel.send(erro)
    if(isNaN(args.join(" "))) return message.channel.send(erro)

    var canal = db.set(`punichannel_${message.guild.id}`, args.join(" ").trim())

    message.channel.send(ok)

}

exports.help = {
  name: "stafflog"
}