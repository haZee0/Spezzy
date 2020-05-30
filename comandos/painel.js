const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
   let user = message.author;
  
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem ver o painel de lobby do servidor!`)
  
   let welcomechannel = db.get(`wcanal_${message.guild.id}`)
   if (welcomechannel === null) {
      welcomechannel = `<:offf:715935191989878857> Desativado\n#️⃣ Canal setado: Não definido!`
    } else {
      welcomechannel = `<:onn:715935192266571796> Ativado\n#️⃣ Canal setado: <#${welcomechannel}>`
    }
  
  let lc = db.get(`lcanal_${message.guild.id}`)
   if(lc == null) {
     lc = `<:offf:715935191989878857> Desativado\n#️⃣ Canal setado: Não definido!`
   } else {
     lc = `<:onn:715935192266571796> Ativado\n#️⃣ Canal setado: <#${lc}>`
   }
  
   let sl = db.get(`punichannel_${message.guild.id}`)
  if(sl == null) {
     sl = `<:offf:715935191989878857> Desativado\n#️⃣ Canal setado: Não definido!`
   } else {
     sl = `<:onn:715935192266571796> Ativado\n#️⃣ Canal setado: <#${sl}>`
   }

    
  let dn = db.get(`denuchannel_${message.guild.id}`)
  if(dn === null) {
     dn = `<:offf:715935191989878857> Desativado\n#️⃣ Canal setado: Não definido!`
   } else {
     dn = `<:onn:715935192266571796> Ativado\n#️⃣ Canal setado: <#${dn}>`
   } 

  
  let sug = db.get(`sugest_${message.guild.id}`)
  if(sug === null) {
     sug = `<:offf:715935191989878857> Desativado\n#️⃣ Canal setado: Não definido!`
   } else {
     sug = `<:onn:715935192266571796> Ativado\n#️⃣ Canal setado: <#${sug}>`
   }
  
  let autorole = db.get(`autorole_${message.guild.id}`)
  if(autorole === null) {
    autorole = `<:offf:715935191989878857> Desativado\n#️⃣ Cargo setado: Não definido!`
  } else {
    autorole = `<:onn:715935192266571796> Ativado\n#️⃣ Cargo setado: <@&${autorole}>`
  }
  
  let wmessage = db.get(`wmessage_${message.guild.id}`)
  if(wmessage === null) {
    wmessage = "<:offf:715935191989878857> Desativado\n#️⃣ Mensagem setada: Não definida!"
  } else {
    wmessage = `<:onn:715935192266571796> Ativado\n#️⃣ Mensagem setada: ${wmessage}`
  }
  
  let wtitle = db.get(`wtitle_${message.guild.id}`)
  if(wtitle === null) {
    wtitle = `<:offf:715935191989878857> Desativado\n#️⃣ Título setado: Não definido!`
  } else {
    wtitle = `<:onn:715935192266571796> Ativado\n#️⃣ Título setado: ${wtitle}`
  }
  
  let lmessage = db.get(`lmessage_${message.guild.id}`)
  if(lmessage === null) {
    lmessage = `<:offf:715935191989878857> Desativado\n#️⃣ Mensagem setada: Não definida!`
  } else {
    lmessage = `<:onn:715935192266571796> Ativado\n#️⃣ Mensagem setada: ${lmessage}`
  }
  
  let ltitle = db.get(`ltitle_${message.guild.id}`)
  if(ltitle === null) {
    ltitle = `<:offf:715935191989878857> Desativado\n#️⃣ Título setado: Não definido!`
  } else {
    ltitle = `<:onn:715935192266571796> Ativado\n#️⃣ Título setado: ${ltitle}`
  }

  //começo das embeds
  
  
  //embed autorole
  let aEmbed = new Discord.MessageEmbed()
  .setTitle("<a:config:715242355837632623> Sistema de autorole")
  .addField("Cargo setado:", autorole)
  .addField("Comandos disponíveis:", "`" + prefix + "autorole` >> Seta o cargo de entrada\n `" + prefix + "autorole-off` Desativa o cargo de entrada")
  .setThumbnail(client.user.avatarURL())
  .setColor('ORANGE')

  //embed punições
  let pEmbed = new Discord.MessageEmbed()
  .setTitle("<a:ferramentas:716402283667128410> | 🛑 Sistema de punições")
  .setDescription("Aqui você pode ver as configurações do sistema de punições")
  .addField("#️⃣ Canal definido para enviar punições:", dn)
  .addField("#️⃣ Canal definido para enviar denúncias:", dn)
  .addField("Comandos disponíveis:", "`" + prefix + "stafflog` >> Seta o canal que serão enviadas as punições\n `" + prefix + "setdenuncia` >> Seta o canal que serão enviadas as denúncias do servidor")
  .setThumbnail(client.user.avatarURL())
  .setColor('ORANGE')
  
  //embed welcome
  let wEmbed = new Discord.MessageEmbed()
  .setTitle("<a:welcome:716402285168558140> Sistema de entrada")
  .setDescription("Aqui você pode ver os comandos disponíveis para configurar o sistema de entrada!")
  .addField("#️⃣ Canal definido:", welcomechannel)
  .addField("Mensagem definida:", wmessage)
  .addField("Título definido:", wtitle)
  .addField("Comandos disponíveis:","`" + prefix + "welcome` >> Ativa o sistema de entrada\n`" + prefix + "welcome-off` >> Desativa o sistema de entrada")
  .setThumbnail(client.user.avatarURL())
  .setColor('ORANGE')
  
  //embed saida
  let lEmbed = new Discord.MessageEmbed()
  .setTitle("<a:leave:716402286095761468> Sistema de saída")
  .setDescription("Aqui você pode ver os comandos para configurar o sistema de saída")
  .addField("#️⃣ Canal definido:", lc)
  .addField("Mensagem definida:", lmessage)
  .addField("Título definido:", ltitle)
  .addField("Comandos disponíveis:", "`" + prefix + "saida` >> Ativa o sistema de saída \n `" + prefix + "saida-off` >> Desativa o sistema de saida")
  .setThumbnail(client.user.avatarURL())
  .setColor('ORANGE')
  
  //embed sugestões
  let sEmbed = new Discord.MessageEmbed()
  .setTitle("💡 Sistema de sugestões")
  .setDescription("Aqui você pode ver os comandos para configurar o sistema de sugestões")
  .addField("#️⃣ Canal definido:", sug)
  .addField("Comandos disponíveis:", "`" + prefix + "setsugestao` >> Ativa o sistema de sugestões \n `" + prefix + "sugestoes-off` >> Desativa o sistema de sugestões")
  .setThumbnail(client.user.avatarURL())
  .setColor('ORANGE')
  
  
  
  let principal = new Discord.MessageEmbed()
  .setTitle("Painel de Configurações")
  .setDescription(`Olá ${message.author}, este é o painel configurações, aqui você terá acesso a todas as configurações do servidor! Caso queira saber como configurar cada sistema, clique nas reações abaixo!`)
  .addField(`**<a:welcome:716402285168558140> » Sistema de entrada**`, welcomechannel)
  .addField(`**<a:leave:716402286095761468> » Sistema de saída**`, lc)
  .addField(`**<a:ferramentas:716402283667128410> » Sistema de punições**`, sl)
  .addField(`**🛑 » Sistema de denúncias**`, dn)
  .addField(`**💡 » Sistema de sugestões**`, sug)
  .addField(`**<a:config:715242355837632623> » Sistema de autorole**`, autorole)
  .setColor('ORANGE')
  .setThumbnail(client.user.avatarURL())
  
    message.channel.send(principal).then(msg => {
      msg.react("716402285168558140")
      msg.react("716402286095761468")
      msg.react("716402283667128410")
      msg.react("715242355837632623")
      msg.react("💡")
      msg.react("🔙")
      
      
      
    let filtro = (reaction, user) => reaction.emoji.id === "716402285168558140" && user.id === message.author.id
    let coletor = msg.createReactionCollector(filtro, {max: 3})
    
    let filtro1 = (reaction, user) => reaction.emoji.id === "716402286095761468" && user.id === message.author.id
    let coletor1 = msg.createReactionCollector(filtro1, {max: 3})
    
    let filtro2 = (reaction, user) => reaction.emoji.id === "716402283667128410" && user.id === message.author.id
    let coletor2 = msg.createReactionCollector(filtro2, {max: 3})
    
    let filtro3 = (reaction, user) => reaction.emoji.id === "715242355837632623" && user.id === message.author.id
    let coletor3 = msg.createReactionCollector(filtro3, {max: 3})
    
    let filtro4 = (reaction, user) => reaction.emoji.name === "🔙" && user.id === message.author.id
    let coletor4 = msg.createReactionCollector(filtro4, {max: 3})
    
    let filtro5 = (reaction, user) => reaction.emoji.name === "💡" && user.id === message.author.id
    let coletor5 = msg.createReactionCollector(filtro5, {max: 3})
    
    
    
    coletor.on("collect", cp => {
      msg.edit(wEmbed)
    })
      
    coletor1.on("collect", cp1 => {
      msg.edit(lEmbed)
    })
      
    coletor2.on("collect", cp2 => {
      msg.edit(pEmbed)
    })
      
    coletor3.on("collect", cp3 => {
      msg.edit(aEmbed)
    })
      
    coletor5.on("collect", cp5 => {
      msg.edit(sEmbed)
    })
      
    coletor4.on("collect", cp4 => {
      msg.edit(principal)
    })
  })
  
  


}

exports.help = {
  name: 'painel'
}