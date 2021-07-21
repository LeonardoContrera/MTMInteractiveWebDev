exports.index = (req, res) =>{
        res.render('index', {
            title: "Home"
        });
};

exports.submitted = (req, res) =>{
    let person = {
        name: req.body.name,
        age: req.body.age,
        species: req.body.species
    };

    res.render('submitted', {
        title: "Form Accepted",
        person
    });
};