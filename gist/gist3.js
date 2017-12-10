const {
  postText,
  postMessage
} = require("../utils/webhook")

const detect = require("../utils/detect")

postText(":heart: :robot_face: Hello stupid beautiful world :sunny:")

async function slackBot() {
  const bot = await require("../utils/slackbot")()
  
  bot.on("message", async event => {
    const { type, bot_id, user, channel, ts } = event

    if (type === "message" && !bot_id) {
      const { text } = event

      const detectionResult = await detect(text)

      const detection = detectionResult.results[0]

      const { language_code, language_name, probability } = detection

      console.log(probability)

      if (language_code !== "en" && probability > 10) {
        bot.postMessage(channel, ":flag-gb: English plz :flag-gb:", {
          attachments: [{
            text: `<@${user}> it seems that you have slid into the ${language_name} language :cop: :flag-${language_code}:`,
            color: "danger"
          }]
        }).catch(e => { console.log(e) })
      }
    }
  })
}

slackBot()
