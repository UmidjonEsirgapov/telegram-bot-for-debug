const TelegramBot = require('node-telegram-bot-api');
const token = '1047064801:AAF0ByggA-sZzsFCyaeGXJKIGOpaJ7bjxrU';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
    const chatId = msg.chat.id;

    if (msg.text === 'Savol yo\'llash') {
        bot.sendMessage(chatId, 'Savolingizni yuboring')

        bot.on('message', msg => {
            bot.forwardMessage(chatId, msg.from.id, msg.message_id)
                // console.log(debug(msg)
        })
    } else if (msg.text === 'yopish') {
        bot.sendMessage(chatId, 'Tugmalar yopildi', {
            reply_markup: {
                remove_keyboard: true
            }
        })
    } else {
        bot.sendMessage(chatId, 'tugmalar', {
            reply_markup: {
                keyboard: [
                    [{
                        text: 'Joylashuvni yuborish',
                        request_location: true
                    }],
                    ['Savol yo\'llash', 'yopish'],
                    [{
                        text: 'raqamni yuborish',
                        request_contact: true
                    }]
                ]
            }
        })
    }

})

function debug(obj = {}) {
    return JSON.stringify(obj, null, 4)
}