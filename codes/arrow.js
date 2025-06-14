// this keyword current context ki bt karta hai
const user = {
    username: "abhishek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// Browser ke under jo global scope hai use window kahte hai
// console.log(this); // It return empty object

// function chai(){
    //     let username = "abhishek"
    //     console.log(this.username); // It gives undefined function ke under this nahi use kar pa raha hu
    // }
    // chai()

    // const chai = function(){
    //         let username = "abhishek"
    //         console.log(this.username); // It also gives undefined
    // }
    // chai()

    
    // arrow function
    const chai = () => {
            let username = "abhishek"
            console.log(this); // It gives an empty object
    }
    // chai()
// explicit return javascript
    // const addTwo = (num1, num2) => {
    //       return num1 + num2
    // }
    // curly braces use hua toh return keyword likhna hi padta hai but if paranthesis likhe toh return keyword nahi likhna padega
// Implicit return javascript (arrow function)
    // const addTwo = (num1, num2) =>  num1 + num2
    //  const addTwo = (num1, num2) =>  (num1 + num2)
    const addTwo = (num1, num2) =>  ({username: "abhishek"}) // object ko return karne ke liye use paranthesis me rap karna hi padta hai
    
    console.log(addTwo(2, 6))

    // const myArray = [2, 3, 5, 8, 9]
    // myArray.forEach(() =>{})
