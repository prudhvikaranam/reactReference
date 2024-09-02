const express = require('express');
const app = express();
const fs = require('fs');

app.get('/getProducts', (req, res) => {
    fs.readFile(`./data.js`, 'utf-8', (err, data) => {
        res.status(200).json(JSON.parse(data))
    })
})
app.listen('8080', '127.0.0.2', () => {
    console.log(`Server started on http://127.0.0.2:8080/`);
})