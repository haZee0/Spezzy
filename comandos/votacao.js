const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('você não tem permissão para abrir uma votacao')

    const embed = new Discord.MessageEmbed()
        .setTitle("__**MENSAGEM**__")
        .setDescription("» Escreva a mensagem da sua votação abaixo")
        .setColor('ORANGE')
    message.channel.send(embed).then(msg => {
        message.delete()
        let cf = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
            max: 1
        })
        .on("collect", t => {
            const texto = t.content;


        const embed2 = new Discord.MessageEmbed()
        .setTitle("__**TÍTULO**__")
        .setDescription("» Escreva o título da sua votação abaixo")
        .setColor('ORANGE')
    message.channel.send(embed2).then(msg => {
        message.delete()
        let cff = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
            max: 1
        })
        .on("collect", t => {
            const titulo = t.content;

        const embed3 = new Discord.MessageEmbed()
        .setTitle("__**CANAL**__")
        .setDescription("» Mencione abaixo o canal que será enviada a enquete")
        .setColor('ORANGE')
    message.channel.send(embed3).then(msg => {
        message.delete()
        let cfff = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
            max: 1
        })
        .on("collect", t => {
            const canal = t.mentions.channels.first()
            if(!canal) {
                return message.channel.send({embed: {
                    color: 15158332,
                    title: "❌ **|** COMANDO INCORRETO",
                    description:"\`< mencione um canal >\`"
                }})
            }
        
          
          
              const vt = new Discord.MessageEmbed()
              .setTitle(titulo)
              .setDescription(texto)
              .setTimestamp()
              .setThumbnail(message.guild.iconURL())
              .setColor('ORANGE')
              .setFooter(`Votação iniciada por: ${message.author.username}`, message.author.avatarURL())
              canal.send(vt).then(msg => {
              msg.react("👍")
              msg.react("👎")
    })
          
           const embed4 = new Discord.MessageEmbed()
          .setTitle("__**Sucesso**__")
          .setDescription(`Votação iniciada com sucesso no canal ${canal}`)
           message.channel.send(embed4)
          
          })
        
    })
          
        })
        
    })
          
        })
        
    })
}

exports.help = {
    name: 'votacao'
}