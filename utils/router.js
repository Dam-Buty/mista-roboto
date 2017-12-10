const http = require('http')
const Router = require('node-simple-router')

router.post("/interactive", async (req, res) => {
  console.log(req)
})

const server = http.createServer(router)
server.listen(8080)
console.log("👌 HTTP server listening on port 8090 👌")
