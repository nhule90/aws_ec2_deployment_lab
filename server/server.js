const express = require('express');
const path = require('path')
const app = express()

app.use(express.json())  // When we want to be able to accept JSON.
app.use(express.static(`${__dirname}/public`))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(4000, () => console.log('Server running on 4000'))

