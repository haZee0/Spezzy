const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {     
  
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem executar este comando!`)
    
    db.delete(`lcanal_${message.guild.id}`)

    message.reply("sistema desativado com sucesso!")
}

exports.help = {
    name: 'saida-off'
}