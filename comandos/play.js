const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../music")
const Discord = require('discord.js')
module.exports.run = async (client,message,args) => {
    let erroA = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Tente utilizar `play <URL> ou nome da música!`")
    .setColor('RED')
    
    let erroB = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Você precisa estar em um canal de voz!")
    .setColor('RED')
    
    let erroC = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Playlists não podem ser tocadas!")
    .setColor('RED')
    
    let erroD = new Discord.MessageEmbed()
    .setTitle("__**ERRO**__")
    .setDescription("<:erro:712413899638702090> | Este vídeo tem copyright!")
    .setColor('RED')

  
    if (!args.length) {
      return message.channel.send(erroA);
    }

    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send(erroB);
    }

    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.channel.send(erroC);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;
    let song = null;

    if (urlcheck) {
      try {
        songData = await ytdl.getInfo(args[0]);
        song = {
          title: songData.title,
          url: songData.video_url,
          duration: songData.length_seconds
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply(erroD)
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
        const result = await youtube.searchVideos(targetsong, 1)
        songData = await ytdl.getInfo(result[0].url)
         song = {
          title: songData.title,
          url: songData.video_url,
          duration: songData.length_seconds
        };
      } catch (error) {
        console.error(error)
      }
    }
    
    if(serverQueue) {
      serverQueue.songs.push(song)
         let ok1 = new Discord.MessageEmbed()
          .setTitle("__**SUCESSO**__")
          .setDescription(`<a:check:715556795002650694> | Música ${song.title} adicionada na fila!`)
          .setColor('GREEN')
  
      return serverQueue.textChannel.send(ok1)
      .catch(console.error)
    } else {
      queueConstruct.songs.push(song);
    }
    
    if(!serverQueue) message.client.queue.set(message.guild.id, queueConstruct)
    
     if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
          let erroE = new Discord.MessageEmbed()
          .setTitle("__**ERRO**__")
          .setDescription(`<:erro:712413899638702090> | Não pude entrar no canal de voz devido a ${error}`)
        console.error(erroE);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(erroE).catch(console.error);
      }
    }
    
    
};

exports.help = {
  name: 'play'
}