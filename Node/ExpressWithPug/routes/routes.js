exports.index = (req, res) =>{
    res.render('index', {
        title: 'Home'
    });
};

exports.potato = (req, res) =>{
    res.render('potato', {
        title: 'PotatoLand'
    });
};