

const TeleBot = require('telebot');
const { json } = require('./lib/buffer')
const delay = require('delay');
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on('/lirik', async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (args.length === 0) return msg.reply.text('null')
    msg.reply.text(mess.wait, { asReply: true })
    data = await json(`http://scrap.terhambar.com/lirik?word=${args.join(' ')}`)
    bot.sendAction(msg.chat.id, 'typing')
    if (data.status == false) return msg.reply.text('[❗] Lagu Tidak Ditemukan', { asReply:true })
    lirik = `Lirik Lagu ${args.join(' ')}\n\n${data.result.lirik}`
    msg.reply.text(lirik, { asReply: true })
    }) 
}





