const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});


const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before trying this again. - " + message.author);
    } else {
        message.reply(`Almost! It's coming out March 2020, check out the trailer and pre-order the game here: https://store.steampowered.com/app/546560/HalfLife_Alyx/`)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 10000);
    }
}
