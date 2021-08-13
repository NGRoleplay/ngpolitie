const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['boei', 'handboei'], // You Can Keep Any Name
    description: 'Handboei een persoon!', // Optinal
    permissions: 'MANAGE_CHANNELS', // You Can Keep Any Permission
    permissionError: '**Permissies** - Je hebt niet de juiste permissies om iemand te handboeien!', 
    expectedArgs: '!boei @User', // Optinal

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('**FOUT!** - Geen gebruiker opgegeven om in de handboeien te slaan!')
        member.roles.add('873712988299878441') // Add Mute Role to User
        if(member.roles.cache.has('873712988299878441')) return message.reply('**FOUT!** - Deze persoon is al in handboeien!') // If User Is Already Muted.

        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Handboeien')
        .setDescription(`<@${member.user.id}> is succesvol in handboeien geslagen!`)
        .addField('Geboeit door:', message.author)
        .setColor('GREEN')
        message.channel.send(embed)
    }
}