// callbcak funstion in js

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayGoodbye() {
  console.log("Good Bye!");
}

greet("Akshay", sayGoodbye);

//callback function using settimer

function delayedgreeting(name, callback) {
  setTimeout(() => {
    console.log("Hello i'm delayed" + name);
  }, 5000);
}

function test() {
  console.log("This is a test function");
}
delayedgreeting("Akshay", sayGoodbye);
test();
