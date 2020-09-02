require('dotenv').config();

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

    

    if(message.content === 'hello') {
        message.reply('hello there!');
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)