const db = require('quick.db')
const p = require('../config.json')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
    let erro = new Discord.MessageEmbed()
    .setTitle("**Informação**")
    .setDescription("**Aposte seus BitCodes**")
    .addField("**Uso**", `\`${p.prefix}apostar <valor>\``, true)
    .addField("**Exemplo**", `\`${p.prefix}apostar 50\``, true)
    .addField("**Permissão necessária**", `\`Nenhuma\``)
    .setColor('GOLD')

    var money = await db.get(`reais_${message.author.id}`)

    var numeroaposta = parseInt(args[0]);
    if(!numeroaposta) return message.channel.send(erro)

    if(isNaN(numeroaposta)) return message.channel.send(erro)

    if(numeroaposta > money){
        return message.channel.send(`${message.author.username}, você não possuí **${numeroaposta} BitCodes!**`)
    }

    if(message.content.includes('-')) {
        return message.reply("Você não pode apostar um número negativo!")
    }

    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if(random === 3){
        let wining = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}**, você apostou **${numeroaposta} BitCodes** e **GANHOU**!`)
        .addField("Agora você possuí", `**${money + numeroaposta} BitCodes!**`)
        .setColor('GREEN')
        message.channel.send(wining)
        db.add(`reais_${message.author.id}`, numeroaposta)
    }
    else {
        let losing = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}**, você apostou **${numeroaposta} BitCodes** e **PERDEU**!`)
        .addField("Agora você possuí", `**${money - numeroaposta} BitCodes**`)
        .setColor('RED')
        message.channel.send(losing)
        db.subtract(`reais_${message.author.id}`, numeroaposta)
    }
}

exports.help = {
    name: 'apostar'
}