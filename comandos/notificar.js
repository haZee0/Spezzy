const Discord = require('discord.js'); // puxando a livraria Discord.js

exports.run = (client, message, args) => { 

    
    var role = message.guild.roles.cache.get('714321107292782604');

    message.channel.send(`Olá ${message.author}, para ser notificado sobre as atualizações do Spezzy, clique na reação abaixo`).then(m => { 
        m.react('🔔') 
 
        
        let filtro = (reaction, usuario) => reaction.emoji.name === "🔔" && usuario.id === message.author.id; 
        
        let coletor = m.createReactionCollector(filtro, {max: 1});

       
        coletor.on("collect", e => { 
        e.remove(message.author.id); 
        if (message.member.roles.cache.has(role.id)) { 
            message.member.roles.remove(role.id);
            message.reply('removi seu cargo de notificações!')
        } else {
            message.member.roles.add(role.id);
            message.reply(`seu cargo de notificações do servidor foi ativado com sucesso!`)
        }
    })
  })
}
exports.help = {
    name: 'notificar',
}