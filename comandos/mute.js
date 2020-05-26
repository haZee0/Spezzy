const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client,message,args) => {


    if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Você não tem permissão para executar este comando.");
    }

    let mut = message.mentions.members.first()
    if(!mut) {
        return message.channel.send("Marque um usuário para mutar.");
    }

    let razao = args.slice(1).join(" ");
    if(!razao) {
        message.channel.send("Por favor insira uma razão.")
    }

    let muter = message.guild.roles.cache.find(x => x.name === "Muted");
    if(!muter) {
        try{
            muter = await message.guild.roles.create({
data: { 
    name: "Muted",
    color: "#ababab",
    permissions: []
}
})
            message.guild.channels.cache.forEach(async (channel, id) => {
               await message.channel.createOverwrite(muter, {
   SEND_MESSAGES: false
 })
            }) 
        }catch(e){
            console.log(e.stack)
        }
    }

let embed = new Discord.MessageEmbed()

.setTitle(`${message.guild.name} - Mute.`)
.setDescription(`O usuário ${mut} foi mutado!`)
.addField(`Motivo:`, `${razao}`)
.addField("Autor do mute:", `${message.author.username}`)
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