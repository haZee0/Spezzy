const Discord = require('discord.js');

exports.run = async (client,message,args) => {
  var lista = [
    'https://i.pinimg.com/originals/c8/f2/d0/c8f2d028133a61addc5200cf48214574.gif',
    'https://i.pinimg.com/originals/d9/44/08/d9440801070ef0d8c21c2d47109092e1.gif',
    'https://i.pinimg.com/originals/62/b6/a6/62b6a6963250f990123ccd7f08dfbb6e.gif',
    'https://2img.net/h/oi68.tinypic.com/2hgqyih.gif',
    'https://geekquantico.com.br/wp-content/uploads/2019/08/Ging-levando-um-soco-de-Leorio.gif',
    'https://media3.giphy.com/media/jWjwfgVOKrNpC/source.gif'
  ]
  
  var random = lista[Math.floor(Math.random() * lista.length)];
  var membro = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(!membro) {
    return message.reply("Você não mencionou ninguém para socar !")
  }
  
  let embed = new Discord.MessageEmbed()
  .setTitle('👊 Punch 👊')
  .setColor('#000000')
  .setDescription(`${message.author} **socou** ${membro}`)
  .setImage(random)
  .setAuthor(message.author.tag, message.author.avatarURL())
  
  await message.channel.send(embed)
  
}

exports.help = {
  name: 'punch'
}