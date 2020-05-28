const Discord = require('discord.js');

exports.run = (client,message,args) => {
  let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você precisa estar em um canal de voz!")
    .setColor('RED')
  
      let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Não há nada tocando para que eu possa parar!")
    .setColor('RED')
      
      let ok = new Discord.MessageEmbed()
      .setTitle("__**Sucesso!**__")
      .setDescription("<a:check:715556795002650694> | A música foi encerrada!")

    const { channel } = message.member.voice;

    if(!channel) {
        return message.channel.send(erroA)
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if(!serverQueue) {
        return message.channel.send(erroB);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end()

    serverQueue.textChannel.send(ok)
};

exports.help = {
    name: 'stop'
}