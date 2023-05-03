# Fundamentals

In this session, we'll cover the basics of functional programming, which is a programming paradigm that emphasizes using functions to solve problems. We'll discuss immutability, higher-order functions, and function composition. We'll also provide practical examples in JavaScript to help you write cleaner and more maintainable code.

## Pure Function

A pure function is a function where the return value is determined ONLY by its input values, with no observable side effects.

```jsx
// This is Impure Function
const PI = 3.14

function areaCircle(radius) {
	return radius * radius * PI
}

areaCircle(10)

// This is Pure Function
function areaCirclePure(radius, pi) {
	return radius * radius * pi
}

areaCirclePure(10, Math.PI)
```

Example 1:

```jsx
// This is pure function or impure function?
function generateRandomNumber(min, max) {
	const factor = max - min + 1;
	return parseInt(Math.random() * factor) + min
}

generateRandomNumber(1,100)

// The answer is: Impure Function.
```

Because `Math.random()` is not an input value in the function.

Example 2:

```jsx
// Pure
function sum(a,b) {
	return a + b
}

sum(60,40)

let count = 0

// Impure 
function sumImpure(a,b) {
	count++
	return a + b
}
```

Because a side effect occurred in the function.
## Higher Order Function

Functions that operate on other functions, taking them as arguments or returning them, are called higher-order functions.

```jsx
function execute(fn, ...params) {
	return function(text) {
		return `${text} ${fn(...params)}`
  }
}

function sum(a,b,c) {
	return a + b + c
}

function multiple(a,b) {
	return a * b
}

execute(sum, 4, 5, 6)('The result of sum is')
execute(multiple, 10, 20)('The result of multiple is')

```
## First Class Function

A programming language is said to have first-class functions when functions in that language are treated like any other variable.

```jsx
const x = 3
const y = function(txt) {
	return `This is a text: ${txt}`
}

y('Hi')
```
## Immutability

Immutability in functional programming refers to the concept that once a value is created, it cannot be changed. Instead, any operation that appears to modify the value actually creates a new value based on the original. This approach ensures that values are always predictable and can be safely shared and reused throughout a program.

```jsx
// This is not immutability because .sort() modified initial array
const nums = [3, 1, 7, 9, 4, 6]
nums.sort()

console.log(nums)

// This is a example the immutability because create a new array

const nums = [3, 1, 7, 9, 4, 6]

function order(array) {
	return [...array].sort()
}

console.log(order(nums))
```
## Closure

This is when a function “remembers” its lexical scope, even when the function runs outside that lexical scope.

Example of a closure in JavaScript:

```jsx
function outerFunction() {
  const outerVariable = 'I am in the outer function!';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am in the outer function!"

```

In this example, **`outerFunction`** is defined and returns the **`innerFunction`**. When we call **`outerFunction`**, it creates a variable **`outerVariable`** and defines **`innerFunction`**, which logs the value of **`outerVariable`** to the console. We then return **`innerFunction`** and store it in the **`innerFunc`** variable. When we call **`innerFunc`**, it still has access to **`outerVariable`** through the closure, even though **`outerFunction`** has completed execution.
## Currying

That involves transforming a function that takes multiple arguments into a series of functions that each take a single argument. The returned function(s) then execute when all the arguments have been provided.

For example:

```jsx
function add(x) {
  return function(y) {
    return x + y;
  }
}

const add2 = add(2); // Returns a function that adds 2 to a given number
console.log(add2(3)); // Output: 5
```

In this example, **`add`** is a function that takes a single argument **`x`** and returns another function that takes a single argument **`y`**. When **`add`** is called with **`2`**, it returns a new function that adds **`2`** to any given number. We then call **`add2`** with **`3`**, which returns the sum **`5`**.

Currying is a useful technique in functional programming, as it allows us to create more modular and reusable code by breaking down complex functions into simpler ones that can be composed together.
## Lazy Evaluation

Lazy evaluation is a programming technique where the evaluation of an expression is delayed until its value is actually needed. In other words, lazy evaluation means that an expression is not evaluated until the result is actually needed or requested by the program.

In languages that use lazy evaluation, expressions are only evaluated when they are actually needed. This can lead to better performance and memory usage, as the program does not waste time or resources evaluating expressions that are never used.

For example, in JavaScript, using lazy evaluation can be achieved with the use of **`&&`** and **`||`** operators. In the following code, **`someFunction`** is only called if **`myArray`** is not empty:

```jsx
const myArray = [1, 2, 3];

// Using the && operator for lazy evaluation
myArray.length && someFunction(myArray);
```

In this example, **`someFunction`** is only called if **`myArray`** has a **`length`** greater than **`0`**. If **`myArray`** is empty, **`someFunction`** is not called at all, since the **`&&`** operator only evaluates the second expression if the first one is **`true`**. This is an example of lazy evaluation in JavaScript.
## Composition

Function composition is a functional programming technique in which two or more functions are combined to form a new function. The output of the first function is passed as input to the second function, and so on. The result of the final function is the output of the composition of the functions.

```jsx
const add = x => x + 2;
const multiply = x => x * 3;
const subtract = x => x - 1;

const composedFunction = (x) => subtract(multiply(add(x)));

console.log(composedFunction(5)); // Output: 20
```

In this example, we have three simple functions that perform mathematical operations on an input value **`x`**. We then combine these functions using function composition to create a new function called **`composedFunction`**. This function takes an input value **`x`**, applies the **`add`**, **`multiply`**, and **`subtract`** functions in sequence, and returns the final result. When we call **`composedFunction(5)`**, the output is **`20`**, which is the result of the following sequence of operations: **`add(5)`** returns **`7`**, **`multiply(7)`** returns **`21`**, and **`subtract(21)`** returns **`20`**.
## Functors

In functional programming, functors are objects or data structures that can be mapped over with a higher-order function, such as **`map`**. They are a way of abstracting and encapsulating common operations on different types of data.

A functor is defined by two properties: a value and a mapping function. The mapping function takes a function as input, applies it to the value inside the functor, and returns a new functor with the transformed value.

Here's an example of a functor in JavaScript using an array as the data structure:

```jsx
const myFunctor = [1, 2, 3];

const addOne = (num) => num + 1;

const mappedFunctor = myFunctor.map(addOne);

console.log(mappedFunctor); // Output: [2, 3, 4]
```

In this example, we create an array **`myFunctor`** with three elements. We then define a function **`addOne`** that takes a number as input and returns the input value incremented by 1. We use the **`map`** function, which is a higher-order function, to apply **`addOne`** to each element in the array. The **`map`** function returns a new functor, which is an array in this case, with the transformed values. Finally, we log the new array to the console.
# Patterns

---

## Observer

The Observer pattern is a design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any changes to its state. The main idea behind the Observer pattern is to decouple the subject from its observers, allowing for greater flexibility and reusability of code.

In this pattern, the subject maintains a list of observers and provides a way for new observers to register and existing observers to unregister. When the subject's state changes, it notifies all its observers by calling a method on each one. This allows the observers to update themselves based on the new state of the subject.

The Observer pattern is widely used in GUI frameworks, event-driven architectures, and other systems where changes to an object's state need to be propagated to other parts of the system.
In JavaScript, the Observer pattern can be implemented using callbacks, events, or the Observable class introduced in ECMAScript 2015. For instance, we can create an observable object and add one or more observers to it using the Observable class as follows:

```jsx
class MyObservable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const myObservable = new MyObservable();

const myObserver = data => {
  console.log('Data received:', data);
};

myObservable.subscribe(myObserver);
myObservable.notify('Hello World!');
```

In this example, we define a class **`MyObservable`** that has three methods: **`subscribe`**, **`unsubscribe`**, and **`notify`**. The **`subscribe`** method adds a new observer to the list of observers, **`unsubscribe`** removes an observer from the list, and **`notify`** calls all the observers with the provided data.

We then create an instance of **`MyObservable`** called **`myObservable`** and add an observer called **`myObserver`** using the **`subscribe`** method. Finally, we call the **`notify`** method with some data, and the observer receives it and logs it to the console.