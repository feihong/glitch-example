// server.js
// where your node app starts

const Koa = require('koa')
const app = new Koa()
app.use(require('koa-static')('public'))

const router = require('koa-router')()

router.get('/dreams', async (ctx, next) => {
  ctx.response.type = 'json'
  ctx.response.body = dreams
})

router.post('/dreams', async (ctx, next) => {
  dreams.push(ctx.request.query.dream)
  ctx.response.body = 'OK'
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

app.use(router.routes())
app.use(router.allowedMethods())

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
