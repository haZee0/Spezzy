
const Discord = require("discord.js")
const db = require('quick.db')
const c = require('../config.json');

exports.run = async (client, message, args, config) => {
  
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Pague BitCodes para um usuário*`)
  .addField(`**Uso**`, `\`${c.prefix}pay <@pessoa> <valor>\``, true)
  .addField(`**Exemplo**`, `\`${c.prefix}pay @cereja 50\``, true)
  .addField(`**Permissão necessária**`, `\`Nenhuma\``)
  .setColor('GOLD')  

    const member = message.mentions.users.first() 

    const money = db.get(`reais_${message.author.id}`)

    if (!member) {
        return message.channel.send(erro)
    }
  
    if (member === message.author) {
        return message.reply(`Mencione outro usuário!`)
    }
  
    if (!args[1]) {
        return message.channel.send(erro)
    }
  
    if (!args[0]) {
        return message.channel.send(erro)
    }

    if (args[1] < 1) {
      return message.channel.send(`**»** **${message.author.username}**, coloque um número acima de **¥ 1,00**`)
    }

    if (message.content.includes('-')) { 
        return message.channel.send(`**»** **${message.author.username}**, você não pode pagar um valor negativo`)
    }
  
   if (isNaN(args[1])) {
     return message.channel.send(`lll`)
   }

    if (money < args[1]) {
        return message.channel.send(`**»** **${message.author.username}**, você não possui **${args[1]} BitCodes**.`)
    }

    message.channel.send(`**${message.author.username}**, você realmente deseja pagar **¥ ${args[1]}** ao membro **${member.username}**?`).then(s => {
      s.react('653747627019599882')
        let filtro = (reaction, usuario) => reaction.emoji.id === "653747627019599882" && usuario.id === message.author.id;
        let coletor = s.createReactionCollector(filtro, {max: 1, time: 36000});

        coletor.on("collect", c => {
            c.remove(message.author.id);
          
          message.channel.send(`**»** Pronto **${message.author.username}**, pagamento feito com êxito!`)
          s.delete()
         db.add(`reais_${member.id}`, args[1])
         db.subtract(`reais_${message.author.id}`, args[1])
           
     })
    })
}

exports.help = {
    name: 'pay'
}