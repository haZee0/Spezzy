const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    const member = message.mentions.users.first() || message.author;
    const reais = await db.get(`reais_${member.id}`)
    if(reais === null) reais = 0;

    let emprego = await db.get(`trabalho_${member.id}`)
    if(emprego === null) emprego = "Desempregado"
    if(emprego === 1) emprego = "💻 Programador"
    if(emprego === 2) emprego = "🍃 Jardineiro"
    if(emprego === 3) emprego = "🔨 Pedreiro"
    if(emprego === 4) emprego = "✏️ Desenhista"

    let desc = await db.get(`desc_${member.id}`)
    if(desc === null) desc = "Nenhuma descrição"

    let embed = new Discord.MessageEmbed()
    .setDescription(`${desc}`)
    .addField("**BitCodes**", `\`${reais} BitCodes\``, true)
    .addField("**Emprego**", `\`${emprego}\``)
    .setFooter(`Perfil de: ${member.username}`, member.avatarURL())
    .setColor('GOLD')
    .setThumbnail(member.avatarURL())

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil'
}