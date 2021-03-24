const TeleBot = require('telebot')
var translate = require('translation-google');
const delay = require('delay')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})




module.exports = bot => {
    bot.on(/^\/translate ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        var data = arg.split('/')
        translate(data[1], {tld: 'cn', to: data[0]}).then(res => {
            return bot.sendMessage(msg.from.id, `${res.text}`, {replyToMessage: msg.message_id});
        }).catch(err => {
            return bot.sendMessage(msg.from.id, `ERROR | ${err}`);
        });
    }) 
}



