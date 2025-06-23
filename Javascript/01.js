// Variables in JS
// var is function scoped
var a = 5;
// var can be redeclared and reassigned
console.log(a);
// var is function scoped, meaning it is accessible within the function it is declared in
// var can be redeclared in the same scope
var a = 20; // redeclaring var
console.log(a);
// let is block scoped
let b = 10;
console.log(b);
// let can be reassigned but not redeclared
// let cannot be redeclared in the same scope
// let is block scoped
const c = 15;
// const is block scoped and cannot be reassigned
// const cannot be redeclared in the same scope
// const is used for constants, meaning the value cannot be changed

console.log(c);
