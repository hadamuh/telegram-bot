
const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const fetch = require('node-fetch')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { json, shortlink, getBuffer } = require('./lib/buffer.js')
const fetchJson = json
const vkey = vhtear
const apikey = farzainkey

module.exports = bot => {
  
  bot.on(['/jarak'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teks = args.join(` `).split('-')
    teksnya = args.join(' ')
  if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/jarak [kota1]-[kota2]</code>', { replyToMessage: msg.message_id , parseMode: 'html' })
   data = await json(`https://api.vhtear.com/distance?from=${teks[0]}&to=${teks[1]}&apikey=${vhtear}`)
   msg.reply.text('<code>'+data.result.data+'</code>', { parseMode : 'html' })
   })  
   bot.on(['/pinterest'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/pinterest [query]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
        bot.sendMessage(msg.chat.id, 'Sabar, Lagi Nyari...')
        var url = await 'https://api.vhtear.com/pinterest?query='+args.join(' ')+'&apikey='+vhtear
        await axios.get(url)
        .then(async(res) => {
            let acakcecan = await res.data.result[Math.floor(Math.random() * res.data.result.length )]
            await bot.sendPhoto(msg.chat.id, `${acakcecan}`)
            return await bot.sendMessage(msg.chat.id, `Pinterest\n\nHasil Pencarian : ${args.join(' ')}`)
        }).catch(async(err)=> {
            return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })

    })
    bot.on(['/cewek'], async (msg) => {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
					anu = await json(`https://api.vhtear.com/pinterest?query=${cewe}&apikey=${vkey}`, {method: 'get'})
					msg.reply.text('sedang Diproses...')
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					bot.sendPhoto(msg.chat.id, trest, { replyToMessage : msg.message_id })
					})
					
	bot.on(['/playstore'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/playstore [query]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    	kuji = args.join(' ')
					msg.reply.text('sedang diproses....')
			   response = await fetch('https://api.vhtear.com'+ '/playstore?query=' + kuji + '&apikey=' + vkey)
				ppek = await response.json()
				pler = ppek.result
				no = 0
				ve_ = "*Playstore*\n"
				for (var cg of pler) {
					no += 1
					ve_ += "\n\n" + no + ". AppID : " + cg.app_id
					ve_ += "\nAppID : " + cg.app_id
					ve_ += "\nUrl : https://play.google.com"+ cg.url
					ve_ += "\nTitle : " + cg.title
					ve_ += "\nDeveloper : " + cg.developer
					ve_ += "\nDescription : " + cg.description
				}
				await bot.sendMessage(msg.chat.id, ve_, {replyToMessage: msg.message_id })
				})
				bot.on(['/tahta','/hartatahta'], async (msg) => {
				const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/tahta [teks]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    bot.sendAction(msg.chat.id, 'upload_photo')
    bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/hartatahta?text=${args.join(' ')}&apikey=${zeksapi}`)
    })
    bot.on(['/sspc'], async (msg) => {
      const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/sspc [link]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    data = await getBuffer(`https://api.vhtear.com/ssweb?link=${args[0]}&type=pc&apikey=${vhtear}`)
    bot.sendPhoto(msg.chat.id, `${data}`)
    })
    bot.on('/cuaca', async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/cuaca [tempat]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    data = await json(`https://rest.farzain.com/api/cuaca.php?id=${args.join(' ')}&apikey=${apikey}`)
                if (data.respon.cuaca == null) return msg.reply.text('Maaf daerah yang kamu cari tidak tersedia', { replyToMessage: msg.message_id })
                if (data.error) return reply(data.error)
                hasil = `╠➥  Tempat : ${data.respon.tempat}\n╠➥  angin : ${data.respon.angin}\n╠➥  cuaca : ${data.respon.cuaca}\n╠➥  desk : ${data.respon.deskripsi}\n╠➥  kelembapan : ${data.respon.kelembapan}\n╠➥  suhu : ${data.respon.suhu}\n╠➥  udara : ${data.respon.udara}`
                msg.reply.text(hasil, {replyToMessage: msg.message_id })
                })
                bot.on('/joox', async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/joox [query]</code>', {replyToMessage: msg.message_id, parseMode: 'html' })
    data = await json(`https://tobz-api.herokuapp.com/api/joox?q=${args.join(' ')}&apikey=${tobzkey}`, {method: 'get'})
    if (data.error) return reply(data.error)
    const pendek = await shortlink (data.result.mp3)
    infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\nLink : [Click here](${pendek})`
    msg.reply.photo(data.result.thumb, { parseMode: 'Markdown', caption: infomp3})      
    msg.reply.audio(data.result.mp3, { serverDownload: false, replyToMessage: msg.message_id, fileName: data.result.judul+'.mp3'})
    })
    bot.on(['/nhentai'], async (msg) => {
      const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    data = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${args[0]}&apikey=${vkey}`)
    if (data.result.response == 204) return msg.reply.text(`kode nuklir ${args[0]} tidak ditemukan`, {replyToMessage: msg.message_id })
    msg.reply.text('⌛ Sedang Diproses, Silahkan Tunggu Sebentar', {replyToMessage: msg.message_id })
    msg.reply.file(data.result.pdf_file, {replyToMessage: msg.message_id, fileName: `${data.result.title}.pdf` })
    })
}



