
const TeleBot = require('telebot');
const delay = require('delay');
const fet = require('node-fetch')
const links = 'https://mhankbarbar.tech/api/tiktok?url='
//const tiktod = require('tiktok-scraper')
const { getBuffer, json } = require ('./lib/buffer.js')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
bot.on('/tiktok', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
msg.reply.text(mess.wait, { asReply: true })
data = await json(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${vhtear}`)
msg.reply.video(data.result.video, { asReply: true, caption: mess.success })
       })

}




