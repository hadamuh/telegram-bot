const TeleBot = require('telebot');
const delay = require('delay');
const googleTTS = require('google-tts-api');
const { fetchJson } = require('./lib/fetcher')
const { getBuffer } = require('./lib/buffer.js')
const fs = require("fs")
const ytdl = require("ytdl-core")

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(['/tts','/gtts'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/tts [bahasa] [teks]</code>', { replyToMessage: msg.message_id, parseMode: 'html'})
   // await bot.sendMessage(msg.from.id, 'Sabar, mbak gugel nya lagi baca teks kamu...')

    if(teksnya.length > 200) {
      return bot.sendMessage(msg.from.id, 'ERROR | Batas maksimal 200 karakter!')
    }

    googleTTS
  .getAudioBase64(arg.slice(8), {
    lang: args[0],
    slow: false,
    host: 'https://translate.google.com',
    timeout: 10000,
  })
  .then(async(res) => {

    const tts = res
    const fileOpts = {
    fileName: 'tts.mp3',
    contentType: 'audio/mp3',
    replyToMessage: msg.message_id,
    };
    bot.sendAction(msg.chat.id, 'record_voice')
    await bot.sendVoice(msg.chat.id, Buffer.from(tts, 'base64'), fileOpts)
    //return await bot.sendMessage(msg.from.id, 'Sukses😎👌, Thanks to mbak gugel!')

  })
  .catch(async(err) => {
      return await bot.sendMessage(msg.from.id, `ERROR | ${err}`)
  })
        })
        
}





