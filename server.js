const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1> <a href=/${98}>take one down, pass it around</a>`);
});

app.get('/0', (req, res) =>{
  res.send(`<h1>0 Bottles of beer on the wall</h1> <a href='/'>Start Over</a>`)
})

app.get('/:number_of_bottles', (req, res) => {

    const { number_of_bottles } = req.params;

    res.send(`<h1>${number_of_bottles} Bottles of beer on the wall</h1> <a href=/${parseInt(number_of_bottles) - 1}>take one down, pass it around</a>`)
});

app.listen(PORT, () => {
    console.log('Server running ...');
})