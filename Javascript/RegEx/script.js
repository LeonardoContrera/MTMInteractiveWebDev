const myStr = 'This is a string of words';
let myRegEx = /\b\w+/g;

let myArr = myStr.match(myRegEx);
console.log('matchL ', myArr);

console.log('test:', myRegEx.test(myStr));

myRegEx = /is/g;

console.log('Search: ', myStr.search(myRegEx));

console.log('Replace: ', myStr.replace(myRegEx, "IS"));

myRegEx = /[\s.]/g;
let myArr2 = myStr.split(myRegEx);

console.log('split: ', myArr2);