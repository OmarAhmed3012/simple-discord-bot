require('dotenv').config();

const time = require("moment");

const { Client, Message, CategoryChannel } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) => {

    //to control bot messages
    if(message.author.bot) return;
    

    //simple commands

    if(message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        
        if( CMD_NAME === 'kick' ) {
            if(args.length === 0) return message.reply('Please provide an ID');
            const member = message.guild.members.cache.get(args[0]);

            if(member) {
                member.kick();
            } else {
                message.channel.send('That member Not found');
            }

        } 
        if( CMD_NAME === 'ban' ) {
            if(args.length === 0) return message.reply('Please provide an ID');
            const member = message.guild.members.cache.get(args[0]);

            if(member) {
                member.ban();
            } else {
                message.channel.send('That member Not found');
            }

        }
    }



    //simple responses
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