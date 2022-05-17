const express = require('express');
const path = require('path');
const calculated = require('./result');

const port = 8080;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/app.js', (req, res) => {
    res.send(calculated.result(req, res)); 
});
app.listen(port, () => {
    console.log(`listening port http:localhost/${port}`);
});
