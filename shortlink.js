const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')
const fetch = require('node-fetch')
const { shortlink, bitly } = require('./lib/buffer.js')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(/^\/shortlink ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        if (!isUrl(arg)) return msg.reply.text(mess.errlink, { replyToMessage: msg.message_id })
       await bot.sendMessage(msg.chat.id, 'Sedang Membuat Shortlink...', { replyToMessage: msg.message_id })
     result = await shortlink(arg)
     result2 = await bitly(arg)
     hasil = `<b>tinyurl</b> : ${result}\n\n<b>bitly</b> : ${result2}`
     msg.reply.text(hasil, { replyToMessage: msg.message_id , parseMode: 'html', webPreview: false})
    })
}