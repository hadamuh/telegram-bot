
const TeleBot = require('telebot')
const delay = require('delay')
const { json } = require('./lib/buffer')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {

bot.on('/igdl', async (msg) => {
  const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (args.length === 0) return msg.reply.text('USAGE : <pre>/igdl [link]</pre>', { parseMode: 'html', asReply: true })
    if (!isUrl(args[0])) return msg.reply.text(mess.errlink, { asReply: true })
 data = await json(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${zeksapi}`)
 if (data.message) return msg.reply.text(data.message, {replyToMessage:msg.message_id})
 captions = `source : [${data.owner}](https://instagram.com/${data.owner})\n\n${data.caption}`
 msg.reply.file(data.result[0].url, {replyToMessage: msg.message_id , caption: captions, parseMode: 'Markdown' })
  })
}