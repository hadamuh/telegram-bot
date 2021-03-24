const TeleBot = require('telebot')
const delay = require('delay')
const ytdl = require("ytdl-core");
const fs = require('fs')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {

bot.on('/ytmp4', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
    if (args.length < 1) return msg.reply.text('Urlnya mana um?\n\n/ytmp4 [link]', { asReply: true })
	url = args[0]
       if(ytdl.validateURL(url)){
      audio_file = await './ytdl/' + 'audio' + ytdl.getURLVideoID(url) + '.mp4';
      await msg.reply.text("Sedang mendownload...sabar ngab...", { asReply: true });
      await ytdl(url, {quality: "highestvideo", filter: "videoandaudio"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await msg.reply.text("Sedang mengirim...", { asReply: true});
          await msg.reply.video(audio_file, {asReply: true, fileName: judul+'.mp4'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await msg.reply.text(mess.errlink, { asReply: true });
    }
  })
}





