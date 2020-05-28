const Discord = require('discord.js'); // puxando a livraria Discord.js

exports.run = (client, message, args) => { 
  
    let r = new Discord.MessageEmbed()
    .setTitle("__**NOTIFICAÇÕES**__")
    .setDescription("<a:check:715556795002650694> | Removi seu cargo de notificações com sucesso!")
    .setColor('RED')
    
    let a = new Discord.MessagaEmbed()
    .setTitle("__**NOTIFICAÇÕES**__")
    .setDescription("<a:check:715556795002650694> | Seu cargo de notificações foi adicionado com sucesso!")
    .setColor('GREEN')

    
    var role = message.guild.roles.cache.get('714321107292782604');

    message.channel.send(`Olá ${message.author}, para ser notificado sobre as atualizações do Spezzy, clique na reação abaixo`).then(m => { 
        m.react('🔔') 
 
        
        let filtro = (reaction, usuario) => reaction.emoji.name === "🔔" && usuario.id === message.author.id; 
        
        let coletor = m.createReactionCollector(filtro, {max: 1});

       
        coletor.on("collect", e => { 
        e.remove(message.author.id); 
        if (message.member.roles.cache.has(role.id)) { 
            message.member.roles.remove(role.id);
            message.channel.send(r)
        } else {
            message.member.roles.add(role.id);
            message.channel.send(a)
        }
    })
  })
}
exports.help = {
    name: 'notificar',
}