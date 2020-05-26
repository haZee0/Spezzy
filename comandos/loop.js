const Discord = require('discord.js');

exports.run = (client,message,args) => {
      
      const { channel } = message.member.voice;
      if (!channel) {
        return message.channel.send("Você tem que estar em um canal de voz :/");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);
  
      if (!serverQueue) {
        return message.channel.send("Não tem nada que eu posso dar loop");
      }
      
      //OOOOF
      serverQueue.loop = !serverQueue.loop
      
      
      
      message.channel.send(`O loop está **${serverQueue.loop ? "Ativado" : "Desativado"}**`)
      
      
      
      
}

exports.help = {
    name: 'loop'
}