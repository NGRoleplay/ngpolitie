const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['geefboete', 'boete'], // You Can Keep Any Name
    description: 'Geef iemand een boete!', // Optinal
    permissions: 'SEND_MESSAGES', // You Can Keep Any Permission
    permissionError: '**Permissies** - Je hebt niet de juiste permissies om iemand een boete te geven/uit te schrijven!', 
    expectedArgs: '!boete @User', // Optinal

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('**Gebruik:** ``!boete (@Persoon) (Bedrag | bijv. 1000) (Het Strafbare Feit/Reden)``')
        const boetebedrag = args[1]
        if(!boetebedrag) return message.reply('**Gebruik:** ``!boete (@Persoon) (Bedrag | bijv. 1000) (Het Strafbare Feit/Reden)``')
        const strafbarefeit = args[2]
        if(!strafbarefeit) return message.reply('**Gebruik:** ``!boete (@Persoon) (Bedrag | bijv. 1000) (Het Strafbare Feit/Reden)``')
        member.roles.add('873712915906199582') // Add Mute Role to User
        if(member.roles.cache.has('873712915906199582')) return message.reply('**Boetes** - Deze Persoon heeft nog een Boete open staan! Vraag deze persoon om deze boete te betalen! Doet deze persoon het niet kan er een Celstraf of een Taakstraf volgen!') // If User Is Already Muted.

        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Boetes')
        .setDescription(`<@${member.user.id}> je hebt een Boete gekregen! Je hebt nu 1 open staande boete erbij. Je kan hem betalen door !pay @Brownie.Cake#3952 (bedrag) te doen! Bekijk hier onder de verdere informatie!\n\n__**Informatie:**__\n**Agent:** ${message.author}\n**Bedrag:** €${args[1]},-\n**Betalings Tijd:** Maximaal 2 weken\n**Strafbare Feit(en):** ${args.slice(2).join(" ")}\n\nJe bent verplicht deze boete te betalen! Je hebt een Rol gekregen waaraan je kan zien of de Boete nog betaald moet worden! Heb je moeite met betalen? Neem contact op met een Agent!`)
        .setFooter('NGRoleplay Justitie - Boetes')
        .setTimestamp()
        .setColor('ORANGE')
        message.channel.send(embed)
    }
}

//!straf @duck ttttt tttt tttt tttt 