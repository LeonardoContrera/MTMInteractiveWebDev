exports.index = (req, res) => {
    res.send('<h1>Hello, World!</h1>');
};

exports.hello = (req, res) =>{
    let fname = req.query.fname;
    let lname = req.query.lname;
    let age = req.query.age;
    console.log(req.query);
    res.send(`<h1>Hello!!! ${fname} ${lname}, I hear you are ${age} years old. Thats unfortunate.</h1>`);
};

exports.goodbye = (req, res) =>{
    res.send(`<h2>Goodbye ${req.params.name}</h2>`);
};

exports.howdy = (req, res) =>{
    res.send(`<h3>Howdy ${req.params.name} the ${req.params.species}!!!</h3>`)
};

exports.why = (req, res) =>{
    res.send(`<h1>Why would you do this ${req.params.name}, that person was a young ${req.params.item}</h1>`)
};

exports.stuff = (req, res) =>{
    res.send('This is some stuff');
}