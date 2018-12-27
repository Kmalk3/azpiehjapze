const Discord = require('discord.js'),
    client = new Discord.client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("id room");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** welcome ** `), 4000)        
}


client.login(process.env.TOKEN);