const Discord = require('discord.js');

exports.run = (client,message,args) => {

    const { channel } = message.member.voice;

    if(!channel) {
        return message.channel.send("Seria um pouco interessante se você estivesse em um canal de música...")
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if(!serverQueue) {
        return message.channel.send("Não há nada tocando que eu possa parar.");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end()

    serverQueue.textChannel.send("**A música foi encerrada.**")
};

exports.help = {
    name: 'stop'
}