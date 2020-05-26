const db = require("quick.db")
const p = require("../config.json")
const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    let erro = new Discord.MessageEmbed()
    .setTitle(`Informações`)
    .setDescription(`**Selecione o canal de punições!**`)
    .addField("**Uso**", `\`${p.prefix}stafflog <id do canal>\``, true)
    .addField("**Exemplo**", `\`${p.prefix}stafflog **ID**\``, true)
    .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
    .setColor('GOLD')

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não tem permissção necessária para executar esse comando!`)
    if(!args.join(" ")) return message.channel.send(erro)
    if(isNaN(args.join(" "))) return message.channel.send(erro)

    var canal = db.set(`punichannel_${message.guild.id}`, args.join(" ").trim())

    message.channel.send("**Canal de punições setado com sucesso!**")

}

exports.help = {
  name: "stafflog"
}