// function declaration vs function expression
// function declaration
function greet() {
  console.log("Hello, World!");
}

greet();

const greeting = function () {
  console.log("function expression");
};

greeting();
