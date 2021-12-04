const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'size',
    showHelp: false,
    utilisation: '{prefix}size',

    execute(client, message, args) {
        let user = message.mentions.users.first() || message.author;
        let random = Math.floor(Math.random() * 10) + 1; // Get a random number
        let size = "";

   for(let i = 0; i < random; i++){
      size += "=";
   }
   
   let pp = "8" + size + "D";
   let description = user.tag + " ppsize: " + pp;

   const embed = new MessageEmbed();

   embed.setColor('black');
   embed.setAuthor(user.tag, user.displayAvatarURL())
   embed.setDescription(description)
   embed.setTimestamp();
   embed.setFooter(`made by rxzvd❤️`, message.author.avatarURL({ dynamic: true }));

   message.channel.send({ embeds: [embed] });

    }
};