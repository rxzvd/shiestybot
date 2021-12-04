const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    showHelp: false,
    utilisation: '{prefix}avatar',

    execute(client, message, args) {
        const member = message.mentions.members.first() || message.member;
        
        const embed = new MessageEmbed();

        embed.setColor('black');
        embed.setTitle(`${member.user.tag}'s avatar`)
        embed.setImage(member.user.displayAvatarURL({ dynamic: true, size: 512}))
        embed.setTimestamp();
        embed.setFooter(`made by rxzvd❤️`, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
        
    },
};