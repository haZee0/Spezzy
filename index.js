const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs')
const { join } = require('path');
const db = require('quick.db');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();


fs.readdir("./comandos/", (err, files) => {{}
  if(err) console.error(err)

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
  let props = require(`./comandos/${f}`);
  console.log(`Comando ${f} carregado com sucesso`);
  client.commands.set(props.help.name,props);
  });
});

client.on('message', message => {
  if(message.author.bot) return;
  if (message.channel.type === "dm") return;

let prefix = config.prefix;
if(!message.content.startsWith(prefix)) return;
let args = message.content.substring(prefix.length).split(" ");
let command = args.shift().toLowerCase();
  
  
  let embed = new Discord.MessageEmbed()
  .setDescription(`<:erro:712413899638702090> | ${message.author}, não encontrei esse comando em meu sistema!`)
  .setColor('RED')
  
let arquivocmd = client.commands.get(command)
    if(arquivocmd) {
    if (arquivocmd) arquivocmd.run(client, message, args);
  } else {
    message.channel.send(embed);
  }

});


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda.`,
      `${client.guilds.cache.size} servidores.`,
      `${client.channels.cache.size} canais.`,
      `${client.users.cache.size} usuários.`,
      `meu prefixo: s!`
    ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }),
    5000
  ); //WATCHING, LISTENING, PLAYING, STREAMING
  client.user
    .setStatus("online")
    .catch(console.log);

  console.log(
    "Spezzy inciado com sucesso!"
  );
})

client.on("guildMemberAdd", member => {
  
  const { MessageEmbed } = require("discord.js")
    const db = require(`quick.db`)

  var mensagem = db.get(`wmessage_${member.guild.id}`)
  var titulo = db.get(`wtitle_${member.guild.id}`)

var canal = member.guild.channels.cache.get(db.get(`wcanal_${member.guild.id}`));
 
  let membro = mensagem.replace('{membro}', member)
  let servidor = membro.replace('{servidor}', member.guild.name)
  let user = servidor.replace('{users}', member.guild.memberCount)


  const embed = new MessageEmbed()

    .setThumbnail(member.user.displayAvatarURL())
    .setTitle(titulo)
    .setDescription(`${user}`)
    .setColor("#206694")
  
    canal.send(embed)

  
  const role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
  
  member.roles.add(role.id).catch(e => {
    return;
  })
      
  member.roles.add(role.id)
}
);


client.on("guildMemberRemove", member => {
    const { MessageEmbed } = require("discord.js")
    const db = require(`quick.db`)

    var mensagem = db.get(`lmessage_${member.guild.id}`)
    var titulo = db.get(`ltitle_${member.guild.id}`)

    var canal = member.guild.channels.cache.get(db.get(`lcanal_${member.guild.id}`));
 
    let membro = mensagem.replace('{membro}', member)
    let servidor = membro.replace('{servidor}', member.guild.name)
    let user = servidor.replace('{users}', member.guild.memberCount)


  const embed = new MessageEmbed()

    .setThumbnail(member.user.displayAvatarURL())
    .setTitle(titulo)
    .setDescription(`${user}`)
    .setColor("#206694")
  
    canal.send(embed)

})

client.login(process.env.TOKEN)
