const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  if(!['360834865639325697', '397725731985293312', '572827880091025408', '599563864509513739'].includes(message.author.id)){
        return message.reply(`Esse comando só pode ser executado pelos desenvolvedores :)`)
    }
  
  let rEmbed = new Discord.MessageEmbed()
  .setTitle("<a:check:715556795002650694> __**Reiniciado!**__")
  .setDescription("<a:jedi:712276927401951283> Fui reiniciado com sucesso! \n\n <a:config:715242355837632623> Reiniciado com " + Math.floor(client.ws.ping) + "ms")
  
  
  message.channel.send(rEmbed).then(() => {process.exit(1)})
}

exports.help = {
  name: 'reiniciar'
}