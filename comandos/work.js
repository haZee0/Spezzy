const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async(client, message, args) => {
  let timeout = 1.8e+7
  let quantia = Math.floor(Math.random() * 500) + 250
  let trabalho = await db.fetch(`work_${message.author.id}`)
  
  let erroA = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você está desempregado, para conseguir um emprego, digite `s!emprego` !")
  .setColor('RED')
  
  if(trabalho !== null && timeout - (Date.now() - trabalho) > 0){
    let time = ms(timeout - (Date.now() - trabalho));
    
    let timerr = new Discord.MessageEmbed()
    .setDescription("**Seu intervalo para trabalhar novamente ainda não acabou!**")
    .addField(":timer: Tente novamente em", `\`${time.hours} horas ${time.minutes} minutos ${time.seconds} segundos\``)
    .setThumbnail(message.author.avatarURL())
    message.channel.send(timerr)
  } else {
    let emprego = await db.get(`trabalho_${message.author.id}`)
    if(emprego === 1) emprego = "💻 Programador"
    if(emprego === 2) emprego = "🍃 Jardineiro"
    if(emprego === 3) emprego = "🔨 Pedreiro"
    if(emprego === 4) emprego = "✏️ Desenhista"
    
    if(emprego === null) {
      return message.channel.send(erroA)
    } else {
      
    }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Work!")
    .addField("💸 >> Hoje você recebeu", `**${quantia} BitCodes**`)
    .addField("💼 >> Emprego", `**${emprego}**`)
    .setColor('GREEN')
    
    message.channel.send(embed)
    db.add(`reais_${message.author.id}`, quantia)
    db.set(`work_${message.author.id}`, Date.now())
  }
}

exports.help = {
  name: 'work'
}