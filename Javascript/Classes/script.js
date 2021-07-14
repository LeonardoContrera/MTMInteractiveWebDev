class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.species = 'Human';
    }
    info(){
        console.log(`Name: ${this.name}
Age: ${this.age}
Species: ${this.species}`);
    }

    says(){
        console.log(`${this.name} says, "Sup mah, how is you?"`)
    }
};

let sally = new Person("Sally", 28);;
console.log(sally);
sally.info();
sally.says();

class Monster extends Person{
    constructor(name, age, species){
        super(name, age);
        this.species = species;
    }

    says(){
        console.log(`${this.name} says, "GRRRRRRRRR"`)
    }
};

let harry = new Monster("Harry", 42, 'Werewolf');
harry.info();
harry.says();

class Zombie extends Monster{
    constructor(name, age){
        super(name, age, "Zombie")
    }

    says(){
        console.log(`${this.name} says, "BRAAAAAAAAAIIIIIIIINNNNNNSSSS"`);
    }
};

let bob = new Zombie("Bob", 58);
bob.info();
bob.says();