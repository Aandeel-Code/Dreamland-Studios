const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons-v13");

module.exports.run = async (bot, message, args) => {
      let sayEmbed = new Discord.MessageEmbed()
      .setTitle("Test Embed")
      .setDescription("This is a test")
      
      let test1 = new MessageButton()
      .setStyle("url")
      .setLabel("Test Button")
      .setURL("https://www.youtube.com/watch?v=KwG0sd8PkYA&ab_channel=Superwacc")



message.channel.send({embed: sayEmbed, component: test1});
}

module.exports.help = {
  name:"test"
}