const express = require('express');
// const cors = require("cors");
const app = express()

app.use(express.json())  // When we want to be able to accept JSON.
// app.use(cors());
app.use(express.static(`${__dirname}/public`))
// const { getHouses, createHouse, deleteHouse, updateHouse } = require('./controller.js')

// app.get('/api/houses', getHouses)

// app.post('/api/houses', createHouse)

// app.delete('/api/houses/:id', deleteHouse)

// app.put('/api/houses/:id', updateHouse)

app.listen(4000, () => console.log('Server running on 4000'))