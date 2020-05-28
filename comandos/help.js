const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  let user = message.author;
//Criação das embed's

  let Aembed = new Discord.MessageEmbed()
  .setTitle("**Ajuda**")
  .setDescription(`Olá ${user}, se você executou esse comando, precisa de ajuda, certo?`)
  .addField("⚒️ Moderação","Comandos de moderação",true)
  .addField("⚙️ Configuráveis","Comandos configuráveis",true)
  .addField("🎉 Diversão","Comandos de diversão",true)
  .addField("🎈 Outros","Comandos de outras categorias",true)
  .addField("💻 Desenvolvedores","Comandos dos desenvolvedores",true)
  .addField("💸 Economia", "Comandos de economia para se divertir de montão", true)
  .addField("🎵 Música", "Comandos de músicas",true)
  .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

  let Cembed = new Discord.MessageEmbed()
  .setTitle("⚙️ **Configuráveis**")
  .setDescription("s!welcome >> Configure o sistema de entrada \n s!saida >> Configure o sistema de saída \n setsugestao >> Configure o canal de sugestões \n `autorole` >> Configure o cargo de entrada do servidor \n `stafflog` >> Configure o canal de punições do servidor \n `desc` >> Configure sua descrição do seu perfil \n `setimg` >> Configure a imagem do seu perfil \n `setcor` >> Configure a cor do seu perfil")
   .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

  let Oembed = new Discord.MessageEmbed()
  .setTitle("🎈 **Outros**")
  .setDescription("`addemoji` >> Adicione um emoji no servidor \n `servericon` >> Veja a imagem do servidor \n `ping` >> Veja a latência do bot \n sugestao >> Envie sua sugestão \n `notificar` >> Receba o cargo de notificações do servidor de suporte")
   .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

  let Devembed = new Discord.MessageEmbed()
  .setTitle("💻 **Desenvolvedores**")
  .setDescription("`eval` >> Utilize propriedades pelo chat \n `changelog` >> Publique atualizações no servidor de suporte \n `addmoney` >> Adicione BitCodes da conta de um usuário! \n `removemoney` >> Remova BitCodes da conta de um usuário!")
  .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

  let Eembed = new Discord.MessageEmbed()
  .setTitle("💸 **Economia**")
  .setDescription("`apostar` >> Aposte na loteria \n `emprego` >> Arrume um emprego para não passar necessidade \n `daily` >> Ganhe uma quantidade de dinheiro investindo em ações binárias \n `perfil` >> Veja o seu emprego e a quantidade de dinheiro que você tem \n `pay` >> Pague alguém que você ficou devendo \n `money` >> Veja a quantidade de dinheiro que você tem na sua carteira \n `work` >> Trabalhe para ganhar dinheiro")
  .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

  let Divembed = new Discord.MessageEmbed()
   .setTitle("🎉 **Diversão**")
  .setDescription("`dado` >> Jogue um dado \n `piada` >> Ria com piadas")
   .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");
  
  let Membed = new Discord.MessageEmbed()
  .setTitle("⚒️ **Moderação**")
  .setDescription("`ban` >> Aplique um ban a uma pessoa \n `kick` >> Aplique um kick a uma pessoa \n `painel` >> Acesse o painel de configurações do servidor \n `anunciar` >> Faça um anúncio no seu servidor!\n `mute` >> Mute um usuário \n `unmute` >> Desmute um usuário \n `clear` >> Limpe uma quantidade de mensagens de um chat \n `warn` >> Aplique um aviso a um usuário")
  .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

   let MuEmbed = new Discord.MessageEmbed()

   .setTitle("🎵 **Música**")
   .setDescription("`play` >> Toque aquela música que faz você arrepiar \n `skip` >> Alguém colocou uma música meio ruim... Pule ela então. \n `stop` >> Cansou de ouvir músicas ? Pare a música com este comando.\n `loop` >> faça o loop da sua música favorita \n `pause` >> Pause a sua música \n `resume` >> Despause a sua música")
   .setFooter("Para todos os comandos funcionarem corretamente, o cargo do Spezzy deve estar acima de todos os outros!");

//Fim da criação das embed's  

  message.channel.send(Aembed).then(msg => {
    msg.react("⚒️")
    msg.react("🎉")
    msg.react("💻")
    msg.react("⚙️")
    msg.react("🎈")
    msg.react("💸")
    msg.react("🎵")
    msg.react("🔙")

  let filtro = (reaction, user) => reaction.emoji.name === "⚒️" && user.id === message.author.id;
  let coletor = msg.createReactionCollector(filtro, {max:3})

  let filtro2 = (reaction,user) => reaction.emoji.name === "🎉" && user.id === message.author.id;
  let coletor2 = msg.createReactionCollector(filtro2, {max: 3})

  let filtro3 = (reaction, user) => reaction.emoji.name === "💻" && user.id === message.author.id;
  let coletor3 = msg.createReactionCollector(filtro3, {max: 3})

  let filtro4 = (reaction, user) => reaction.emoji.name === "⚙️" && user.id === message.author.id;
  let coletor4 = msg.createReactionCollector(filtro4, {max: 3})

  let filtro5 = (reaction, user) => reaction.emoji.name === "🎈" && user.id === message.author.id;
  let coletor5 = msg.createReactionCollector(filtro5, {max: 3})

  let filtro6 = (reaction, user) => reaction.emoji.name === "🔙" && user.id === message.author.id;
  let coletor6 = msg.createReactionCollector(filtro6, {max: 3})

  let filtro7 = (reaction, user) => reaction.emoji.name === "💸" && user.id === message.author.id;
  let coletor7 = msg.createReactionCollector(filtro7, {max: 3})

  let filtro8 = (reaction, user) => reaction.emoji.name === "🎵" && user.id === message.author.id;
  let coletor8 = msg.createReactionCollector(filtro8, {max: 3})

   coletor.on("collect", cp => {
     cp.remove(user)
     msg.edit(Membed)
     msg.reactions.removeAll()
     msg.react("🔙")
   })
      coletor2.on("collect", cp1 => {
     cp1.remove(user)
     msg.edit(Divembed)
     msg.reactions.removeAll()
     msg.react("🔙")
   })
      coletor3.on("collect", cp2 => {
        cp2.remove(user)
        msg.edit(Devembed)
             msg.reactions.removeAll()
     msg.react("🔙")
      })
      coletor4.on("collect", cp3 => {
        cp3.remove(user)
        msg.edit(Cembed)
        msg.reactions.removeAll()
       msg.react("🔙")
      });
      coletor5.on("collect", cp4 => {
        cp4.remove(user)
        msg.edit(Oembed)
        msg.reactions.removeAll()
        msg.react("🔙")
      })
      coletor7.on("collect", cp6 => {
        cp6.remove(user)
        msg.edit(Eembed)
        msg.reactions.removeAll()
        msg.react("🔙")
      })
      coletor8.on("collect", cp7 => {
       cp7.remove(user)
       msg.edit(MuEmbed)
       msg.reactions.removeAll()
       msg.react("🔙") 
      })
     coletor6.on("collect", cp5 => {
     cp5.remove(user)
     msg.edit(Aembed)
     msg.reactions.removeAll()
     msg.react("⚒️")
     msg.react("🎉")
     msg.react("💻")
     msg.react("⚙️")
     msg.react("🎈")
     msg.react("💸")
     msg.react("🎵")
      })

 })
}

exports.help = {
  name: 'help'
}