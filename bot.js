const TeleBot = require('telebot')
const delay = require('delay')
const fetch = require('node-fetch')
global.tokebot = '1674864787:AAFlR4BkPYJ1Jb7mMOGw4i9yZ_PURUlj9-g'
global.ownerid = '1245178040'
global.zeksapi = 'apivinz'
global.vhtear = 'Anakanjing123'
//const util = require('util')
global.mhankkey = 'Akbarneh'
global.farzainkey = 'O8mUD3YrHIy9KM1fMRjamw8eg'
global.tobzkey = 'BotWeA'

const bot = new TeleBot({
    token: global.tokebot
})
const imgbb = require('imgbb-uploader')
const { stylizeText, h2k, json, getBuffer, bitly, shortlink, urlpendek } = require('./lib/buffer')
const moment = require('moment')
const { exec } = require('child_process')
const axios = require('axios')
const bdr = require('rumus-bdr')
let ytdl = require('ytdl-core')
let yts = require('yt-search')
let fs = require('fs')
const requests = require('request')
const { servers, yta } = require('./lib/y2mate')
 function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}

global.mess = {
	wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
	success: '✅ Berhasil ✅',
	errlink: '[❗] link yang kamu kirim tidak valid!',
	errsys: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
}


global.isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
	
function timeConverter(UNIX_timestamp, ribuan){
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }
 
  //buat index bulan
  var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

  // ambil pecahan waktu masing-masing
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  // gabungkan ke dalam variable time
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

bot.on('text', async (msg) => {
console.log(`(${moment(msg.date * 1000).format('HH:mm:ss')}) chat dari: ${msg.from.username || msg.from.first_name || 'None'} - ${msg.chat.type} - ${msg.text}`)
if (!msg.text.startsWith('/') && msg.chat.type == 'private'){
try {
data = await json(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${encodeURIComponent(msg.text)}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`)
//if (data.success == '') return msg.reply.text('Simi Gatau Kak', { replyToMessage: msg.message_id })
msg.reply.text('🤖 : '+ data.simsimi_talk_set.answers[0].sentence, { asReply: true })
} catch {
msg.reply.text('Simi Gatau Kak', { asReply: true })
}
}
})
bot.on('/shitpost', async (msg) => {
msg.reply.text(mess.wait, { asReply: true })
link = 'https://api.xteam.xyz/shitpost?APIKEY=a2024865131ddd9e'
buffer = await getBuffer(link)
bot.sendAction(msg.chat.id, 'upload_video')
msg.reply.video(buffer, { asReply : true })
})

bot.on('/infobot', async (msg) => {
hehe = await bot.getMe()
hihi = `Informasi Bot\n\nID = ${hehe.id}\nName = ${hehe.first_name}\nUsername = @${hehe.username}\nCan Join Group = ${hehe.can_join_groups ? 'Yes' : 'No'}\nCan Read All Group Message = ${hehe.can_read_all_group_messages ? 'Yes' : 'No'}`
msg.reply.text(hihi, { asReply: true })
})
bot.on('/covid', async (msg) => {

api = await json('https://api.kawalcorona.com/indonesia/')
var { positif, sembuh, meninggal, dirawat } = api[0]
msg.reply.text(`<b>Positif</b> : <code>${positif}</code>\n<b>sembuh</b> : <code>${sembuh}</code>\n<b>meninggal</b> : <code>${meninggal}</code>\n<b>dirawat</b> : <code>${dirawat}</code>`, { asReply: true, parseMode: 'html'})
})
bot.on(['/start'], async (msg) => {
      const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)

const startMessage = `Hai ${msg.from.first_name}, Saya Caliph Bot Ketik /menu Untuk Menampilkan Menu!`
    /*let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/readme 🗒🔍',
        '/about 🤖❗️'],
    ], {resize: true});*/
 switch(args[0]) {
   case 'help':
   bot.sendAction(msg.chat.id, 'typing')
 bot.sendMessage
(msg.chat.id, `Created By : @Caliph71\nLink Bot : https://t.me/Caliph71_bot?start\n_______________\n\n🤖LIST FITUR BOT Caliph🤖!\n
=====[DAFTAR MENU]=====\n> /nulis [teks]\n> /nulis2 [teks]\n> /nulis3 [teks]\n> /anime [nama anime]
> /animedl [nama anime]\n> /animedl2 [nama anime]\n> /filmtrend\n> /filmdetail [angka 1-20]
> /cekresi [kurir] [resi]\n> /brainly [pertanyaan]\n> /lirik [nama artis - judul lagu]\n> /saran [teks]
> /qrcode [teks]\n> /tts [teks]\n> /pasangan [namamu] [pasanganmu]\n> /translate [teks]\n> /terjemahan [teks]
> /rangkum [teks]\n> /megumin\n> /neko\n> /waifu\n> /cewecans\n> /wallpaper\n> /slots\n> /brainly [pertanyaan]\n> /tahta [teks]\n\n========================
\n===[Sosmed Downloader]===\n> /ytmp4 [link yt]\n> /ytmp3 [link yt]\n> /twtdl [link twitter]\n> /tiktokdl [link tiktok]
> /fbdl [link video facebook]\n> /igdl [link instagram]\n> /igtv [link instagram tv]\n> /igstory [angka] [username ig]
> /igavatar [username ig]\n========================\n
Kurang paham/kurang jelas ? => /readme
Ingin tau tentang Bot Caliph ? => /about
`)
break
default:
await bot.sendAction(msg.chat.id, 'typing')
await bot.sendMessage(msg.chat.id, `${startMessage}`, 
{replyToMessage: msg.message_id})
//await bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
}

})

bot.on('newChatMembers', async (msg) => {
bot.sendAction(msg.chat.id, 'typing')
bot.sendMessage(msg.chat.id, `Hai Gan ${msg.new_chat_participant.username || msg.new_chat_participant.first_name}\nSelamat Datang Di group ${msg.chat.title}`, {replyToMessage: msg.message_id})
await bot.deleteMessage(msg.chat.id, msg.message_id)
})
bot.on('leftChatMember', async (msg) => {
bot.sendAction(msg.chat.id, 'typing')
bot.sendMessage(msg.chat.id, `Goodbye Gan ${msg.left_chat_participant.username || msg.left_chat_participant.first_name}`, {replyToMessage: msg.message_id})
await bot.deleteMessage(msg.chat.id, msg.message_id)
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Gunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide',replyToMessage: msg.message_id})
})

bot.on('/styletext', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
try {
teks = msg.reply_to_message.text
} catch {
teks = args.join(' ') ? args.join(' ') : 'Caliph Bot'
}

msg.reply.text(Object.entries(await stylizeText(teks)).map(([name, value]) => `<b>${name}</b>\n<pre>${value}</pre>`).join`\n\n`, { asReply: true, parseMode: 'html'})
})

bot.on('/time', async (msg) => {
let d = new Date(); 
let timeStamp = d.getTime();
let pesan = "Waktu pesan adalah: <code>";
pesan += timeConverter(msg.date, true) + '</code>';

pesan += "\n\nWaktu BOT sekarang adalah: <code>";
pesan += timeConverter(timeStamp) + '</code>';
  
 return msg.reply.text(pesan, { parseMode: 'html' })
      })
      
      
bot.on('/kickme', async (msg) => {
    try {
   bot.sendMessage(msg.chat.id, 'Tidak masalah, aku akan kick kamu!' ,{replyToMessage: msg.message_id})
   bot.kickChatMember(msg.chat.id, msg.from.id)
    } catch {
    bot.sendMessage(msg.chat.id, 'Gagal kick member!', {replyToMessage: msg.message_id})}
})

bot.on('/tebakgambar', async (msg) => {
data = await json('https://api.zeks.xyz/api/tebakgambar?apikey='+zeksapi)
msg.reply.photo(data.result.soal, { replyToMessage: msg.message_id , caption: 'Jawablah Soal ini, colldown 30 detik'})
await delay(30000)
msg.reply.text(`Waktu Habis\nJawaban : ${data.result.jawaban}`, { replyToMessage: msg.message_id + 1 })
})
bot.on('/cat', async (msg) => {
q2 = Math.floor(Math.random() * 900) + 300
q3 = Math.floor(Math.random() * 900) + 300
msg.reply.photo('http://placekitten.com/'+q3+'/'+q2, { asReply: true })
})
bot.on('/leave', async (msg) => {
if (ownerid.includes(msg.from.id)) {
if (msg.chat.type == 'private') return msg.reply.text('Perintah Ini Khusus Didalam group!', { replyToMessage: msg.message_id })
msg.reply.text('Goodbye👋')
await bot.leaveChat(msg.chat.id)
} else {
    bot.sendMessage(msg.chat.id, 'Perintah Ini Khusus Developer Bot!', {replyToMessage: msg.message_id})
    await delay(3000)
    bot.deleteMessage(msg.chat.id, msg.message_id + 1)
    }
    })
bot.on('/hilih', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
try {
quotedText = msg.reply_to_message.text
i = (teks) => {
return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
}
msg.reply.text(i(quotedText), { replyToMessage: msg.reply_to_message.message_id })
} catch {
if (args.length < 1) return msg.reply.text('Teksnya apa kak?', {replyToMessage: msg.message_id })
i = (teks) => {
return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
}
msg.reply.text(i(args.join(' ')), { replyToMessage:msg.message_id })
}
})

bot.on('/kali', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
const q = args.join(' ')
                var kalian = q
                var kali = kalian.split('×')
                perkalian = bdr.rdb.perkalian(kali[0], kali[1])
                msg.reply.text(perkalian, { asReply: true })
                })
bot.on('/s', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
teks = encodeURIComponent(args.join(' '))
data = await json(`https://simsumi.herokuapp.com/api?text=${teks}&lang=id`)
bot.sendAction(msg.chat.id, 'typing')
if (data.success == '') return msg.reply.text('Simi Gatau Kak', { replyToMessage: msg.message_id })
msg.reply.text(data.success, { replyToMessage: msg.message_id })
})
bot.on(['/delete','/del'], async (msg) => {
bot.deleteMessage(msg.chat.id, msg.message_id)
bot.deleteMessage(msg.chat.id, msg.reply_to_message.message_id)
})

bot.on(['/runtime', '/uptime'], async (msg) => {
uptime = kyun(await process.uptime)
msg.reply.text(`uptime : ${uptime}`)
})

bot.on(['/ambil'], async (msg) => {
const fs = require('fs')
const { getBuffer } = require('./lib/buffer')
file = await bot.getFile(msg.reply_to_message.photo[0].file_id)
media = await getBuffer(file.fileLink)
fs.writeFileSync(msg.date+'.jpg', media)
})

bot.on('/sandtext', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
if (args.length === 0) return msg.reply.text('USAGE : <pre>/sandtext [teks]</pre>', { parseMode: 'html', replyToMessage: msg.message_id })
msg.reply.photo(`https://api.zeks.xyz/api/sandw?text=${args.join(' ')}&apikey=${zeksapi}`, { replyToMessage: msg.message_id })
})

bot.on('/film', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
data = await json(`https://api.zeks.xyz/api/film?q=${args.join(' ')}&apikey=${zeksapi}`)
		for (let i of data.result) {
		links = await urlpendek(i.url)
		teks = `Judul: ${i.title}\n\nLink: ${links}`
		msg.reply.photo(await getBuffer(i.thumb || 'https://i.ibb.co/f8K14jz/327aae709c00.jpg'), { caption : teks, replyToMessage: msg.message_id, parseMode: 'html' })
		}
})
               
bot.on(['/loli'], async (msg) => {
data = await json('https://tobz-api.herokuapp.com/api/randomloli?apikey='+tobzkey)
bot.sendAction(msg.chat.id, 'upload_photo')
msg.reply.photo(data.result, { caption: 'lolinya kak' , replyToMessage: msg.message_id, serverDownload: false})

})

bot.on('/id', async (msg) => {
bot.sendAction(msg.chat.id, 'typing')
try {
bot.sendMessage(msg.chat.id, `👥 Chat ID : <code>${msg.chat.id}</code>\n💬 Message ID : <code>${msg.reply_to_message.message_id}</code>\n🙋‍♂️ From User ID : <code>${msg.from.id}</code>`, {replyToMessage: msg.message_id, parseMode: 'html'})
} catch { 
bot.sendMessage(msg.chat.id, `👥 Chat ID : <code>${msg.chat.id}</code>\n💬 Message ID : <code>${msg.message_id}</code>\n🙋‍♂️ From User ID : <code>${msg.from.id}</code>`, {replyToMessage: msg.message_id, parseMode: 'html'})
}
})
bot.on('/tez', async (msg) => {
dih = await bot.getMe()
const aduh = await bot.getUserProfilePhotos(msg.from.id)
console.log(aduh)
})
bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/readme 🗒🔍',
        '/about 🤖❗️'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup,replyToMessage: msg.message_id})
})
bot.on('/linkgrup', async (msg) => {
dih = await bot.getMe()
aduh = await bot.getChatMember(msg.chat.id, dih.id)
statuss = aduh.status
isBotAdmin = statuss.includes("member")
if (isBotAdmin) {
msg.reply.text('Jadikan Bot sebagai Admin!', { replyToMessage: msg.message_id })
} else {
wayoloh = await bot.exportChatInviteLink(msg.chat.id)
msg.reply.text(wayoloh, { replyToMessage: msg.message_id })
}

})
bot.on('/phlogo', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
if (!args.join(' ')) return msg.reply.text('USAGE : <pre>/phlogo [teks1|teks2]</pre>', { parseMode: 'html', replyToMessage: msg.message_id })
teks = args.join(' ').split('|')
url = `https://api.zeks.xyz/api/phlogo?text1=${teks[0]}&text2=${teks[1]}&apikey=${zeksapi}`
msg.reply.photo(url, { replyToMessage: msg.message_id })
})

bot.on('/glitch', async (msg) => {
const arg = msg.text
const args = arg.trim().split(/ +/).slice(1)
if (!args.join(' ')) return msg.reply.text('USAGE : <pre>/glitch [teks1|teks2]</pre>', { parseMode: 'html', replyToMessage: msg.message_id })
teks = args.join(' ').split('|')
url = `https://api.zeks.xyz/api/gtext?text1=${teks[0]}&text2=${teks[1]}&apikey=${zeksapi}`
msg.reply.photo(url, { replyToMessage: msg.message_id })
})

bot.on(['/bpink'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/bpink [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/logobp?text=${teksnya}&apikey=${zeksapi}`, { replyToMessage: msg.message_id })
     })
     bot.on(['/fetch'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teks = args.join(' ')
    res = await fetch(teks)
  try {
    txt = await res.json()
    msg.reply(JSON.stringify(txt, null, '\t'), { asReply: true })
  } catch (e) {
    txt = await res.text()
    msg.reply(JSON.stringify(txt, null, '\t'), { asReply: true })
 }
 })
     bot.on(['/matrix'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/matrix [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/matrix?apikey=${zeksapi}&text=${teksnya}`, { replyToMessage: msg.message_id })
     })
     bot.on(['/firetext'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/firetext [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/tfire?apikey=${zeksapi}&text=${teksnya}`, { replyToMessage: msg.message_id })
     })
     bot.on(['/text3d'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/text3d [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/text3d?apikey=${zeksapi}&text=${teksnya}`, { replyToMessage: msg.message_id })
     })
     bot.on(['/dropwater'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/dropwater [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, `https://api.zeks.xyz/api/dropwater?apikey=${zeksapi}&text=${teksnya}`, { replyToMessage: msg.message_id })
     })
     bot.on(['/aesthetic', '/estetik'], async (msg) => {
   // if (!teksnya) return bot.sendMessage(msg.chat.id, 'USAGE : <code>/dropwater [teks]</code>', { replyToMessage: msg.message_id , parseMode: 'html'})
  const { getBuffer, json } = require('./lib/buffer.js')
    hehe = await json('https://api.zeks.xyz/api/estetikpic?apikey='+zeksapi)
   // buffer = await getBuffer(hehe.result.result)
    bot.sendAction(msg.chat.id, 'upload_photo')
     bot.sendPhoto(msg.chat.id, hehe.result.result, { replyToMessage: msg.message_id })
     })
     bot.on(['/cekwarna'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    const comen = 'magick -size 1284x1284 gradient:'+args.join(' ')+'-'+args.join(' ')+' default.png'
    exec(comen, (err, stdout) => {
	if (err) return bot.sendMessage(msg.chat.id, "Kode Warna Tidak Valid", { replyToMessage: msg.message_id })
    msg.reply.photo('default.png', { replyToMessage: msg.message_id })
						})
						})
						
 bot.on(['/sky'], async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    teksnya = args.join(' ')
    if (args.length === 0) return msg.reply.text('USAGE : <pre>/sky [teks]</pre>', { parseMode: 'html', replyToMessage: msg.message_id })
    data = await json(`https://api.zeks.xyz/api/skytext?text=${teksnya}&apikey=${zeksapi}`)
    msg.reply.photo(data.result)
    })
bot.on(['/menu','/help'], async (msg) => {
   me = await bot.getMe()
    if (['group','supergroup'].includes(msg.chat.type)) return msg.reply.text(`[Contact me in PM for help!](https://t.me/${me.username}?start=help)`, { parseMode: 'Markdown', asReply: true })
bot.sendAction(msg.chat.id, 'typing')
    return bot.sendMessage
(msg.chat.id, `Created By : @Caliph71\nLink Bot : https://t.me/Caliph71_bot?start\n_______________\n\n🤖LIST FITUR BOT Caliph🤖!\n
=====[DAFTAR MENU]=====\n> /nulis [teks]\n> /nulis2 [teks]\n> /nulis3 [teks]\n> /anime [nama anime]
> /animedl [nama anime]\n> /animedl2 [nama anime]\n> /filmtrend\n> /filmdetail [angka 1-20]
> /cekresi [kurir] [resi]\n> /brainly [pertanyaan]\n> /lirik [nama artis - judul lagu]\n> /saran [teks]
> /qrcode [teks]\n> /tts [teks]\n> /pasangan [namamu] [pasanganmu]\n> /translate [teks]\n> /terjemahan [teks]
> /rangkum [teks]\n> /megumin\n> /neko\n> /waifu\n> /cewecans\n> /wallpaper\n> /slots\n> /brainly [pertanyaan]\n> /tahta [teks]\n\n========================
\n===[Sosmed Downloader]===\n> /ytmp4 [link yt]\n> /ytmp3 [link yt]\n> /twtdl [link twitter]\n> /tiktokdl [link tiktok]
> /fbdl [link video facebook]\n> /igdl [link instagram]\n> /igtv [link instagram tv]\n> /igstory [angka] [username ig]
> /igavatar [username ig]\n========================\n
Kurang paham/kurang jelas ? => /readme
Ingin tau tentang Bot Caliph ? => /about
`)
})

   bot.on('/source', async (msg) => {
   msg.reply.text('[Github Repo](https://github.com/caliph71/telegram-bot)\n[Support](https://t.me/nodejsid)', { parseMode: 'Markdown', replyToMessage: msg.message_id , webPreview : false})
   })

   bot.on(['/spamcall'], async (msg) => {
   const reply = (teks, method) => {
msg.reply.text(teks, {replyToMessage: method})
}
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
    reply('Wait..', msg.message_id)
   var data = args[0]
  data1 = await json(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})      
  data3 = await json(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
  data4 = await json(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
  data5 = await json(`https://api.zeks.xyz/api/spamcall?no=`+data+`&apikey=${zeksapi}`, {method: 'get'})
    await reply('berhasil', msg.message_id )
    })
bot.on('/play', async (msg) => {
        const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: msg.message_id})
        let query = args.join(' ')
        let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
  viewers = h2k(vid.views)
  url = `https://youtu.be/${vid.videoId}`
  msg.reply.photo(vid.thumbnail, {caption : `Lagu Ditemukan\n\nJudul : [${vid.title}](${url})\nDurasi ${vid.duration.timestamp}\nUpload : ${vid.ago}\nPenonton : ${viewers}\nChannel : [${vid.author.name}](${vid.author.url})\n\n*Tunggu Sebentar, Lagu Sedang Dikirim!*`, parseMode: 'Markdown'})
        if(ytdl.validateURL(url)){
      audio_file = await './ytdl/' + vid.title + '.mp3';
      await ytdl(url, {quality: "highestaudio", filter: "audioonly"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
       console.log(info)
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await bot.sendAudio(msg.chat.id, audio_file, {replyToMessage:msg.message_id, fileName: judul+'.mp3'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await msg.reply.text("Error | Lagu tidak ditemukan...");
    }
    })
bot.on('/play2', async (msg) => {
        const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: msg.message_id})
    let server = (args[1] || 'id4').toLowerCase()
        let query = args.join(' ')
        let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
  viewers = h2k(vid.views)
  url = `https://youtu.be/${vid.videoId}`
 // msg.reply.photo(vid.thumbnail, {caption : `Lagu Ditemukan\n\nJudul : [${vid.title}](${url})\nDurasi ${vid.duration.timestamp}\nUpload : ${vid.ago}\nPenonton : ${viewers}\nChannel : [${vid.author.name}](${vid.author.url})\n\n*Tunggu Sebentar, Lagu Sedang Dikirim!*`, parseMode: 'Markdown'})
 let { dl_link, thumb, title, filesize, filesizeF} = await yta(url, servers.includes(server) ? server : 'id4')
 bitlu = await bitly(dl_link)
 msg.reply.photo(thumb, { caption: `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Link* : ${bitlu}`, parseMode : 'Markdown', asReply: true })
 msg.reply.audio(await getBuffer(bitlu), { fileName: title+'.mp3', asReply: true })
    })
bot.on('/button', async (msg) => {
menggokil = bot.inlineButton('Hello World', {url : 'https://google.com'})
msg.reply.text('mengoke', {menggokil})
})
bot.on(['/readme'], async (msg) => {
bot.sendAction(msg.chat.id, 'typing')
Markup = {replyToMessage: msg.message_id}
return bot.sendMessage
(msg.chat.id, `_______________\n\n🤖INFO MENU🤖!\n\n===[Info Menu Fitur Caliph]===\n
/nulis = Untuk menulis tanpa membutuhkan pulpen atau kertas \n(Contoh Perintah : /nulis Halo nama saya ucup < sama dengan /nulis2 dan /nulis3)\n
/anime = Untuk mencari info seputar anime, jumlah episode, sinopsis, rating, dan lainnya \n(Contoh Perintah : /anime death note)\n
/cekresi = Untuk mengecek resi atau tracking paket lewat kurir dan resi yang di tulis \n(Contoh Perintah : /cekresi jne 4105xxxxxxxx320)\n
/brainly = Untuk mencari jawaban dari brainly \n(Contoh Perintah : /brainly kenapa bumi bulat)\n
/tts = Untuk merubah teks menjadi audio, suara by mbak mbak gugel :v \n(Contoh Perintah : /tts anjay mabar)\n
/lirik = Untuk mencari lirik musik \n(Contoh Perintah : /lirik vierra seandainya)\n
/megumin = Untuk mencari gambar megumin secara random atau acak \n(Contoh Perintah : /megumin)\n
/neko = Untuk mencari gambar neko atau kucing kawai secara random atau acak \n(Contoh Perintah : /neko)\n
/waifu = Untuk mencari gambar waifu secara random atau acak \n(Contoh Perintah : /waifu)\n
/wallpaper = Untuk mencari gambar wallpaper kece secara random atau acak \n(Contoh Perintah : /wallpaper)\n
/animedl = Untuk mencari link download anime dengan berbagai resolusi \n(Contoh Perintah : /animedl death note < Sama dengan /animedl2)\n
/pasangan = Untuk mengukur dan mencari sisi positif/negatif kamu dengan pasanganmu \n(Contoh Perintah : /pasangan udin aurel)\n
/translate = Untuk menerjemahkan dari bahasa inggris ke bahasa indonesia\n(Contoh Perintah : /translate you so beautiful)\n
/terjemahan = Untuk menerjemahkan dari bahasa indonesia ke bahasa inggris\n(Contoh Perintah : /terjemahan kamu sangat cantik)\n
/rangkum = Untuk merangkum teks atau memperpendek teks, \n(Contoh Perintah : /rangkum Penelitian tentang sejarah terbatas pada penelitian...........dst)\n
/qrcode = Untuk merubah teks atau link yang kamu tulis menjadi sebuah kode QR \n(Contoh Perintah : /qrcode https://google.com)\n
/filmtrend = Untuk melihat film trending di minggu ini \n(Contoh Perintah : /filmtrend)\n
/filmdetail = Untuk melihat detail filmtrend lebih lengkap \n(Contoh Perintah : /filmdetail 1)\n
/slots = Untuk bermain game slots casino \n(Contoh Perintah : /slots)\n
/cewecans = Untuk gacha gambar ciwi ciwi cantik :v \n(Contoh Perintah : /cewecans)\n
/saran = Untuk mengirim saran ke dev (@caliph71) lewat bot! \n(Contoh Perintah : /saran Bang saran tambahin fitur hack satelit nasa)\n

===[Sosmed Downloader]===\n
/ytmp4 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp4 https://youtu.be/dQw4w9WgXcQ)\n
/ytmp3 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp3 https://youtu.be/dQw4w9WgXcQ)\n
/tiktokdl = Untuk mendownload video dari tiktok tanpa watermark \n(Contoh Perintah : /tiktokdl https://www.tiktok.com/@mrhecka/video/6888202589897248001)\n
/fbdl = Untuk mendownload video dari facebook \n(Contoh Perintah : /fbdl https://www.facebook.com/tahilalats/videos/438923400430514)\n
/twtdl = Untuk mendownload video dari twitter \n(Contoh : /twtdl https://twitter.com/i/status/1338407494339624962)\n
/igdl = Untuk mendownload video dan foto di instagram \n(Contoh : /igdl https://www.instagram.com/p/CJGXxSinuld/)\n
/igtv = Untuk mendownload video igtv di instagram \n(Contoh : /igtv https://www.instagram.com/p/CBgc_ZJlVUN/)\n
/igstory = Untuk mendownload video ig story di instagram sesuai angka urutan yang diinput \n(Contoh : /igstory 3 anone14_)\n
/igavatar = Untuk mendownload avatar profil di instagram \n(Contoh : /igavatar anone14_)\n
=====================\n
Nantikan fitur-fitur unik Caliph lainnya, stay tuned terus ya 🦾🤖\n
_______________
`, Markup)

})


bot.on(['/about'], async (msg) => {
await bot.sendAction(msg.chat.id, 'typing')
return bot.sendMessage
(msg.chat.id, 
`
=====[🤖Tentang❗️]=====\n
> Tolong bot nya jangan di spam😣
> Cintai bot nya seperti kamu mencintai dia🤗
> Semua perintah yang membutuhkan teks tidak perlu menggunakan tanda kurung kotak => [ ]👈
> Masih bingung dengan fitur Caliph🤨? gunakan perintah /readme
> Bot masih dalam tahap pengembangan🔧
> Terima kasih sudah menggunakan Bot Caliph😍

> Beritahu pembuat bot jika saya mati atau jika kamu menemukan bug dan perintah yang malfungsi => @caliph71 (Atau lapor menggunakan /saran [text])

> Info Sosial Media :
> Instagram : https://www.instagram.com/Caliph91_
> Support BOT CALIPH Dengan Cara Donasi :
> https://saweria.co/Caliph123
> Pulsa => 081215199447 | 085642337380

> BOT Caliph Dibuat Oleh :
> @caliph71\n
================
`)
})
bot.on(/^\/ssweb ([\s\S]+)/, async (msg, args) => {
        let argz = args.match[1]
        if (!isUrl(argz)) return msg.reply.text(mess.errlink, { asReply: true })
        try {
        await bot.sendMessage(msg.chat.id, mess.wait, {replyToMessage: msg.message_id})
       await bot.sendDocument(msg.chat.id, `https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${argz}&quality=100&full_page=true`, {replyToMessage: msg.message_id})
       } catch {
       await bot.sendDocument(msg.chat.id, `https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${argz}&quality=100`, {replyToMessage: msg.message_id})
       }
    })
    
// require disini!

require('./nulis.js')(bot)
require('./nulis2.js')(bot)
require('./nulis3.js')(bot)
require('./megumin.js')(bot)
require('./neko.js')(bot)
require('./waifu.js')(bot)
//require('./anime.js')(bot)
require('./ytmp4.js')(bot)
require('./ytmp3.js')(bot)
require('./cekresi.js')(bot)
require('./brainly.js')(bot)
require('./lirik.js')(bot)
require('./tiktokdl.js')(bot)
require('./wallpaper.js')(bot)
//require('./animedl.js')(bot)
require('./animedl2.js')(bot)
require('./pasangan.js')(bot)
require('./fbdl.js')(bot)
require('./translate.js')(bot)
require('./terjemahan.js')(bot)
require('./rangkum.js')(bot)
require('./twtdl.js')(bot)
require('./qrcode.js')(bot)
require('./slots.js')(bot)
require('./filmtrend.js')(bot)
require('./filmtrenddetail.js')(bot)
require('./cewecans.js')(bot)
require('./igdl.js')(bot)
require('./igtv.js')(bot)
require('./igstory.js')(bot)
require('./igavatar.js')(bot)
require('./tts.js')(bot)
require('./saran.js')(bot)
//require('./monitoring.js')(bot)
require('./logs.js')(bot)
require('./tahta.js')(bot)
require('./sendprivate.js')(bot)
require('./shortlink.js')(bot)
require('./barcode.js')(bot)
require('./ttp.js')(bot)
require('./pinterest.js')(bot)
require('./speed.js')(bot)
require('./quotes.js')(bot)
require('./tod.js')(bot)
require('./exec.js')(bot)
require('./eval.js')(bot)
require('./vhtear.js')(bot)
require('./mhankbarbar.js')(bot)
require('./zeks.js')(bot)
// require disini!
bot.start()






