const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let sayEmbedHelp = new Discord.MessageEmbed()
      .setTitle("I ain't giving you no god damn help")
      .setDescription("Coming Soon")
message.channel.send({embed: sayEmbedHelp});
}

module.exports.help = {
  name:"help"
}