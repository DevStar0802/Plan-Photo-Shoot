const express = require('express')
const path = require('path');
const routes = require('./controllers');
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server Live, app listening on port ${port}`)
})