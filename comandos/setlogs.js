const Discord = require('discord.js')
const p = require('../config.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let erroA = new Discord.MessageEmbed()
    .setTitle("Informações")
    .setDescription("**Selecione o canal de logs!**")
    .addField("**Uso**", `\`${p.prefix}setlogs <id>\``, true)
    .addField("**Exemplo**", `\`${p.prefix}logs **ID**\``, true)
    .addField("**Permissão necessária**", `\`ADMINISTRATOR\``)
    .setColor('RED')

    let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
    .setColor('RED')

    let ok = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Configuração do canal de logs concluída com sucesso!")
    .setColor('GREEN')

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(erroB)

    if(!args.slice(0).join(" ")) return message.channel.send(erroA)
    db.set(`logCh_${message.guild.id}`, args.join(" ").trim())
    if(isNaN(args.join(' '))) return message.channel.send(erroA)

    message.channel.send(ok)
}

exports.help = {
    name: 'setlogs'
}