/* //Data types in JS

// Primitive data types in JS
// 1. Number
let num = 10;
console.log("num");
// 2. String
let str = "Hello this is Akshay";
console.log("str");
// 3. Boolean
let istrue = true;
console.log("istrue");
// 4. Undefined
let undef;
console.log("undef");
// 5. Null
let nul = null;
console.log("nul");
// 6. Symbol (ES6 feature, used for unique identifiers)
let sym = Symbol("unique");
console.log("unique");
// 7. BigInt (ES11 feature, used for large integers)
let bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt);
//


 */

// Spread and Rest Operators in JS

let arr = [1, 2, 3, 4];

let arr2 = [...arr];

console.log(arr2);
// Spread operator is used to spread the elements of an array or object

arr2 = [...arr, 5, 6, 7];
console.log(arr2); // Spread operator can also be used to add new elements to an array

let arr3 = [...arr, ...arr2];

console.log(arr3); // Spread operator can also be used to merge two arrays

// Spread operator can be used to pass elements of an array as arguments to a function
function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(...arr));
