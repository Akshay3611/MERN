/* // Variables in JS
// var is function scoped
var a = 5;
// var can be redeclared and reassigned
console.log(a);
// var is function scoped, meaning it is accessible within the function it is declared in
// var can be redeclared in the same scope
var a = 20; // redeclaring var
console.log(a);

let b = 10;
console.log(b);
// let is block scoped
// let can be reassigned but not redeclared
// let cannot be redeclared in the same scope

const c = 15;
// const is block scoped and cannot be reassigned
// const cannot be redeclared in the same scope
// const is used for constants, meaning the value cannot be changed

console.log(c);
 */
// Destructuring in JS

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 4 5

const obj = {
  fname: "Akshay",
  age: 22,
  city: "Ghaziabad",
};

const { fname, age, city } = obj;
console.log(fname, age, city); // Akshay 22 Ghaziabad
