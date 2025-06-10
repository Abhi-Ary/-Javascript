const name = "Abhshek"//This is first way to declare a string we can put string in single quote as well as double quote
const repoCount = 10
// console.log(name + repoCount + " value"); concatenate not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//This is most widely used string interpolation using backticks

const gameName = new String('Abhishek')//This is second way to declare a string by creating an object of a javascript by default index is starting from 0
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 7)// last number is excluded
console.log(newString);

const anotherString = gameName.slice(-10, 4) // the index of last character is -1
console.log(anotherString);

const newStringOne = "  Abhishek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20pandit"

console.log(url.replace('%20', '-'))
console.log(url.includes('abhishek'));

console.log(gameName.split('-'));









