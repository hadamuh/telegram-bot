const TeleBot = require('telebot')
const delay = require('delay')
const needle = require('needle')
const _ = require('lodash')
const { isEmpty } = require('lodash')


const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})



module.exports = bot => {
    bot.on('/nulis', async (msg) => {
    const args2 = msg.text
    const args = args2.trim().split(/ +/).slice(1)
    let arg = args.join(' ')
    if (!arg) return msg.reply.text('USAGE : <pre>/nulis [teks]</pre>', { parseMode : 'html' , replyToMessage: msg.message_id })
    let url = 'http://salism3.pythonanywhere.com/write?text='
    needle(url + arg, async (err, resp, body) => {
        await bot.sendMessage(msg.chat.id, 'Sebentar ya ngab...')
        await bot.sendPhoto(msg.chat.id, `${body.images}`, { caption: 'Bot Sukses Nulis' })

        })
    
    }) 


}







