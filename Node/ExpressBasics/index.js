const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/hello', (req, res) =>{
    let fname = req.query.fname;
    let lname = req.query.lname;
    let age = req.query.age;
    console.log(req.query);
    res.send(`<h1>Hello!!! ${fname} ${lname}, I hear you are ${age} years old. Thats unfortunate.</h1>`);
});

app.listen(3000);