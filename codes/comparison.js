// console.log(2 > 1); true
// console.log(2 >= 1); true
// console.log(2 < 1); false
// console.log(2 <= 1); false
// console.log(2 == 1); false
// console.log(2 != 1); true

// console.log("2" > 1); true bcz js by default converted string value into number
// console.log("02" > 1); true bcz js by default converted string value into number

// console.log(null > 0); false
// console.log(null >= 0); true bcz an equality check == and comparisons <,>, <=, >= work differently comparison convert the null into a number treating as 0
// console.log(null == 0); false

// console.log(undefined == 0); false
// console.log(undefined > 0); false
// console.log(undefined < 0); false

// === it checks values as well as data types
// console.log("2" === 2); false

//  == (Loose Equality)
// Compares values, but converts types if they are different.

// Called type coercion.

// javascript
// Copy
// Edit
// '5' == 5   // true  → because '5' (string) is converted to 5 (number)
// false == 0 // true  → false is converted to 0
// null == undefined // true
// ✅ === (Strict Equality)
// Compares both value and type.

// No type conversion.

// javascript
// Copy
// Edit
// '5' === 5   // false → one is string, one is number
// false === 0 // false → boolean is not a number
// null === undefined // false
// 🧠 Summary Table
// Expression	== Result	=== Result
// '5' == 5	✅ true	❌ false
// false == 0	✅ true	❌ false
// null == undefined	✅ true	❌ false
// 5 === 5	✅ true	✅ true

// ✅ Best Practice:
// Always use === unless you specifically want type coercion (which is rare in good code).












