let myArray = [
    {x:11, y:11},
    {x:13, y:11},
    {x:13, y:9}
];

//let myCopy = myArray;
//myCopy[2].x = 1000;
//console.log(myCopy);
//console.log(myArray);

//let anotherCopy = myArray.slice(0);
//anotherCopy[2].x = 1000;
//console.log(anotherCopy);
//console.log(myArray);
let betterCopy = JSON.parse(JSON.stringify(myArray));
betterCopy[2].x = 1000;
console.log(betterCopy);
console.log(myArray);

let newArray = [];
newArray[10] = "howdy";
console.log(newArray.length);