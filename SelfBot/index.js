const { Client } = require('discord.js-selfbot-v13');
const {MessageEmbed} = require('discord.js-selfbot-v13')
const client = new Client({
    checkUpdate: false,
});

let config = require("./config.json")

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on("message", msg =>{ 
    if (msg.author.id == config.id){ 
    if (msg.content == "!help"){
        msg.channel.send(`## Natrix SelfBot Spammer\n\nYour message is : ${config.message}\nUse !spam to launch spammer`)
    }

    if (msg.content == "!spam"){
        msg.channel.send(config.message)
    }  
}
})
client.on("message", msg => {
    if(msg.content == config.message){
        msg.reply(config.message)
        console.log("+1 New Message !")
    }
})
client.on("message", msg => {
    if(msg.content == config.message){
        msg.reply(config.message)
        console.log("+1 New Message !")
    }
})
client.on("message", msg => {
    if(msg.content == config.message){
        msg.reply(config.message)
        console.log("+1 New Message !")
    }
})
client.on("message", msg => {
    if(msg.content == config.message){
        msg.reply(config.message)
        console.log("+1 New Message !")
    }
})
client.on("message", msg => {
    if(msg.content == config.message){
        msg.reply(config.message)
        console.log("+1 New Message !")
    }
})

client.login(config.token);
