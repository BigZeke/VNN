const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: `${config.dsn}`
});



exports.run = (client, message, args) => {
    message.reply(`Nudes denied. <\:vnnCat2\:468562233174261766> `)
}