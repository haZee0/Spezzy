const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.author
  
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if (horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
     if (dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
     if (week > 0){ 
         uptime += `${week} week, `;
     }
     if (minutos > 60){ 
         minutos = 0;
     }
     uptime += `\`${dias}d ${horas}h ${minutos}m ${segundos}s\``;
  
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`<:hello:705166455435690005> **Olá ${message.author.username},**`)
  .setDescription("sou o Spezzy, como vai? Espero que bem, bom, eu sou um simples bot para o Discord focado em ajudar os servidores que me adicionarem! Aqui estão algumas informações minhas!")
  .addField("__**Estatísticas**__", `<:online:705166172663840868> Servidores: ${client.guilds.cache.size} \n <a:nitro:712280912993189971> Usuários: ${client.users.cache.size} \n #️⃣ Canais: ${client.channels.cache.size}`, true)
  .addField("__**Status**__", `<a:discord:705128718795931758> Versão: 1.0.0 \n <:wifi:711219891902087249> Uptime: ${uptime}`, true)
  .addField("__**Desenvolvedores**__", `<@360834865639325697> \n <@599563864509513739> \n <@397725731985293312>`, true)
  .addField("__**Outras Informações**__", `<:Js:710958743503765697> Linguagem: [Node.js](https://nodejs.org/en/) \n <:djs:710961684696793178> Biblioteca: [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) \n <:glitch:712429476088250419> Host: [Glitch](https://glitch.com/) \n<:data:712475982870741022> DataBase: [Quick.db](https://quickdb.js.org/)\n <a:hype:710964726481551490> Quantidade de comandos: ${client.commands.size} \n<:emoji:705195264402653205> Data do meu nascimento: 20/05/2020 ás 17:33`)
  .addField("__**Links Importantes**__", "<a:yay:707222216047329330> [Me Adicione](https://discord.com/api/oauth2/authorize?client_id=712770826478419988&permissions=8&scope=bot) \n <a:yay:707222216047329330> [Servidor de suporte](https://discord.gg/snHBJnR)")
  .setColor('ORANGE')
  .setThumbnail(client.user.avatarURL())
  message.channel.send(embed)
}

exports.help = {
  name: 'botinfo2'
}