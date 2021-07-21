const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');
//const exp = require('constants');

const app = express();

app.set('view engine', 'pug');
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "/public")));

const urlencodedParser = express.urlencoded({
    extended: false
});

app.get("/", routes.index);
app.post("/submitted", urlencodedParser, routes.submitted);
app.listen(3000);