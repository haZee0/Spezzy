const Discord = require('discord.js');
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

if(message.author.id != "360834865639325697")  {
        return message.reply("Somente donos pode executar este comando!")
    }

    if(!args[0]){
        return message.reply("Use: s!manutencao <comando> <motivo>")
    }

 let motivo = args.join(" ").slice(5);
    if(!motivo) return message.reply("Você esqueceu de dizer o motivo.")

    try{
        let a = require(`./${args[0]}.js`);
    }catch(e){
        return message.reply("Este comando não existe!")
    }

    let manu = await db.fetch(`manutencao_bot_${args[0]}`);

    if(manu){

        db.set(`manutencao_bot_${args[0]}`, false);
        return message.reply("Manutenção no comando **"+args[0]+"** desativado com sucesso!")

    }else{

        db.set(`manutencao_bot_${args[0]}`, true);
        db.set(`manutencao_motivo_${args[0]}`, motivo);
        return message.reply("Manutenção no comando **"+args[0]+"** ativada com sucesso!")

    }
}

exports.help = {
  name: "manutencao"
}