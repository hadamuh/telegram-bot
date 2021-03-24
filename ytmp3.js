const TeleBot = require('telebot')
const delay = require('delay')
const fs = require("fs");
const ytdl = require("ytdl-core");
const yts = require('yt-search')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { h2k, getBuffer } = require('./lib/buffer')
const { servers, yta } = require('./lib/y2mate')
module.exports = bot => {

bot.on('/ytmp3', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
let server = (args[1] || 'id4').toLowerCase()
url = args[0]
let { dl_link, thumb, title, filesize, filesizeF} = await yta(url, servers.includes(server) ? server : 'id4')
 bitlu = dl_link
 msg.reply.photo(thumb, { caption: `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${bitlu}`, parseMode : 'Markdown', asReply: true })
 msg.reply.audio(await getBuffer(bitlu), { fileName: title+'.mp3', asReply: true })
  })
}


