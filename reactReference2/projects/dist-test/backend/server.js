const express = require('express');
const app = express();
const serverPort = 3000;
const serverHost = `127.0.0.4`;
const fs = require("fs");

app.listen(serverPort, serverHost, () => {
    console.log(`Server Started running`);
});

app.get('/getRestaurents', (req, res) => {

    const data = fs.readFileSync("./data.txt", "utf-8");
    res.status(200).json(JSON.parse(data));
})