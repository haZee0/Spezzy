const Discord = require('discord.js');
const c = require('../config.json');

exports.run = (client,message,args) => {
    
    let emb = new Discord.MessageEmbed()
    .setTitle("❓ INFORMAÇÃO DO COMANDO")
    .setDescription(`\`addemoji\` - Adicione um emoji ao servidor de forma mais fácil`)
    .addFields(
        {name: ":hammer: **Uso**", value: `\`${c.prefix}addemoji <nome do emoji> <url>\``},
        {name: `:books: **EXEMPLO**`, value: `\`${c.prefix}addemoji caradebiscoito https://discordemoji.com\``},
        {name: `:bookmark: **PERMISSÃO**`, value: `\`MANAGE_EMOJIS\``}
    )
    .setColor("RED")
    

    if(!args[0]) {
        return message.channel.send(emb)
    }

    if(!args[1]) {
        return message.channel.send(emb)
    }

    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply(`apenas usuários com a permissão \`MANAGE_EMOJIS\` podem utilizar!`)

try {
  
  message.guild.emojis.create(args[1], args[0]).then(emoji => {
      message.channel.send(`${emoji} **|** Emoji adicionado com sucesso.`);
    });
  } catch (err) { 
    message.channel.send(`\`\`\`js\n${err}\`\`\``)
  }
}; 
      
      
exports.help = {
name: 'addemoji'
}