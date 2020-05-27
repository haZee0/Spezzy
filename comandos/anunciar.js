const Discord = require('discord.js')

exports.run = async(client, message, args, titulo, mensagem, canal) => {
  
  let erro = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("Parece que você não tem permissão para publicar um anúncio, peça para alguém com permissão de administrador!")
  .setColor('RED')
  
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(erro)
  
  let embedTitle = new Discord.MessageEmbed()
  .setDescription("Por favor, insira o título desse anúncio!")
  
  
  message.channel.send(embedTitle).then(msg2 => {
    let cj = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
    .on('collect', c => {
      titulo = c.content
      
    let embedMens = new Discord.MessageEmbed()
    .setDescription("Por favor, insira a mensagem desse anúncio!")
    
  message.channel.send(embedMens).then(msg3 => {
    let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
    .on('collect', c => {
      mensagem = c.content
      
      let embedCanal = new Discord.MessageEmbed()
      .setDescription("Por favor, insira o canal que o anúncio vai ser enviado")
      
  message.channel.send(embedCanal).then(msg4 => {
    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
    .on('collect', c => {
      canal = c.mentions.channels.first()
    
      
      
      
    let embed = new Discord.MessageEmbed()
    .setTitle(titulo)
    .setDescription(mensagem)
    .setFooter(`Anúncio por: ${message.author.username}`, message.author.avatarURL())
    .setColor('AQUA')
    
    canal.send(`@everyone`, embed)
    })
  })
    })
  })
})
  })
    
  }

exports.help = {
  name: 'anunciar'
}
  
