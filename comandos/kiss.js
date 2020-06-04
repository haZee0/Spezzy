const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  var lista = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://media0.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
  'https://i.pinimg.com/originals/6e/2f/e9/6e2fe9073f4e6aa4080e2e9ab5e3f790.gif'
  ];
  
  var random = lista[Math.floor(Math.random() * lista.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if(!user) {
    return message.reply("Você não mencionou ninguém para beijar!")
  }
  
    const embed = new Discord.MessageEmbed()
    .setTitle('💓 Kiss 💓')
    .setColor('#000000')
    .setDescription(`${message.author} acabou de **beijar** ${user} 😍`)
    .setImage(random)
    .setAuthor(message.author.tag, message.author.avatarURL());
  
  await message.channel.send(embed)
}

exports.help = {
  name: 'kiss'
}