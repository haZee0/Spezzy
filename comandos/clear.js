const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let eb = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("__**ERRO 1450**__")
    .setDescription("Você não pode escrever nada após colocar o número !")

    message.delete()

    let user = message.author;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Você não tempermissão para executar esse comando!`);
    let clean = args.slice(0).join(" ");
    if(args[1]){
        return message.channel.send(eb)
    }

    if (clean < 2 || clean > 100) return message.channel.send(`Coloque um numero entre 2 e 100`)
    if (args.length === 0) return message.channel.send(`Escreva um numero!`)
    try {
        message.channel.bulkDelete(clean)
        let embed = new Discord.MessageEmbed()
        .setDescription(`${clean} mensagens deletadas por ${user}`)

        message.channel.send(embed)
    } catch(e){
        console.log(e);
    }
}

exports.help = {
    name: "clear"
}