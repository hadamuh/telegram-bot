const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const fetch = require('node-fetch')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { json, h2k, shortlink } = require('./lib/buffer.js')

module.exports = bot => {
bot.on(['/jadwaltv'], async (msg) => {
  const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/jadwaltv [query]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    data = await json(`https://mhankbarbar.tech/api/jdtv?ch=${args.join(' ')}&apiKey=${mhankkey}`)
    msg.reply.text(data.result)
    })
    bot.on(['/ytsearch'], async (msg) => {
  const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/ytsearch [query]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    bot.sendMessage(msg.chat.id, 'Sedang Mencari, silahkan tunggu sebentar', { replyToMessage: msg.message_id })
    try {
    anu = await json(`https://mhankbarbar.tech/api/ytsearch?q=${encodeURIComponent(args.join(' '))}&apiKey=${mhankkey}`, {method: 'get'})
					if (anu.error) return bot.sendPhoto(msg.chat.id, 'https://i.ibb.co/f8K14jz/327aae709c00.jpg', { caption:'Terjadi Kesalahan'})
					teks = '--------------------------\n'
					for (let i of anu.result) {
					linkpendek = await shortlink(`https://youtu.be/${i.id}`)
						teks += `*Title* : ${i.title}\n*links* : ${linkpendek}\n*Channel* : ${i.channel}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
					}
					bot.sendMessage(msg.chat.id, teks, {replyToMessage: msg.message_id, parseMode: 'Markdown'})
					} catch (e) {
					bot.sendMessage(ownerid, `ERROR | ${e}`)
					msg.reply.text('Ups, Terjadi Kesalahan, mungkin Dikarenakan Oleh Sistem')
					} 
					
    })
    
  }