const TeleBot = require('telebot');
const speed = require ('performance-now')
const axios = require('axios')
const moment = require('moment')
const { processTime } = require('./lib/buffer.js')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/speed'], async (msg, args) => {
    timestamp = speed()
                latensi = speed() - timestamp
                const pingnya2 = `Speed: <code>${processTime(msg.date, moment())}</code> Second`
        return await bot.sendMessage(msg.chat.id, pingnya2, { parseMode: 'html', replyToMessage: msg.message_id})
    })
    bot.on(['/ping'], async (msg, args) => {
    timestamp = speed()
                latensi = speed() - timestamp
                const pingnya2 = `Speed: <code>${processTime(msg.date, moment())}</code> Second`
        return await bot.sendMessage(msg.chat.id, pingnya2, {parseMode:'html', replyToMessage: msg.message_id})
    })
}





