const { MessageEmbed, Guild } = require("discord.js")

module.exports = {
    commands: ['geefstrafblad', 'strafblad'], // You Can Keep Any Name
    description: 'Geef iemand een strafblad!', // Optinal
    permissions: 'MANAGE_CHANNELS', // You Can Keep Any Permission
    permissionError: '**Permissies** - Je hebt niet de juiste permissies om iemand een Strafblad te geven!', 
    expectedArgs: '!strafblad @User', // Optinal

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('**FOUT!** - Geen gebruiker opgegeven om een Strafblad te geven!')
        member.roles.add('833760232626716735') // Add Mute Role to User
        if(member.roles.cache.has('833760232626716735')) return message.reply('**FOUT!** - Deze persoon heeft al een Strafblad!') // If User Is Already Muted.

        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Strafblad')
        .setDescription(`<@${member.user.id}> heeft succesvol een Strafblad gekregen!\n\n__**Informatie:**__\n**Gegeven door:** ${message.author}\n**Reden:** ${args.slice(1).join(" ")}\n**Burger:** <@${member.user.id}>\n**Datum:** Niet bekend! - Zie onder in dit bericht`)
        .setFooter(`NGRoleplay Justitie - Stafblad`)
        .setTimestamp()
        .setColor('RED')
        message.channel.send(embed)
    }
}