const express = require('express');
const app = express();
const fs = require('fs');
var cors = require('cors')


app.use(express.json());
app.use(cors());

app.get('/getRestros', (req, res) => {
    fs.readFile(`./data.js`, 'utf-8', (err, data) => {
        res.status(200).json(JSON.parse(data))
    })
})

app.post('/postRestro', (req, res) => {

    fs.readFile('./data.js', 'utf-8', (err, data) => {
        const availableRestros = JSON.parse(data);
        availableRestros.push(req.body)
        fs.writeFile('./data.js', JSON.stringify(availableRestros), (err) => {
            if (!err) {
                res.status(200).json(JSON.parse(JSON.stringify(availableRestros)))
            } else {
                res.status(400).json('error')
            }
        })
    })





})

app.listen('8080', '127.0.0.2', () => {
    console.log(`Server started on http://127.0.0.2:8080/`);
})