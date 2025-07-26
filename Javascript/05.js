// callbcak funstion in js

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayGoodbye() {
  console.log("Good Bye!");
}

greet("Akshay", sayGoodbye);
