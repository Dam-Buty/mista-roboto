
const request = require("request-promise-native")

const defaultWebhook = 'https://hooks.slack.com/services/xxxxxxx'

const options = {
  method: "POST",
  json: true
}

function postText(message, webhook = defaultWebhook) {
  return request({
    ...options,
    uri: webhook,
    body: { text: message }
  })
  .catch(e => { console.error(e) })
}

function postMessage(message, webhook = defaultWebhook) {
  return request({
    ...options,
    uri: webhook,
    body: message
  })
  .catch(e => { console.error(e) })
}

module.exports = {
  postText,
  postMessage
}
