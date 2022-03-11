const http = require('http'),
      express = require('express'),
      io = require('socket.io')(http)
      app = express(),
      PORT = process.env.PORT || 8080;
      publicDir = express.static(`${__dirname}/public`)

app
  .use(publicDir)
  .get('/', (req,res) => {
    res.sendFile(`${publicDir}/index.html`)
  })

http.createServer(app).listen( PORT , () => {
  console.log(`Iniciando Express y Socket.IO en http://localhost:${PORT}`);
})

