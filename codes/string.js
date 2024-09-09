const name = "Abhshek"//This is first way to declare a string
const repoCount = 10
// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//This is most widely used

const gameName = new String('Abhi-shekp')//This is second way to declare a string
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "  Abhishek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20pandit"

console.log(url.replace('%20', '-'))
console.log(url.includes('abhishek'));

console.log(gameName.split('-'));









