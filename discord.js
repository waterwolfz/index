const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

if (msg.content === 'ping') {

msg.reply('pong');


}

});

client.login('MTM5Mjg0NzU5MzIyNjEwOTAxOQ.G2NU7d.Gm_R_WTAw5v1hEbHFfLy3jALr0-kszuAaJ7le8');