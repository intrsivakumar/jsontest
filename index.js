const express = require('express')
var bodyParser = require('body-parser');
const { getPersona } = require('./persona');

const app = express()
app.use(bodyParser.json());
app.use(express.static('public'))
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({ user: 'geek' });
})
app.post('/login', (req, res) => {
    console.log("request: ", req.body?.email);
    res.json(getPersona(req.body?.email));
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
