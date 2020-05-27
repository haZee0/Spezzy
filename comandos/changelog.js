const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
    let erroEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("**__ERRO 1293__**")
    .setDescription("Você não colocou nenhum changelog !")

    if(!["397725731985293312", "360834865639325697", "572827880091025408",].includes(message.author.id)) return message.reply('Apenas meus __**criadores**__ podem usar este comando')


    let log = args.slice(0).join(" ")
    if(!log) return message.channel.send(erroEmbed)

    let lEmbed = new Discord.MessageEmbed()
    .setTitle("ChangeLog")
    .setDescription(log)
    .setFooter(`Por ${message.author.username}`, message.author.displayAvatarURL())
    .setThumbnail("https://i.imgur.com/oeHotDS.png")
    .setColor('GOLD')

    const lCanal = message.guild.channels.cache.find(
        channel => channel.id === ("712845698516648027")
    );
        lCanal.send(`<@&714321107292782604>`, lEmbed)

}

exports.help = {
    name: "changelog"
}