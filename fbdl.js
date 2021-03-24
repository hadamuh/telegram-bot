const TeleBot = require('telebot');
const delay = require('delay');
const fbdl = require('fbdl-core')
const TinyURL = require('tinyurl')


const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/fbdl ([\s\S]+)/, async (msg, args) => {
    let arg = args.match[1]
    msg.reply.text(mess.wait, { asReply: true })
    fbdl.getInfo(arg)
    .then((response) => {
    let video = response.rawVideo
    TinyURL.shorten(`${video}`, function(res) {
      
        msg.reply.text(`✅BERHASIL!✅\n\nJudul : ${response.title}\n\nDeskripsi : ${response.description}\n\nDurasi : ${response.duration} Menit:Detik\n\nGenre : ${response.genre}\n\nDiupload pada tanggal : ${response.publishedAt}\n\nKonten Dewasa ? : ${response.nsfw ? 'Iya' : 'Tidak'}\n\nKualitas : ${response.quality}\n\nBesar Video KB/MB : ${response.size}\n\nTotal komentar : ${response.comments}\n\nDishare sebanyak : ${response.shares} kali\n\nLink Download : [Klik Disini](${video})`, { parseMode: 'Markdown', asReply: true })
        console.log(response)
        
                })

            }).catch((err) => {
            msg.reply.text(mess.errlink, { asReply: true })
        })

    })

}


