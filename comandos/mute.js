const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client,message,args) => {
  
  let erroA = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você não tem permissão para utilizar esse comando!")
  .setColor('RED')
  
  let erroB = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você precisa marcar um usuário para mutar!")
  .setColor('RED')
  
  let erroC = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription("<:erro:712413899638702090> | Você precisa citar um motivo!")
  .setColor('RED')
  
  let erroD = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription('<:erro:712413899638702090> | Não existe um cargo de Mute configurado neste servidor!')
  .setColor('RED')
  
  let erroE = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription('<:erro:712413899638702090> | O cargo de Mute configurado neste servidor não existe!')
  .setColor('RED')
  
  if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(erroA);
    }

    let mut = message.mentions.members.first()
    if(!mut) {
        return message.channel.send(erroB);
    }

    let razao = args.slice(1).join(" ");
    if(!razao) {
        return message.channel.send(erroC)
    }

  let pushmuter = db.get(`muterole_${message.guild.id}`)
  if(!pushmuter) return message.channel.send(erroD)
  
    let muter = message.guild.roles.cache.get(pushmuter)
    if(!muter) return message.channel.send(erroE)

  let embed = new Discord.MessageEmbed()

.setTitle(`${message.guild.name} - Mute.`)
.setDescription(`O usuário ` + mut.user.username + ` foi mutado!`)
.addField(`Motivo:`, `${razao}`)
.addField("Autor do mute:", message.author.username)
.setColor("RED")


let puni = db.get(`punichannel_${message.guild.id}`)

if(puni === null) {
    return message.channel.send("Você precisa definir um canal de punições, caso não saiba como, utilize s!help.")
}

    mut.roles.add(muter.id).then(() => {
        message.delete()
        mut.send("Você foi mutado")
        client.channels.cache.get(puni).send(embed)
    })



}

exports.help = {
    name: 'mute'
}