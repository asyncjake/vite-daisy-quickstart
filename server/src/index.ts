import express from 'express'
import { X } from '@/routes.ts'

// TODO: The whole list https://expressjs.com/en/advanced/best-practice-security.html
import helmet from 'helmet'

const app = express()
const PORT = 8080

// TODO: Set this to include production URL expectations!
//   Sets all of the defaults, but overrides `script-src`
//   and disables the default `style-src`.
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "example.com"],
        "style-src": null,
      },
    },
  }),
);
app.use(express.json())

app.get('/', function (req, res) {
  console.log(X)
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  const reqJson = req.body;
  console.log(reqJson);
  res.json({ message: "Post was get!" })
})

app.listen(PORT, function () {
  console.log(`You are now listening to XPRS Radio at ${PORT} FM!`)
})
