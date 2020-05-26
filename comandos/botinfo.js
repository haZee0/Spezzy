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

     let info = new Discord.MessageEmbed()
     .setTitle("<:info:712475983005089852> Informações Gerais")
     .addField("**Estatísticas**",`<:veri:712806860427886623> Servidores: ${client.guilds.cache.size}\n<:veri:712806860427886623> Usuários: ${client.users.cache.size}\n<:veri:712806860427886623> Canais: ${client.channels.cache.size}\n <:veri:712806860427886623> Versão: **Beta 2.0.0**\n <:veri:712806860427886623> Estou acordado a: ` + uptime +  ` .`)
     .addField("**Informações**", `<:javas:712481372161441873> Linguagem: [JavaScript](https://www.javascript.com/) com <:Js:710958743503765697> [Node.Js](https://nodejs.org/en/)\n<:djs:710961684696793178> Livraria: [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)\n<:glitch:712429476088250419> Hospedagem: [Glitch](https://glitch.com)\n<:data:712475982870741022> DataBase: [Quick.db](https://quickdb.js.org/)\n :robot: Data do meu nascimento: 20/05/2020 ás 17:33\n :notebook: Tenho ${client.commands.size} comandos !`)
     .addField("**Links**", `<:invite:705193619652345866> [Me Adicione!](https://discord.com/api/oauth2/authorize?client_id=712770826478419988&permissions=8&scope=bot)\n<:invite:705193619652345866> [Suporte](https://discord.gg/yQn8fqq)\n<:invite:705193619652345866> [Site](https://cereja09.github.io/spezzy-site/)`)
     .setThumbnail(client.user.displayAvatarURL())
     message.channel.send(info)
}

exports.help = {
  name: "botinfo"
}