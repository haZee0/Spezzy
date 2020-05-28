const Discord = require("discord.js")

exports.run = async(client, message, args) => {
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
  
    let servidores = client.guilds.cache.size;
    let users = client.users.cache.size;
    let channelsize = client.channels.cache.size;
  
    let linguagem = ('[JavaScript](https://www.javascript.com/) com <:Js:710958743503765697> [Node.Js](https://nodejs.org/en/)');
    let livraria = ('[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)');
    let hospedagem = ('[Glitch](https://glitch.com)');
    let database = ('[Quick.db](https://quickdb.js.org/)');
    let comandos = client.commands.size;
  
    let meadicione = ('[Me Adicione!](https://discord.com/api/oauth2/authorize?client_id=712770826478419988&permissions=8&scope=bot)');
    let suporte = ('[Suporte](https://discord.gg/yQn8fqq)');
    let site = ('[Site](https://cereja09.github.io/spezzy-site/)');
      
     let info = new Discord.MessageEmbed()
     .setTitle("<:info:712475983005089852> Informações Gerais")
     .addField("**Estatísticas**",`<:veri:712806860427886623> Servidores: ${servidores}\n<:veri:712806860427886623> Usuários: ${users}\n<:veri:712806860427886623> Canais: ${channelsize}\n <:veri:712806860427886623> Versão: **Beta 2.0.0**\n <:veri:712806860427886623> Estou acordado a: ` + uptime +  ` .`)
     .addField("**Informações**", `<:javas:712481372161441873> Linguagem: ${linguagem}\n<:djs:710961684696793178> Livraria: ${livraria}\n<:glitch:712429476088250419> Hospedagem: ${hospedagem}\n<:data:712475982870741022> DataBase: ${database}\n :robot: Data do meu nascimento: 20/05/2020 ás 17:33\n :notebook: Tenho ${comandos} comandos !`)
     .addField("**Links**", `<:invite:705193619652345866> ${meadicione}\n<:invite:705193619652345866> ${suporte}\n<:invite:705193619652345866> ${site}`)
     .setThumbnail(client.user.displayAvatarURL())
     message.channel.send(info)
}

exports.help = {
  name: "botinfo"
}