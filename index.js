require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: 'gmpsankalpa.xyz',
        type: ActivityType.Watching,
        url: 'https://gmpsankalpa.xyz',
    },
    {
        name: 'Sanka YT',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/channel/UCi_iSCxhm43xpT4TnlWorwQ',
    },
    {
        name: 'SANKA CREW',
        type: ActivityType.Watching,
        url: 'https://discord.gg/nBVkdvbfAF',
    },
]

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 5000);
});

client.on('messageCreate', (message) => {
    if (message.author.bot){
        return;
    }
    // if(message.content === 'hello');{
    //     message.reply('Hey😊!');
    // }
});

client.login(process.env.TOKEN);