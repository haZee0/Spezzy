exports.run = async(client, message, args) => {

        const db = require('quick.db')
        const { MessageEmbed } = require('discord.js')

        const embed = new MessageEmbed()
            .setTitle(`__MENSAGEM__`)
            .setDescription(`» Escreva abaixo a mensagem de boas-vindas`)
            .addField(`__**VARIAÇÕES**__`, `{membro} - Menciona o usuário\n{users} - Puxa a quantidade de usuários no servidor\n{servidor} - Puxa o nome do servidor`)
            .setColor('#206694')
            message.channel.send(embed).then(msg => {
            message.delete()
            let cj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
                    max: 1
                })
                .on('collect', c => {
                    const texto = c.content
                    db.set(`wmessage_${message.guild.id}`, texto)

                    const embed2 = new MessageEmbed()
                        .setTitle(`__TÍTULO__`)
                        .setColor('#206694')
                        .setDescription(`» Agora, escreva um título`)

                    message.channel.send(embed2).then(msg2 => {
                        message.delete()
                        let cjj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
                                max: 1
                            })
                            .on('collect', c => {
                                const titulo = c.content
                                db.set(`wtitle_${message.guild.id}`, titulo)

                                const embed3 = new MessageEmbed()
                                    .setTitle(`__CANAL__`)
                                    .setColor('#206694')
                                    .setDescription(`» Por fim, mencione o canal que deseja definir como de boas-vindas`)

                                message.channel.send(embed3).then(msg3 => {
                                    message.delete()
                                    let cjjj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
                                            max: 1
                                        })
                                        .on('collect', c => {
                                            const canal = c.mentions.channels.first()
                                            if (!canal) {
                                                return message.channel.send({embed: {
                                                    color: 15158332,
                                                    title: "❌ **|** COMANDO INCORRETO",
                                                    description:"\`< mencione um canal >\`"
                                                }})
                                        }
                                    db.set(`wcanal_${message.guild.id}`, canal.id)

                                    message.channel.send({embed: {
                                        color: '#faa61a',
                                        description: `Pronto ${message.author}, sistema de entrada configurado com sucesso!`
                                    }}) 
                            })
                        })
                    })
                })
            })
        })
    }
exports.help = {
  name: 'welcome'
}