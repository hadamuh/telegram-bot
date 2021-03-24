const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/waifu'], async (msg, args) => {
    const link = await 'https://waifu.pics/api/sfw/waifu'
    await bot.sendMessage(msg.chat.id, 'Sedang mencari waifu....')
    await axios.get(link)
    .then(async (res) => {
        let randomwaifu = await `${res.data.url}`
        await bot.sendPhoto(msg.chat.id, `${randomwaifu}`)
        return await bot.sendMessage(msg.chat.id, 'KAWAIIIIII😍😍')

    })
    .catch(async(err) => {
        return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })
    })
}





