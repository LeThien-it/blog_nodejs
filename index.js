const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 var a = 1
 var b = 5

 var c = b - a
  res.send('Hello World mãi đỉnh')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})