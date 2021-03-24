

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const { exec } = require('child_process')
const fetch = require('node-fetch')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/exec ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
      exec(arg, (err, stdout) => {
		           if(err) return msg.reply.text('Error!')
		           if (stdout) {
			       bot.sendMessage(msg.chat.id, stdout)
		           }
	           })
    
    
    })
    bot.on(/^\/return ([\s\S]+)/, async (msg, args) => {
        let argu = args.match[1]
        try {
      bot.sendMessage(msg.chat.id, '<pre>'+JSON.stringify(eval(argu), null, '\t')+'</pre>', {parseMode: 'html'}) 
    } catch (e) {
   bot.sendMessage(msg.chat.id, `${e}`)
   await delay(1000)
   bot.deleteMessage(msg.chat.id, msg.message_id + 1)
   await delay(2000)
   bot.deleteMessage(msg.chat.id, msg.message_id)
    }
  })
  bot.on(/^\/hitung ([\s\S]+)/, async (msg, args) => {
let angka = msg.text
let angka2 = angka.slice(8)
nrmp = 0
for (let i = 0; i < angka2; i++) {
                        nrmp++
                       await msg.reply.text(nrmp)
                    
                    }
              })


}



