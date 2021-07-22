const fs = require("fs");

exports.index = (req, res) =>{
        res.render('index', {
            title: "Home"
        });
};

exports.submitted = (req, res) =>{
    let person = {
        name: req.body.name,
        age: req.body.age,
        species: req.body.species,
        imgInput: req.body.imgInput
    };

    let personData = `
    <p>
    name: ${person.name}<br />
    age: ${person.age}<br />
    species: ${person.species}<br />
    image: <br /> 
    <image src=${person.imgInput} width=250><br />
    -----------------------------------------
    </p>
    `;

    fs.writeFile('public/mytest.html', personData, err=>{
        if(err) throw err;
        console.log("DataSaved");
    });

    res.render('submitted', {
        title: "Form Accepted",
        person
    });
};