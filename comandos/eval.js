const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    if (!['360834865639325697','397725731985293312','572827880091025408'].includes(message.author.id)) {
    return message.channel.send(`apenas meu desenvolvedor pode utilizar esse comando.`)
    }
  
    const code = args.slice(0).join(" ");

        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
        let e = new Discord.MessageEmbed()
        .addField(":inbox_tray: | **Entrada:**", `\`\`\`${code}\`\`\``)
        .addField(":outbox_tray: | **Saída:**", `\`\`\`js\n${ev}\`\`\``)
        message.channel.send(e)
       
        } catch(err) {
            message.channel.send(`**Algo deu errado...**\n\`\`\`\n${err}\`\`\``)
        }
    
}

exports.help = {
  name: 'eval'
}