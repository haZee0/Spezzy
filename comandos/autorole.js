const Discord = require("discord.js")
const db = require("quick.db")
const p = require("../config.json")

exports.run = async(client, message, args) => {
    const cargo = message.mentions.roles.first()
  
  
    let erro = new Discord.MessageEmbed()
    .setTitle("**Informações**")
    .setDescription("**Selecione o autorole do servidor**")
    .addField("**Uso**", `\`${p.prefix}autorole <id do cargo>\``, true)
    .addField("**Exemplo**", `\`${p.prefix}autorole **ID**\``, true)
    .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
    .setColor('GOLD')

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author}, você não tem permissão para executar esse comando!`)
    if(!args.join(" ")) return message.channel.send(erro)

    db.set(`autorole_${message.guild.id}`, cargo.id)

    message.channel.send("**Configuração do AutoRole concluída com sucesso!**")

}

exports.help = {
    name: "autorole"
}