const config = require("../config.json");
const Sentry = require('@sentry/node');
Sentry.init({
	dsn: `${config.dsn}`
});


module.exports = (client, member) => {
	//client.channels.get("627676119201742848").send(`:name_badge: \`${member.user.oldUser}\` has changed their name to \`${member.user.newUser}\``)
	//console.log(`:name_badge: \`${member.user.oldUser}\` has changed their name to \`${member.user.newUser}\``)
}