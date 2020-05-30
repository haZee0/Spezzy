const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  var lista = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif'  
  ];
  
  var random = lista[Math.floor(Math.random() * lista.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if(!user) {
    return message.reply("você não mencionou ninguém para beijar!")
  }
  
    const embed = new Discord.MessageEmbed()
    .setTitle('Kiss')
    .setColor('#000000')
    .setDescription(`${message.author} acabou de beijar ${user}`)
    .setImage(random)
    .setTimestamp()
    .setFooter("Kiss", client.user.avatarURL())
    .setAuthor(message.author.tag);
  
  await message.channel.send(embed)
}

exports.help = {
  name: 'kiss'
}