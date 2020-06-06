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
const moment = require('moment')


const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();


fs.readdir("./comandos/", (err, files) => {{}
  if(err) console.error(err)

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
  let props = require(`./comandos/${f}`);
  console.log(`✅ | Comando ${f} carregado com sucesso`);
  client.commands.set(props.help.name,props);
  });
});

client.on("messageUpdate", async(oldMessage, newMessage, message) => {
  const lcanal = newMessage.guild.channels.cache.get(db.get(`logCh_${newMessage.guild.id}`))

  if(oldMessage.content === newMessage.content) {
    return;
  }
        let lEmbed = new Discord.MessageEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL())
        .setThumbnail(oldMessage.author.avatarURL())
        .setColor('ORANGE')
        .setDescription("Mensagem editada por um membro!")
        .addField("Antes:", oldMessage.content, true)
        .addField("Depois:", newMessage.content, true)
        .setTimestamp()
        .setFooter("Spezzy", client.user.avatarURL())
        
        newMessage.guild.channels.cache.get(lcanal)
  
        lcanal.send(lEmbed)

})

client.on("messageDelete", async message => {
  const canal = message.guild.channels.cache.get(db.get(`logCh_${message.guild.id}`));

  let embed = new Discord.MessageEmbed()
  .setTitle("Mensagem Deletada!")
  .setColor("ORANGE")
  .setThumbnail(message.guild.iconURL())
  .addField("Deletada por:", message.author.tag)
  .addField("Deletada no canal:", message.channel)
  .addField("Mensagem deletada:", message)
  .setTimestamp()
  .setFooter("Spezzy!", client.user.avatarURL())

  message.guild.channels.cache.get(canal)
  
  canal.send(embed)
  
  

});


client.on('message', async message => {

  if(message.author.bot) return;
  if (message.channel.type === "dm") return;

let base_prefix = config.prefix;
let server_prefix = db.get(`prefix_${message.guild.id}`)
let prefix;

if(!server_prefix) prefix = base_prefix
if(server_prefix) prefix = server_prefix
  
let oi = new Discord.MessageEmbed()
.setDescription(`Olá ${message.author}, está com problemas? Utilize \`${prefix}help\``)

if(message.content.includes(`<@${client.user.id}>`) || message.content.includes(`<@!${client.user.id}>`)) return message.channel.send(oi)
  
if(!message.content.startsWith(prefix)) return;
let args = message.content.substring(prefix.length).split(" ");
let command = args.shift().toLowerCase();
  
  
  let embed = new Discord.MessageEmbed()
  .setTitle("❌ | Erro")
  .setDescription("💥 Não encontrei esse comando em meu sistema, utilize " + prefix + "help para conseguir ajuda!")
  .setColor('RED')
  
let arquivocmd = client.commands.get(command)
    if(arquivocmd) {
    if (arquivocmd) arquivocmd.run(client, message, args, prefix);
  } else {
    message.channel.send(`${message.author}`, embed);
  }

});


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda.`,
      `${client.guilds.cache.size} servidores.`,
      `${client.channels.cache.size} canais.`,
      `${client.users.cache.size} usuários.`      
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
 
  while(mensagem.includes('{membro}')) mensagem = mensagem.replace('{membro}', member)
  while(mensagem.includes('{servidor}')) mensagem = mensagem.replace('{servidor}', member.guild.name)
  while(mensagem.includes('{users}')) mensagem = mensagem.replace('{users}', member.guild.memberCount)


  const embed = new MessageEmbed()

    .setThumbnail(member.user.displayAvatarURL())
    .setTitle(titulo)
    .setDescription(`${mensagem}`)
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
