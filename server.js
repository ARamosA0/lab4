// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/cliente', (req, res) => {
  res.send('CLIENTE');
});

app.get('/productos', (req, res) => {
  res.send('PRODUCTOS');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);