const express = require('express');
const path = require('path')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '42e7775c2214426d9259a81c97956fd1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())  // When we want to be able to accept JSON.
app.use(express.static(`${__dirname}/public`))
app.get('/',(req,res) => {
    rollbar.info('User has enter the homepage.')
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(4000, () => console.log('Server running on 4000'))

