const Discord = require('discord.js');

exports.run = (client, message, args) => {     
    var numero = Math.floor(Math.random() * 6) + 1;

    let emb = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle("**🎲 Dado**")
    .setDescription(`Você jogou o dado e caiu em... \`${numero}\``)

    message.channel.send(emb)
}

exports.help = {
    name: 'dado'
}
