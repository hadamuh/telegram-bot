
const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const fetch = require('node-fetch')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { json } = require('./lib/buffer')


module.exports = bot => {
    bot.on(/^\/brainly ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
      msg.reply.text(mess.wait, { asReply: true })
          brainly(`${arg}`).then(bren => {
					teks = '<b>「 <i>BRAINLY</i> 」</b>\n\n'
					no = 0
					for (let data of bren.data) {
						no += 1
					teks += `\n<b>➸ Pertanyaan:</b> ${data.pertanyaan}\n\n<b>➸ Jawaban:</b> ${data.jawaban[0].text}\n\n❉───────────❉\n`
					}
					bot.sendMessage(msg.chat.id, teks, { replyToMessage: msg.message_id, parseMode: 'html'})
					
                    }).catch((err) => {
            return bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })
    
    
    })
  bot.on(/^\/brainly2 ([\s\S]+)/, async (msg, args) => {
  var teks = args.match[1]
  msg.reply.text(mess.wait, { asReply: true })
  try {
  data = await json(`https://api.vhtear.com/branly?query=${encodeURIComponent(teks)}&apikey=${vhtear}`)
  bot.sendMessage(msg.chat.id, data.result.data)
  } catch { 
  msg.reply.text(mess.errsys, { asReply: true })
  }
  })
}



