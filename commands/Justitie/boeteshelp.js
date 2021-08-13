const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['boetehelp', 'helpboete'], // You Can Keep Any Name
    description: 'Boete help menu', // Optinal
    expectedArgs: '!boete @User', // Optinal

    callback: (message, args) => {

        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Boete Help Menu')
        .setDescription('Je kan iemand een Boete geven door de volgende commando te typen:\n**Gebruik:** ``!boete (@Persoon) (Bedrag | bijv. 1000) (Het Strafbare Feit/Reden)``')
        .setFooter('NGRoleplay Justitie - Boete Systeem')
        .setTimestamp()
        .setColor('YELLOW')
        message.channel.send(embed)
    }
}

//!straf @duck ttttt tttt tttt tttt 