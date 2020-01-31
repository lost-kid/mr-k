const Discord = require('discord.js');
const { TOKEN, owner_id, mod_ids, dnsStr, prefix } = require('./assets/config.json');
const yt = require('ytdl-core');

const Sentry = require('@sentry/node');
Sentry.init({ dsn: dnsStr });

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //Do stuff ¯\(º_o)/¯
});

client.login(TOKEN);