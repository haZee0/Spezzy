const Discord = require('discord.js')

exports.run = async(client, message, args, prefix) => {
    let pErro = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription(`<:erro:712413899638702090> | ${message.author}, você não tem a permissão **MANAGE_CHANNELS** para utilizar esse comando!`)
    .setColor('RED')

    let pErro2 = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription(`<:erro:712413899638702090> | ${message.author}, parece que eu não tenho permissão para executar esse comando!`)
    .setColor('RED')

    let ok1 = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Canal bloqueado com sucesso!")
    .setColor('GREEN')

    let ok2 = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Canal desbloqueado com sucesso!")
    .setColor('GREEN')

    let ajuda = new Discord.MessageEmbed()
    .setTitle("__**Algo deu errado...**__")
    .setDescription("Tente utilizar " + prefix + "chat <on/off>")
    .setColor('ORANGE')




    if(!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply(pErro)

    if(!message.guild.me.hasPermission(["MANAGE_CHANNELS"])) return message.reply(pErro2);

    if(!args[0]) return message.reply(ajuda);

    const everyone = message.guild.roles.cache.find(e => e.name === "@everyone");

    if(args[0] === "off") {
        message.channel.overwritePermissions([
            {
                id: everyone.id,
                deny: ["SEND_MESSAGES"]
            }
        ])

        message.reply(ok1);
    }

    if(args[0] === "on") {
        message.channel.overwritePermissions([
            {
                id: everyone.id,
                allow: ["SEND_MESSAGES"]
            }
        ])

        message.reply(ok2);

}
    }

exports.help = {
    name: 'chat'
}