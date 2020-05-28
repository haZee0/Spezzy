const Discord = require('discord.js');

exports.run = (client,message,args) => {
  
    let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você precisa estar em um canal de voz!")
    .setColor('RED')
    
    let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Não tem nenhuma música na fila para eu dar loop!")
    .setColor('RED')
      
      const { channel } = message.member.voice;
      if (!channel) {
        return message.channel.send(erroA);
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!serverQueue) {
        return message.channel.send(erroB);
      }
      
      //OOOOF
      serverQueue.loop = !serverQueue.loop
      
     let ok = new Discord.MessageEmbed()
      .setTitle("__**Loop**__")
      .setDescription(`<a:check:715556795002650694> | O loop está **${serverQueue.loop ? "Ativado" : "Desativado"}**`)
      .setColor('GREEN')
      
      
      message.channel.send(ok)
      
      
      
      
}

exports.help = {
    name: 'loop'
}