//normal function
function greet() {
  console.log("Hello");
}
greet();

//function with parameters
function add(a, b) {
  console.log(a + b);
}

add(10, 20);

//returning functions

function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3);

console.log(result);

//Arrow Functions

const sayHello = () => {
  console.log("Hello from Arrow Function!");
};

sayHello();

//Arrow Function with Parameters
const addd= (a, b) => {
  return a + b;
};

console.log(addd(5, 3));

//Recursion
function countDown(n) {

  if (n === 0) {
    return;
  }

  console.log(n);

  countDown(n - 1);
}

countDown(5);

function samplefunction(){
  alert("This is a sample function");
}