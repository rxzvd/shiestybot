const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    showHelp: false,
    utilisation: '{prefix}snipe',

    execute(client, message, args) {
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.reply({content: 'There is nothing to snipe :('})
        const embed = new MessageEmbed();

        embed.setColor('black');
        embed.setAuthor(msg.author)
        embed.setDescription(msg.content)
        if (msg.image) embed
        embed.setImage(msg.image)
        embed.setTimestamp();
        embed.setFooter(`made by rxzvd❤️`, message.author.avatarURL({ dynamic: true }));

        message.delete
        message.channel.send({ embeds: [embed] });
        
    },
};