const SlackBot = require("slackbots");

module.exports = () => new Promise((resolve, reject) => {
  const bot = new SlackBot({
    token: "xoxb-xxxxxxx",
    name: "Huggy Boy"
  })

  bot.on('start', () => {
    resolve(bot)
  })
})
