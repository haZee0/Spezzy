const Discord = require('discord.js')
const moment = require('moment')
moment.locale("pt-br")

exports.run = async(client, message, args) => {
    let member;
    if(message.mentions.users.first()) {
        member = message.mentions.users.firtst();
    } else {
        member = message.author;
    }

    let embed = new Discord.MessageEmbed()
    .setTitle("UserInfo")
    .addField("Username:", member.username + "#" + member.discriminator)
    .addField("ID do usuário:", member.id)
    .addField("Data da criação da conta:", moment(member.createdAt).format('LLL'))
    .addField("Status:", `${member.presence.status}`)
    .addField("Jogando:", `${member.presence.game ? member.presence.game.name : 'Não está jogando nada no momento'}`)
    .setThumbnail(member.avatarURL())
    .setColor('ORANGE')

    message.channel.send(embed)

}

exports.help = {
    name: 'userinfo'
}