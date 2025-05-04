const { Client, GatewayIntentBits } = require('discord.js');

class MyChoice {
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildVoiceStates,
            ],
        });
    }
}

module.exports = new MyChoice();
