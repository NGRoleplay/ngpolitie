const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['veroordeel', 'straf'], // You Can Keep Any Name
    description: 'Veroordeel Iemand', // Optinal
    permissions: 'SEND_MESSAGES', // You Can Keep Any Permission
    permissionError: '**Permissies** - Je hebt niet de juiste permissies om iemand te veroordelen!', 
    expectedArgs: '!straf @User', // Optinal

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('**FOUT!** - Geen gebruiker opgegeven!')

        const embed = new MessageEmbed()
        .setTitle('NGRoleplay Justitie - Veroordeling')
        .setDescription(`<@${member.user.id}> is succesvol veroordeelt bekijk hieronder de bijhorende Informatie!\n\n__**Informatie:**__\n**Verdachte/Crimineel:** <@${member.user.id}>\n**Type Straf:** ${args[1]}\n**Tijd:** ${args[2]} Maanden\n**Reden:** ${args.slice(3).join(" ")}`)
        .addField('Veroordeelt door:', message.author)
        .setFooter('NGRoleplay Justitie - RechtSysteem')
        .setTimestamp()
        .setColor('ORANGE')
        message.channel.send(embed)
    }
}

//!straf @duck ttttt tttt tttt tttt