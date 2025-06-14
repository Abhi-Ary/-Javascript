// Global scope har jagah available hota hai but block scope sirf block ke under available hota hai
// var c = 300 //gloabal scope
let a = 300
if(true){ // block scope hai
   let a = 10
   const b = 20
//    var c = 30
// console.log("Inner", a);


}
// console.log(a);
// console.log(b); scope ke bahar hai
// console.log(c);

// function into function
// chote bache bade se icecream mang sakte hai but bade log chote se nahi mang sakte hai 
function one(){
   const username = "abhishek"
   function two(){
      const website = "youtube"
      console.log(username);
   }
   // console.log(website);
   // two()
}
// one()

if(true){
   const username = "abhishek"
   if (username === "abhishek") {
      const Website = " youtube"
      // console.log(username + Website);
      
   }
   // console.log(Website); 
}
// console.log(username); 

// ++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num){
   return num + 1
}

addTwo(5)
const addTwo = function(num){  // expression
   return num + 2
}