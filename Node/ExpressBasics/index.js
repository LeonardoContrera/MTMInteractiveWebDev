const { response } = require('express');
const express = require('express');
const routes = require('./Routes/routes');


const app = express();

app.get('/', routes.index);

app.get('/hello', routes.hello);

app.get('/goodbye/:name', routes.goodbye);

app.get('/howdy/:name/:species', routes.howdy);

app.get('/why/:name', routes.why);
app.get('/:stuff', routes.stuff);


//query string are the question mark and the variable
app.listen(3000);