const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const fetch = require('node-fetch')
const fs = require('fs')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { json, shortlink } = require('./lib/buffer.js')
const vkey = vhtear
const apikey = farzainkey

module.exports = bot => {

bot.on(['/memeindo'], async (msg) => {
data = await json('https://api.zeks.xyz/api/memeindo?apikey='+zeksapi)
msg.reply.photo(data.result, { replyToMessage: msg.message_id })
})

bot.on(['/darkjokes'], async (msg) => {
data = fs.readFileSync('./lib/darkjokes.js')
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 data = jsonData[randIndex];
 console.log(data)
msg.reply.photo(data.result, { caption : '<pre>DARKJOKES</pre>', parseMode: 'html' })
})
bot.on(['/asupan'], async (msg) => {
data = fs.readFileSync('./lib/asupan.js')
 jsonData = JSON.parse(data);
 randIndex = Math.floor(Math.random() * jsonData.length);
 data = jsonData[randIndex];
 console.log(data)
msg.reply.video(data.result, { caption : 'Asupannya kak', parseMode: 'html' })
})

}