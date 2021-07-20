const config = require('../config.json');

exports.index = (req, res) =>{
    res.render('index', {
        title: 'Home',
        config
    });
};

exports.potato = (req, res) =>{
    res.render('potato', {
        title: 'PotatoLand',
        config
    });
};

exports.hello = (req, res) =>{
    res.render('hello', {
        title: `${req.params.name}'s Webpage`,
        config
    });
};