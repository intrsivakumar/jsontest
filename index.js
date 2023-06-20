const express = require('express')
var bodyParser = require('body-parser');
const { getPersona } = require('./persona');

const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({ user: 'geek' });
})
app.post('/login', (req, res) => {
    console.log("request: ", req.body);
    res.json(getPersona().professional);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
