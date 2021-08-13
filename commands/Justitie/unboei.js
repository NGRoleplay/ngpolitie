const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['unboei', 'uithandboeien'], // You Can Keep ANy Name
    description: 'Haal een persoon uit de handboeien!', // Optinal
    permissions: '', // You Can Keep Any Permission
    permissionError: '**Permissies** - Je hebt niet de juiste permissies om een persoon uit de handboeien te halen!',
    expectedArgs: '!unboei @User', // Optinal

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('**FOUT!** - Geef een persoon op om uit de handboeien te halen!')
        member.roles.remove('873712988299878441') // Removes Mute Role to User
        if(!member.roles.cache.has('873712988299878441')) return message.reply('**FOUT!** - Deze persoon zit niet in handboeien!') // If User Is Already Unmuted.  
        
        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Handboeien')
        .setDescription(`<@${member.user.id}> is succesvol uit de handboeien! Wegens: ${args.slice(1).join(" ")}`)
        .addField('Uit handboeien gehaald door:', message.author)
        .setColor('ORANGE')
        message.channel.send(embed)
    }
}