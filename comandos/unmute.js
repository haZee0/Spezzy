const Discord = require('discord.js')

exports.run = async (client,message,args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "**Desculpe mas você não tem permissão para executar este comando**"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Eu não tenho a permissão `Manage Roles` ativada por favor ative para mim executar este comando");
      }

      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          "**Marque o membro que você quer desmutar**"
        );
      }

      let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("O Usuário não está mutado")
    }

    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** foi desmutado`)
    
}

module.exports.help = {
    name: 'unmute'
}