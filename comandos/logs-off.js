const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("você não tem permissão para utilizar esse comando!")

    db.delete(`logCh_${message.guild.id}`)

    message.reply("sistema desativado com sucesso!")
}

exports.help = {
    name: 'logs-off'
}