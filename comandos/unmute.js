const Discord = require('discord.js')

exports.run = async (client,message,args) => {
  let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
    .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Eu não tenho a permissão `MANAGE_ROLES` ativada, por favor, ative para eu poder executar este comando!")
    .setColor('RED')
  
  let erroC = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Marque um usuário para desmutar!")
    .setColor('RED')
  
  let erroD = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | O usuário mencionado não está mutado!")
    .setColor('RED')
  
  let ok = new Discord.MessageEmbed()
  .setTitle("__**Sucesso!**__")
  .setDescription(`<a:check:715556795002650694> | **${message.mentions.users.first().username}** foi desmutado com sucesso!`)
  .setColor('GREEN')

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
         erroA
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(erroB);
      }

      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          erroC
        );
      }

      let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send(erroD)
    }

    user.roles.remove(muterole)
    
    await message.channel.send(ok)
    
}

module.exports.help = {
    name: 'unmute'
}