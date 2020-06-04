const Discord = require('discord.js');
const c = require('../config.json');

exports.run = async (client,message,args) => {
  
  var lista = [
    'https://acegif.com/wp-content/uploads/anime-hug.gif',
    'https://gifdownload.net/wp-content/uploads/2019/05/gif-abra%C3%A7o-anime-5.gif',
    'https://i.pinimg.com/originals/6e/6e/53/6e6e53fb69d7b74286c9d2817e1fc3ca.gif',
    'https://i.pinimg.com/originals/82/c8/e9/82c8e9ff24cce631fa061b35cf9fe82b.gif',
    'https://miro.medium.com/max/996/1*xn6dDPa5EmVAxOSQusvO7g.gif',
    
  ]
  
  var random = lista[Math.floor(Math.random() * lista.length)];
  var membro = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(!membro) {
    return message.reply("Você não mencionou ninguém para abraçar")
  }
  
  let embed = new Discord.MessageEmbed()
  .setTitle('🤗 Hug 🤗')
  .setColor('#000000')
  .setDescription(`${message.author} **abraçou** ${membro} 💗`)
  .setImage(random)
  .setAuthor(message.author.tag, message.author.avatarURL());
  
  await message.channel.send(embed)
}

exports.help = {
  name: 'hug'
}