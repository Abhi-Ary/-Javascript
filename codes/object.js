// singleton it means isse unique object banta hai
// Object.create() This is one of the method to create object by constructor
// Object literals(key-value pair) multiple instance create hota hai this is another method to create object key-value pair

const mySym = Symbol("key1")
const jsUser = {
    name: "Abhishek",
    "full name": "Abhishek Kumar",
    age: 18,
    [mySym]: "myKey1",
    location: "Dehradun",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser.age);

// console.log(jsUser["email"]);

// Object.freeze(jsUser) lock kar dena
jsUser.email = "abse@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);
jsUser.greeting = function(){
    // console.log("Hello Js User!");
}
jsUser.greetingTwo = function(){
    // console.log(`Hello Js User!, ${this["full name"]}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// ********************************* Object Next Part ********************************

// const tinderUser = new Object() //singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "God"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); chainign object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2} //First method to join two object rarely used

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread operator mostly used it 
// console.log(obj3);

// Database se array of object aate hai

const users = [
    {
        id: 1,
        email: "bjdh@gmail.com"
    },

    {
        id: 1,
        email: "bjdh@gmail.com"
    },

    {
        id: 1,
        email: "bjdh@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Iske outputValue ki data type array hoti hai
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ********************** Destructuring of object *************************
const course = {
    coursename: "English",
    price: "999",
    courseInstructor: "Abhishek Sir"
}

// course.courseInstructor
const {courseInstructor: instructor} = course  // Kahi se agar value extract karni ho toh aise karenge isme hum apne according name bhi dal sakte hai
console.log(instructor);

// json(javascript object notation) ke under key and value dono string hota hai
// {
//     "name": "abhishek",
//     "rollNo": "2124430",
//     "subject": "English"
// // }


[
    {},
    {},
    {}
]







