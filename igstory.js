

const TeleBot = require('telebot')
const delay = require('delay')
const ig = require('scraper-instagram')
const { isInteger } = require('lodash')

const InstaClient = new ig()
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { json } = require('./lib/buffer')

module.exports = bot => {

bot.on('/igstory', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
let username = args[0].replace('@', '')
data = await json(`https://api.vhtear.com/igstory?query=${username}&apikey=${vhtear}`)
for (let i of data.result.story.itemlist) {
msg.reply.file(i.urlDownload, {serverDownload: false})
}
  })
}







