  
const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  var emprego = await db.get(`trabalho_${message.author.id}`)
  if (emprego === 1) return message.channel.send(`**${message.author.username}**, você já tem um emprego! (💻 Programador)`)
  if (emprego === 2) return message.channel.send(`**${message.author.username}**, você já tem um emprego! (🍃 Jardineiro)`)
  if (emprego === 3) return message.channel.send(`**${message.author.username}**, você já tem um emprego! (🔨 Pedreiro)`)
  if (emprego === 4) return message.channel.send(`**${message.author.username}**, você já tem um emprego! (✏️ Desenhista)`)

  let embed = new Discord.MessageEmbed()
  .setDescription(`Qual função você gostaria de exercer?\n\n💻 \`Programador\`\n🍃 \`Jardineiro\`\n🔨 \`Pedreiro\`\n✏️ \`Designer\``)
  .setFooter(`Clique em um dos emojis para exercer uma função`)
  .setColor('GOLD')
  
  message.channel.send(embed).then(msg => {

    msg.react('💻').then(() => msg.react('🍃').then(() => msg.react('🔨').then(() => msg.react('✏️'))))

    const filter = (reaction, user) => {
      return ['💻', '🍃', '🔨', '✏️'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name === '💻') {
          message.reply('agora você é um `💻 Programador`');
          db.add(`trabalho_${message.author.id}`, 1)
        } 
      
        if (reaction.emoji.name === '🍃') {
          message.reply('agora você é um `🍃 Jardineiro`');
          db.add(`trabalho_${message.author.id}`, 2)
        }
      
       if (reaction.emoji.name === '🔨') {
          message.reply('agora você é um `🔨 Pedreiro`');
          db.add(`trabalho_${message.author.id}`, 3)
       }
      
       if (reaction.emoji.name === '✏️') {
         message.reply('agora você é um `✏️ Desenhista`')
         db.add(`trabalho_${message.author.id}`, 4)
       }
      
      })
      .catch(collected => {
        message.reply('devido à sua demora, cancelei o pedido! Tente novamente.');
      });
    })
  }

exports.help = {
  name: 'emprego',
  aliases: []
}