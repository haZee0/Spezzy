const Discord = require('discord.js');
const c = require('../config.json');
const db = require('quick.db')
exports.run = (client,message,args) => {

    let kemb = new Discord.MessageEmbed()

    .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
    .setDescription(`\`ban\` -> Expulse um usuário`)
    .addFields(
        {name: `**Uso**`, value:  `\`${c.prefix}kick @user <motivo>\``},
        {name: `:books: **Exemplo**`, value: `\`${c.prefix}kick @nescauh chatão\``},
        {name: `:bookmark: **Permissão**`, value: `\`KICK_MEMBERS\``}    )

    .setColor("RED")

    let membro = message.mentions.members.first()

    if(args.length === 0) {
        return message.channel.send(kemb)
    }
    
    if(!membro) {
        return message.channel.send(kemb)
    }

    if(membro.id === message.author.id) {
        message.channel.send(`Você não pode se kickar !`)
    }

    let motivo = args.slice(1).join(" ")
    
    if(!motivo) {
        return message.channel.send(kemb)
    }

    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply("Você não possui a permissão `KICK_MEMBERS`.")
    }

    let kickembed = new Discord.MessageEmbed()

    .setTitle("Confirmação")
    .setDescription(`**${message.author.username}**, você realmente deseja aplicar esse banimento em **${membro.user.username}**?`)
    .setColor('AQUA')
    .setFooter(`Clique no emoji para confirmar, caso mude de ideia espere 30s para cancelar`)

    message.channel.send(kickembed).then(msg => {
        msg.react("👍");

        let filtro = (reaction,usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max:5, time: 30000});

        coletor.on("collect", km => {
            km.remove(message.author.id)
            let embed = new Discord.MessageEmbed()

             .setTitle(`:hammer: Kick`)
             .setDescription(`:bust_in_silhouette: » Membro: **${membro.user.tag}**\n\n:police_officer: » Responsável: **${message.author.tag}**\n\n:notepad_spiral: » Motivo: ${motivo}`)
             .setColor('#ff5d52')
             var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
             if(!canal){
                 message.chaannel.send(`Caso deseje escolher um canal para enviar punições, utilize \`${c.prefix}stafflog\``, embed)
                 membro.kick();
             } else {
                canal.send(embed)
                membro.kick();
             }
             
        })
    })
}

exports.help = {
  name: 'kick'
}