// singleton
// Object.create()
// Object literals(key-value pair)

const mySym = Symbol("key1")
const jsUser = {
    name: "Abhishek",
    "full name": "Abhishek Kumar",
    age: 18,
    [mySym]: "myKey1",
    location: "Dehradun",
    email: "abc@gmail.com",
    isLoggedIn: false,
    laseLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser.age);

// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "abse@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello Js User!");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User!, ${this["full name"]}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





