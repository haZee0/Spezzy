const Discord = require('discord.js');

exports.run = (client,message,args) => {

    const { channel } = message.member.voice;

      if (!channel) {
        return message.channel.send("Você precisa estar em um canal de voz :/");
      }
  
      const serverQueue = message.client.queue.get(message.guild.id);

   if(serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume()

        return message.channel.send("✅ | Continuando a música pausada...") 

   }
      
      message.channel.send("Não há nada em pausa que eu possa retomar")
      
}

exports.help = {
    name: 'resume'
}