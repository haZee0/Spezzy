const Discord = require('discord.js')

exports.run = async(client,message,args) => {
const pEmb = new Discord.MessageEmbed()
  
  .setColor("PURPLE")
  .setTitle(":robot: **Conexão**")
  .setDescription(":desktop: Meu ping é "+ Math.floor(client.ws.ping)+ " ms")
  
message.channel.send(pEmb)

}

exports.help = {
  name: "ping"
}
