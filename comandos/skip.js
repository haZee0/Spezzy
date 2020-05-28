const Discord = require('discord.js')

exports.run = (client,message,args) => {
  
  let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você precisa estar em um canal de voz!")
    .setColor('RED')
    
  let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Não há nada tocando no momento!")
    .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
    .setTitle("__**Sucesso!**__")
    .setDescription("<a:check:715556795002650694> | Pulando para a próxima música!")
    .setColor('RED')
    
    
    const { channel } = message.member.voice;
    if(!channel) {
        return message.channel.send(erroA);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if(!serverQueue) {
        return message.channel.send(erroB)
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send(ok);
  
}

exports.help = {
    name: 'skip'
}