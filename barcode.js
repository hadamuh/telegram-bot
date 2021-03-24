

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(/^\/barcode ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        if (arg.length < 1) return bot.sendMessage(msg.from.id, 'Silahkan Masukkan teks!')
       await msg.reply.text(mess.wait, { asReply: true })
     try {
     var randomneko = await `https://api.zeks.xyz/api/barcode?apikey=${zeksapi}&text=${arg}`
        await msg.reply.photo(`${randomneko}`, { caption: mess.success, asReply: true })
        } catch (err) {
           msg.reply.text(mess.errsys, { asReply: true })
            bot.sendMessage(ownerid, `BARCODE ERROR : ${err}`)
        }

    })
}
