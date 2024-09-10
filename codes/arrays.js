// Array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "abhishek"]

const myArr1 = new Array(1, 2, 3, 4, 5, "Abhishek", "Apple")
// console.log(myArr[6]);

// Arrays methods
// myArr.push("Tiger")
// myArr.push("Lion")
// myArr.pop()

// myArr.unshift(6)
// myArr.shift()
// console.log(myArr.includes("Banana"));
// console.log(myArr.indexOf("Apple"));

const newArr = myArr.join()//. It converts array into string
// console.log(myArr);
// console.log(typeof newArr);

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))
console.log(Array.from({naem: "Abhishek"}));//Interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));












