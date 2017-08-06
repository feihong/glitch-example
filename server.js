// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// })

app.get('/dreams', function (request, response) {
  response.send(dreams)
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post('/dreams', function (request, response) {
  dreams.push(request.query.dream)
  response.sendStatus(200)
})

// Simple in-memory store for now
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes",
  '找到并数一些绵羊',
  '爬一座超高的山',
  '洗碗',
]

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
