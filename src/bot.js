require('dotenv').config();

const time = require("moment");

const { Client, Message } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) => {

    //to control bot messages
    if(message.author.bot) return;
    
    //console.log(`${message.author.tag} : ${message.content}`)

    

    else if (message.content.toLowerCase().match("(^hello|^hi|^yo|^sup|^anyone on)")) {
        var a = [
            "Hi",
            "Hola",
            "Hello",
            "Meep"
        ];
        message.reply(arraygr(a));
    }
    else if (message.content.toLowerCase() === 'online?') {
        message.reply("Yup, hay " + message.author.username)
    }
    else if (message.content.toLowerCase().match("time|what time is it")) {
        message.reply("It is " + time().format('MMM DD h:mm A'));
    }
})



function arraygr (list) {
    return list[Math.floor((Math.random()*list.length))];
} 

client.login(process.env.DISCORDJS_BOT_TOKEN)