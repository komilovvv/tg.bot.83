import TelegramBot from "node-telegram-bot-api";


const TOKEN = "8399839873:AAGJqzmghhsLjLX6alIVu-LxJ_X5LyO8O7g";

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on("massage", function (msg){
    const chatId = msg.chat.id;
    const text = msg.text;

    bot.sendMessage (chatId,   `salom ->  ${text}`);

    console.log(msg);

});

console.log("bot ishga tushdi...")