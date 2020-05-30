const Discord = require("discord.js")
const db = require("quick.db")
const p = require("../config.json")

exports.run = async(client, message, args) => {
    
  let ação = args.join(' ').toLowerCase()
  
  if(ação === "on") {
    
    //digite aqui para ativar
    
  } else if(ação === "off") {
    
    //digite aqui para desativar
    
  } else if(!["on", "off"].includes(ação)) {
    
    //aqui é se ele disser qualquer coisa aleatória
    
  } else if(!ação) {
    
    //aqui é se ele n disser nd
    
  }

}

exports.help = {
    name: "antiinvite"
}