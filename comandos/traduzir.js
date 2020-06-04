const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js')
const db = require('quick.db')
let langs = {
  "auto": "Automatic",
  "ar": "Arabe",
  "nl": "Holandes",
  "eng": "Inglês",
  "fr": "Frances",
  "de": "Alemão",
  "el": "Grego",
  "it": "Italiano",
  "ja": "Japones",
  "jw": "Javanes",
  "kn": "Kannada",
  "ko": "Coreano",
  "pt": "Portugues",
  "ro": "Romano",
  "ru": "Russo",
  "es": "Espanhol"
}

exports.run = async(client, message, args) => {
  let server_prefix = db.get(`prefix_${message.guild.id}`)
  
  let e = new Discord.MessageEmbed()
  .setAuthor("Lingua não encontrada!")
  .setTitle("Linguas disponíveis:")
  .setDescription("```auto: Automatic \n ar: Arabe \n nl: Holandes \n eng: Inglês \n fr: Frances \n de: Alemão \n el: Grego \n it: Italiano \n ja: Japones \n jw: Javanes \n kn: Kannada \n ko: Coreano \n pt: Portugues \n ro: Romano \n ru: Russo \n es: Espanhol```")
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png")
  .setColor('BLUE')
  
  let em = new Discord.MessageEmbed()
  .setTitle("__**ERRO NA TRADUÇÃO**__")
  .setDescription(`Utilize dessa forma: ` + server_prefix + `traduzir <lingua1> <lingua2> <mensagem>`)
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png")
  .setColor('BLUE')
  
  
  if(!args[0]) {
    return message.channel.send(em)
  }
  
  let msg = args.slice(2).join(' ')
  translate(msg, { from: args[0], to: args[1] }).then(res => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`)
    .setTitle("Google Tradutor")
    .setColor('BLUE')
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png")
    .setDescription(`Comando utilizado po: ${message.author.tag}`, message.author.avatarURL())
    .addField('Texto original:', msg)
    .addField('Texto traduzido', res.text)
    .setTimestamp()
    
    message.channel.send(embed)
  }).catch(err => {
    console.log(err)
    message.channel.send(e)
  })
}

exports.help = {
  name: 'traduzir'
}