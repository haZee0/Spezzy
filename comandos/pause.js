const Discord = require('discord.js');

exports.run = (client,message,args) => {
  
  let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você precisa estar em um canal de voz!")
    .setColor('RED')
  
      let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Não tem nenhuma música na fila para eu dar pause!")
    .setColor('RED')
  
  
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send(erroA);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(erroB);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      let ok = new Discord.MessageEmbed()
      .setTitle("__**Sucesso!**__")
      .setDescription("<a:check:715556795002650694> | Música pausado com sucesso!")
      .setColor('GREEN')
      
      
      return message.channel.send(ok)
  }  
}

exports.help = {
    name: 'pause'
}