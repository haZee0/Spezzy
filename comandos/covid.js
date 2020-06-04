const Discord = require('discord.js');
const c = require('../config.json')
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

exports.run = async(client,message,args) => {
    
    let erro = new Discord.MessageEmbed()
  .setTitle("__**ERRO**__")
  .setDescription(`<:erro:712413899638702090> | Use ${c.prefix}covid <país> ou então ${c.prefix}global`)
  .setColor('RED')

    if(!args.length){
        return message.channel.send(erro)
    }

    if(args.joinDiscord(" ") === "global") {
        let corona = await track.all()
        
        let embed = new Discord.MessageEmbed()
        .setTitle('**Casos globais**')
        .setcolor("RED")
    }
}

exports.help = {
  name: 'covid'
}