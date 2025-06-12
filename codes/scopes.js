// Global scope har jagah available hota hai but block scope sirf block ke under available hota hai
// var c = 300 //gloabal scope
let a = 300
if(true){ // block scope hai
   let a = 10
   const b = 20
//    var c = 30
console.log("Inner", a);


}
console.log(a);
// console.log(b); scope ke bahar hai
// console.log(c);

