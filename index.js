const express = require('express');
require('dotenv').config()
const app = express()

const githubData = {
    "device": "MacBook Speaker",
    "volume": 50,
    "audio_test": true,
    "frequency": 440,
    "duration": 5,
    "status": "testing"
}

app.get('/', (req, res) => {
    res.send('Hello Worldss!')

})


app.get('/login', (req, res) => {
    res.send(`<h6> Please login chai or code</h6>`)
})

app.get('/github', (req, res) => {
    res.send(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

module.exports = app;
