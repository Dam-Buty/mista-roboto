const http = require('http')
const Router = require('node-simple-router')

const throwDice = (sides = 6, number = 1) => Array(number).fill().map(() => Math.floor((Math.random() * sides) + 1)).reduce((a, b) => (a + b), 0)

async function slackBot() {
  const bot = await require("../utils/slackbot")()
  const userId = "U8CCTB09Y"

  bot.postMessage("U8CCTB09Y", "Meow", {
    attachments: [{
      text: "Some display snazz",
      color: "good",
      fields: [{
        title: "Awesomity",
        value: "108%"
      }, {
        title: "Modesty",
        value: "NaN"
      }]
    }, {
      text: "Some interactivity is good",
      color: "0000BB",
      callback_id: "interaction",
      actions: [{
        name: "random",
        text: "Roll a random dice",
        type: "button",
        value: "random"
      }, {
        name: "choice",
        text: "Choose a dice",
        type: "select",
        options: [{
          text: "6 sided",
          value: "0"
        }, {
          text: "3 * 6 sided",
          value: "1"
        }, {
          text: "20 sided",
          value: "2"
        }]
      }]
    }]
  })

  const router = new Router()
  router.post("/interactive", async (req, res) => {
    const { post } = req
    const payload = JSON.parse(post.payload)
    const { actions, channel, original_message } = payload

    const action = actions[0]

    const dices = [
      throwDice(),
      throwDice(6, 3),
      throwDice(20)
    ]

    let number, sides, result

    if (action.type === "button") {
      number = throwDice(6)
      sides = throwDice(20)
      result = throwDice(sides, number)
    }
    else if (action.type === "select") {
      const option = action.selected_options[0].value

      switch(option) {
        case "0":
          number = 1
          sides = 6
          break;
        case "1":
          number = 3
          sides = 6
          break;
        case "2":
          number = 1
          sides = 20
      }

      result = throwDice(sides, number)
    }

    const channelId = channel.id

    const newAttachment = {
      text: `Threw *${number}* *${sides}*-sided dices and got : *${result}*`,
      color: "good",
      mrkdwn_in: ["text"]
    }

    await bot.updateMessage(channelId, original_message.ts, original_message.text, {
      ...original_message,
      attachments: [newAttachment]
    })

    res.end()
  })
  
  const server = http.createServer(router)
  server.listen(8080)
  console.log("👌 HTTP server listening on port 8090 👌")
}

slackBot()