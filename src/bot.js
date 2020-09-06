require('dotenv').config();

const time = require("moment");

const { Client, Message, CategoryChannel } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message',async (message) => {

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

            if (member) {
                member
                  .kick()
                  .then((member) => message.channel.send(`${member} was kicked.`))
                  .catch((err) => message.channel.send('I cannot kick that user :('));
            } else {
                message.channel.send('That member Not found');
            }

        } 
        if( CMD_NAME === 'ban' ) {
            if(args.length === 0) return message.reply('Please provide an ID');
            const member = message.guild.members.cache.get(args[0]);

            try {
                const user = await message.guild.members.ban(args[0]);
                message.channel.send('User was banned successfully');
              } catch (err) {
                console.log(err);
                message.channel.send('An error occured. Either I do not have permissions or the user was not found');
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
    else if (message.content.toLowerCase() === 'how are you?') {
        message.reply("I am Fine, nice to have you " + message.author.username)
    }
    else if (message.content.toLowerCase() === 'thanks') {
        message.reply("AnyTime <3 " + message.author.username)
    }
    else if (message.content.toLowerCase().match("time|what time is it")) {
        message.reply("It is " + time().format('MMM DD h:mm A'));
    }
})



function arraygr (list) {
    return list[Math.floor((Math.random()*list.length))];
} 

client.login(process.env.DISCORDJS_BOT_TOKEN)