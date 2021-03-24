const { spawn, exec } = require('child_process')
const fs = require('fs')
const { stdout } = require('process')
const TeleBot = require('telebot')
const imgbb = require('imgbb-uploader')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
const { bitly } = require('./lib/buffer')

module.exports = bot => {
    bot.on('/nulis3', async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    let tulisan = args.join(' ')
    if (!tulisan) return msg.reply.text('USAGE : <pre>/nulis3 [teks]</pre>', { parseMode : 'html' , replyToMessage: msg.message_id })
    await bot.sendMessage(msg.chat.id, `Sabar ngab lagi nulis....`)
    const splitText = await tulisan.replace(/(\S+\s*){1,8}/g, '$&\n')
    const fixHeight = await splitText.split('\n').slice(0, 31).join('\n')
    await spawn('convert', [
        './nulis/sebelum.jpg',
        '-font',
        './nulis/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '27',
        '-interline-spacing',
        '-6',
        '-annotate',
        '+140+148',
        fixHeight,
        `./nulis/setelah${msg.chat.id}.jpg`
    ])
    .on('error', async () => bot.sendMessage(msg.chat.id, 'Error ngab, tolong hubungi dev @caliph71 !'))
    .on('exit', async () => {
    await bot.sendPhoto(msg.chat.id, `./nulis/setelah${msg.chat.id}.jpg`, { caption: 'Bot Sukses Nulis️' })
    await fs.unlinkSync(`./nulis/setelah${msg.chat.id}.jpg`)
        })

    })
    bot.on('/nulis4', async (msg) => {
    const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    console.log("writing...")
      teks = args.join` `
      if (!teks) return msg.reply.text('USAGE : <pre>/nulis4 [teks]</pre>', { parseMode : 'html' , replyToMessage: msg.message_id })
      split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
            "src/kertas/magernulis2.jpg",
            "-font",
            "font/IndieFlower.ttf",
            "-size",
            "700x960",
            "-pointsize",
            "18",
            "-interline-spacing",
            "3",
            "-annotate",
            "+170+222",
            fixedHeight,
            "media/magernulis2.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", async () =>
         {
         console.log("done")
         await imgbb('2685f71965fa6c56702e9e70644ff0ad', 'media/magernulis2.jpg')
                .then(async (data) => {
                console.log(data)
            buffer = fs.readFileSync("media/magernulis2.jpg") // can send mp3, mp4, & ogg -- but for mp3 files the mimetype must be set to ogg
            link = await bitly(data.image.url)
            msg.reply.photo(buffer, { caption: link})
            })
         })
         })
    
} 





