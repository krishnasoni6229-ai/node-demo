const express = require('express');
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Worldss!')

})


app.get('/login', (req, res) => {
    res.send(`<h6> Please login chai or code</h6>`)
})

app.get('/youtube', (req, res) => {
    res.send('youtube hitesh chod.')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})