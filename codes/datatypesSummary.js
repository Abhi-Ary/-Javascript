// Primitive datatypes
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt
// Javascript is a dynamically type language bcz we don't need to specify the type of data
const score = 100
const valueScore = 100.4
// console.log(typeof valueScore); number

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); false

const bigNumber = 3764787845759479848n


// Reference(Non-primitive)
// Array, Object, Function

const fruits = ["Apple", "Banana", "Papaya"];
let myObj ={
    name:"Abhishek",
    age: 21,
}
const myFunction = function name(params) {
    console.log("Hello Abhishek");
    
}

console.log(typeof null);//object
console.log(typeof myFunction);//function

