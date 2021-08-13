const ms = require("ms")

module.exports = {
    commands: ['ping'], // You Can Keep Any Name
    description: 'Zie de Ping', //Optional
    callback: (message, args) => {
        message.channel.send(`**Ping: 4ms** - Deze BOT word gehost op een Custom Hosting van NGRoleplay, de MS met onze servers naar de BOT is momenteel **4ms**`)
    }
}