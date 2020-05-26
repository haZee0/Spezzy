const Discord = require('discord.js');

exports.run = (client,message,args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("Seria interessante se você estivesse em um canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Não tem nada que eu possa pausar");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("✅ | Música pausada com sucesso.")
  }  
}

exports.help = {
    name: 'pause'
}