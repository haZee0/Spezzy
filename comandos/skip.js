const Discord = require('discord.js')

exports.run = (client,message,args) => {

    const { channel } = message.member.voice;
    if(!channel) {
        return message.channel.send("Seria legal se você estivesse em um canal de voz.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if(!serverQueue) {
        return message.channel.send("Não há nada tocando no momento")
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ | Pulando a música");
  
}

exports.help = {
    name: 'skip'
}