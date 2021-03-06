const express = require('express');
const pug = require('pug');
const path = require('path');
const routes = require("./routes/routes");


const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', routes.index);
app.get('/potato', routes.potato);
app.get('/hello/:name', routes.hello);

app.listen(3000);