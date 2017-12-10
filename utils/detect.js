const request = require("request-promise-native")

const apiKey = "xxxx"

module.exports = query => request({
  uri: "http://apilayer.net/api/detect",
  qs: {
    access_key: apiKey,
    query
  },
  json: true
}).catch(e => { console.error(e) })
