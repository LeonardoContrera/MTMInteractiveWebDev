var a = 5;
console.log(a);

a = "Bob";
console.log(a);

a = ["Fred", 3.14, false, ['red', 'toy', "ball"], 'Tomorrow'];
console.log(a);

console.log(a[3][1]);
console.log(a[1]);

a.push('blue');
a.push(true);
a.pop();
a.unshift('Word');
a.shift();
console.log(a);

var b = {
    x: 50,
    y: 150,
    z: 250,
    arr: a
};

console.log(b);
console.log(b.y);
console.log(b.arr[3][1]);

function hello(name){
    console.log('Hello ' + name);
};

hello('Mark');

var goodbye = function(name){
    console.log('Smell ya later ' + name);
};

goodbye('Carl');

let v = 5;
const d = 6;

//var is funtion scoped
//called anonimous function
var test_var = function() {
    var v = 5;
    for (var i = 0; i < 3; i++) {
        console.log(v, i);
    };
    console.log(v, i);
};


test_var();

//let is block scoped
let test_let = function() {
        let v = 5;
        for(let i = 0; i < 3; i++)
        {
            console.log(v,i);
        };
        //below will not work in let
        //console.log(v,i);
};

test_let();

//below is the same as writing function
//You can remove the parenthesis of the parameter is it is only one parameter
const howdy = /*(*/name/*)*/ => {
    console.log(`Howdy ${name}!`);
};

howdy('Charlie')

let bob = {
    name: 'Bob',
    age: 21,
    species: 'zombie',
    hobbies: [
        "being dead",
        "eating brains",
        "knitting",
        "roaming aimlessly"
    ],
    friends: [
        {
            name: 'Sally',
            age: 20,
            species: 'human'
        },
        {
            name: "Harry",
            age: 45,
            species: 'Werewolf'
        }
    ]
};

const sally = 'Sally';

console.log(bob.friends[1].age);
console.log(bob.hobbies[2]);
console.log(bob);

let stuff = `
${sally} says,
"Wow, I really
LOVE multiline
strings."
(Real person, not an actor)
`;

console.log(stuff);

const myFunc = () => {
    g = 'awful';
    console.log(g);
}

myFunc();
console.log(g);