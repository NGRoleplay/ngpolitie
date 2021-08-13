const Discord = require('discord.js');
const client = new Discord.Client();

const loadCommands = require('./commands/load-commands');


client.once('ready', () => {
    console.log('Ready.')
    
    setInterval(() => {
        const statuses = [
            `NGRoleplay`,
            `Justitie`,
            `Politie`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    loadCommands(client)
})

client.login(process.env.token); 