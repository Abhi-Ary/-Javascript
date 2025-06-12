// function ka simple sa matlab hota hai jo bhi aapne code likha hai use ek package ke under band kar dena


// how to declare function in javascript
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}
// sayMyName() //function execution 

// function addTwoNumbers(number1, number2){ //function definition ke under jo bhi input hota hai use parameter kahte hai
//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2; 
    // return result
    // console.log("Abhishek"); // function ke under ke under agar return kar diya toh uske bad ka code execute nahi hota hai
   return number1 + number2  // jo return hota hai use hum kisi variable me store kar sakte hai
}
const result = addTwoNumbers(2, 4) //function call krate time jo input pass karte hai use arguments kahte hai
// console.log("Result: " ,result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abhishek"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Abhishek"));
// ... ko rest operator and spread operator bola jata hai
function calculateCartPrice(val1, val2, ...num1){ // rest operator ka matlab hota hai ki jitne bhi value hai un sabhi ko ek bundle me pack karke de do
    return num1
}
// console.log(calculateCartPrice(200, 400, 700, 600))

// Passing object in function

const user = {
    username: "abhishek",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// Passing array in function 
const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 600, 300, 400]))










