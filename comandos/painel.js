const db = require('quick.db');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`apenas administradores podem ver o painel de lobby do servidor!`)

   const autorole = db.get(`autorole_${message.guild.id}`)
   if (autorole === null) autorole = "Sem cargo definido"
  
   let welcomechannel = db.get(`wcanal_${message.guild.id}`)

  
   const mensagem = db.get(`wmessage_${message.guild.id}`)
   if (mensagem === null) mensagem = "Nenhuma mensagem definida" 
  
   const titulo = db.get(`wtitle_${message.guild.id}`)
   if (titulo === null) titulo = "Nenhum titulo definido" 

  // CONFIG DOS QUE SAIREM
   const removetitle = db.get(`ltitle_${message.guild.id}`)
   if (removetitle === null) removetitle = "Nenhum definido"
  
   const removemessage = db.get(`lmessage_${message.guild.id}`)
   if (removemessage === null) removemessage = "Nenhuma definida" 
  
   let lc = db.get(`lcanal_${message.guild.id}`)
   if(!lc) lc = 'Nenhum ID'
  
   let sl = db.get(`punichannel_${message.guild.id}`)
   if(sl === null) sl = "Nenhum canal definido!"

   let embed = new Discord.MessageEmbed()
   
   .setTitle(`Painel de Configurações`)
   .setDescription(`**${message.author.username}**, seja muito bem-vindo(a) ao **Painel de Configurações** do **${message.guild.name}**`)
   .setColor('BLUE')
   
   message.channel.send(embed).then(msg => {
     msg.react('712475983005089852')
     
        let filtro = (reaction, usuario) => reaction.emoji.id === "712475983005089852" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro);

        coletor.on("collect", c => {
            c.remove(message.author.id);
          
            let joined = new Discord.MessageEmbed()
            
      .setTitle(` Sistema de Entrada`)
      .setColor('GREEN')
      .addField(` » **AutoRole**`, `<@&${autorole}>`)
      .addField(` » **Mensagem**`, mensagem)
      .addField(` » **Título**`, titulo)
      .addField(`» **Comandos disponíveis:**`, `s!autorole \n s!welcome`)
      .setThumbnail(message.guild.iconURL())
       if (welcomechannel === null || welcomechannel === undefined) {
            joined.addField(
              `**» Canal**`,
              `Desativado`
            );
          } else {
            joined.addField(
              `**» Canal**`,
              `Ativado\nCanal setado: <#${welcomechannel}>`
            );
          }           

            
            msg.edit(joined).then(m => {
              m.react('705391683084222464')
               
                let filter = (reaction, user) => reaction.emoji.id === "705391683084222464" && user.id === message.author.id;
                let coleter = m.createReactionCollector(filter);

                coleter.on("collect", e => {
                    e.remove(message.author.id);
                    
                    let leaved = new Discord.MessageEmbed()
                    
      .setTitle(`Sistema de Saída`)
      .setColor('RED')
      .addField(`» **Mensagem**`, removemessage)
      .addField(`» **Título**`, removetitle)
      .addField(`» **Comandos disponíveis:**`, `s!saida`)
      .setThumbnail(message.guild.iconURL())
                    if(lc === null || lc === undefined){
                      leaved.addField(
                        `**» Canal**`,
                        `Desativado`
                      );
                    } else {
                      leaved.addField(
                        `**» Canal**`,
                        `Ativado\nCanal setado: <#${lc}>`
                      );
                    }
                    
                    m.edit(leaved).then(a => {
                      m.react('712276929729790052')
                      
                      let filtrin = (reaction, user) => reaction.emoji.id === "712276929729790052" && user.id === message.author.id;
                      let coletin = a.createReactionCollector(filtrin);
                      
                      coletin.on("collect", a => {
                        a.remove(message.author.id)
                        
                        let stafflog = new Discord.MessageEmbed()
                        .setTitle(`StaffLog`)
                        .setColor('BLACK')
                        .addField(`» **Comandos disponíveis:**`, `s!stafflog`)
                        .setThumbnail(message.guild.iconURL())
                          if(sl === null || lc === undefined){
                            stafflog.addField(
                                `**» Canal**`,
                                `Desativado`
                            );
                          } else {
                            stafflog.addField(
                              `**» Canal**`,
                              `Ativado\nCanal setado: <#${sl}>`
                            );
                          }
                        
                        m.edit(stafflog)
                      })
                    })
                })
            })
        })
    })
}
                                    


exports.help = {
    name: 'painel',
    aliases: ['dashboard','config']
}