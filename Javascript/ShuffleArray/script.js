let myArr = [
    ["answer 1", "correct"],
    ["answer 2", "incorrect"],
    ["answer 3", "incorrect"],
    ["answer 4", "incorrect"]
]

myArr.forEach((element, index) => {
    let rand = Math.floor(Math.random() * myArr.length);//makes range 0 - the array length
    let a = myArr[index];
    let b = myArr[rand];
    myArr[index] = b;
    myArr[rand] = a;
});

console.log(myArr);

let myGuess = 1;
if(myArr[myGuess][1] == 'correct'){
    console.log("We did it ,we did it, yeah we did it yea. Lo Hecimos");
}
else{
    console.log("WROOOOOOOONG");
};