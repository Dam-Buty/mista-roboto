const http = require('http')
const Router = require('node-simple-router')

const {
  postText,
  postMessage
} = require("../utils/webhook")

postText(":heart: :robot_face: Hello stupid beautiful world :sunny:")

const router = new Router()

router.post("/test", async (req, res) => {
  const { post } = req
  const { text, response_url } = post

  const result = Math.ceil(Math.random() * parseInt(text, 10))

  const response = {
    attachments: [{
      text: `${result}`,
      color: "good"
    }]
  }

  await postMessage(response, response_url)
  
  res.end()
})

const server = http.createServer(router)
server.listen(8080)
console.log("👌 HTTP server listening on port 8090 👌")
