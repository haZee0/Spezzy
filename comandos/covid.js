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

    if(args.join(" ") === "global") {
        let corona = await track.all()
        
        let embed = new Discord.MessageEmbed()
        .setTitle('📍 **Casos globais**')
        .setColor("RED")
        .addField("📌 Casos totais", corona.cases,true)
        .addField("☠️ Total de mortes", corona.deaths, true)
        .addField("🌟 Total de curados", corona.recovered,true)
        .addField("🩺 Casos de hoje", corona.todayCases,true)
        .addField("💀 Mortes de hoje", corona.todayDeaths, true)
        message.channel.send(embed)
    }else{
    let corona = await track.countries(args.join(" "));
    
    let oEmbed = new Discord.MessageEmbed()
    .setTitle(`📍 ${corona.country}`)
    .setDescription(`📌 Casos confirmados: ${corona.cases}\n\n ☠️ Mortes por COVID-19: ${corona.deaths} \n\n 🌟 Recuperados da doença: ${corona.recovered}`)
    .setColor('RED')
    message.channel.send(oEmbed)
    }
  }

exports.help = {
  name: 'covid'
}