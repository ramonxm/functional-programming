// Basic understanding of Functions

// Function Declaration

function sleep() {
  console.log("sleep mode");
}

sleep(); // return undefined -> log 'sleep mode'

// Function Expression

const sleeping = function () {
  console.log("sleeping");
};

sleeping(); // return undefined -> log 'sleeping'

function sum(a, b) {
  return a + b;
}

let result = sum(3, 4);

console.log(result); // 7

result = sum(4);

console.log(result); // NaN

// ----------------------------

// Basic understanding of Functions 2

function morning() {
  console.log("Good morning");
}

function afternoon() {
  console.log("Good afternoon");
}

function perfomAnything(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

perfomAnything(3); // return undefined
perfomAnything(morning); // return log 'Good morning'
perfomAnything(afternoon); // return log 'Good afternoon'

// return function from function

function pow(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const powOfTwo = pow(2);

console.log(powOfTwo(8));

console.log(pow(3)(4));

function calculate(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(10)(5)(multiply));
