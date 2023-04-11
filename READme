# Functional Programming

<aside>
🔥 Functional programming is a paradigm that emphasizes using functions as the foundation of software. These functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned as values. By writing independent functions that can solve complex problems, programmers can combine them together. These functions should have no side effects and emphasize immutability, allowing for more predictable and easier to reason about code. Recursion is also essential, allowing functions to call themselves in a more elegant way than iterative loops. Popular functional programming languages include Haskell, Lisp, and Clojure, but many modern programming languages, such as JavaScript and Python, also have functional programming features. While it can lead to concise, modular, and reusable code, functional programming may not be suitable for all programming tasks due to its steep learning curve.

</aside>

## Differences between imperative and declarative

| Imperative               | Declarative               |
| ------------------------ | ------------------------- |
| focus on the flow        | focus on logic            |
| mutable states           | immutability              |
| as                       | what                      |
| greater amount of code   | less amount of code       |
| low level of scalability | high level of scalability |
| better known             | less known                |
| more explicit            | less explicit             |

## Examples of code:

→ Imperative Paradigm

```jsx
const grades = [9, 7, 6, 4, 10]

function media(grade) {
	let total = 0
	for(let i = 0; i < grade.length; i++) {
			total += grades[i]
	}

	return total / grades.length
}

const mediaClass = media(grade)
console.log(`Média é ${mediaClass}`) 
```

→ Declarative paradigm

```jsx
const grades = [9, 7, 6, 4, 10]

const sum = (a, b) => a + b
const divide = (a, b) => a / b

const mediaClass = divide(grades.reduce(sum), grades.length)

console.log(`Media is ${mediaClass}`) 
```

## First Class Functions

 → Functions are values

```jsx
function double(x) {
	return x * 2 
}

double(20)
```

→ Composition of functions

```jsx
const overdone = composition(scream, stress)

overdone('PARA')
```

---

## Why was functional programming adopted late?

The main culprit: **Memory**

- Functional programming was created in 1957, before Structured Programming and Object-Oriented Programming.
- However, functional programming was not viable at the time, due to the high cost of memory.

## Value vs Reference

```java
int a = 2;
int b = a;

```

In this case, the program is using more memory than necessary because a copy of the value was made, even though there was space available.

The decision to make a copy of the value was taken because an integer value is a basic and primitive type that consumes little memory. Therefore, it is more logical to generate a copy of the value than to make the same variable point to the same memory address.

```java
Object a = new Object();

```

When dealing with objects, things change a bit. When we create an object, it usually occupies a large space in memory.

In a variable, the content of the object is not stored, but rather a reference to the location where the object is in memory. For example, if we create an object B that receives the value of object A, the reference to the location in memory is copied.

This means that we will have two variables pointing to the same location in memory.

---

## PLoP

- Place-Oriented Programming;
- Nova informações substituem as antigas;
- Surgiu de uma limitação do início da computação
- Pouca RAM e pouco disco

1940 → I invented a bit of memory

1953 → I invented a byte of memory

1966 → 1K

1978 → 32k

2011 → Look, 100 terabytes

2038 → What memory?

## Temporal Coupling

Temporal coupling is a programming concept that refers to the degree to which two parts of a program depend on each other's runtime. In other words, temporal coupling describes how one part of the program is linked to another part of the program in terms of runtime.

A common example of temporal coupling is when a piece of code waits for another piece of code to finish executing before continuing. This can lead to performance and reliability issues, especially if the runtime of one part of the program cannot be accurately predicted.

To minimize temporal coupling, it is recommended to divide the program into independent and well-defined modules that can run autonomously without depending on the runtime of other modules. This can help improve the efficiency, scalability, and maintainability of the program.

## Why switch?

- Functional programming is simpler;
- It makes it easier to write and maintain code;
- It has no temporal coupling;
- Few concurrency issues;
- It works with immutability.

## How Javascript Works

### HEAP

![Untitled](images/Untitled.png)

In Javascript, the heap is the part of the computer memory where objects are stored. It is managed by the garbage collector of Javascript and is responsible for allocating and deallocating memory for dynamically created and removed objects during program execution.

The Javascript heap is where values of objects, arrays, functions, and other complex data types are stored. When an object is created, it is allocated in the heap and can be accessed through a reference. When the object is no longer needed, the garbage collector releases the memory occupied by it, marking it as "collectible."

Efficient management of the heap is important to ensure that a Javascript program runs efficiently and without errors. It is important to avoid memory leaks that occur when objects are allocated in the heap but are never removed, occupying unnecessary space and making the program slow and unstable. Excessive use of the heap can also lead to performance problems, as the garbage collector needs to spend more time managing the allocated memory.

### STACK

![Untitled](images/Untitled%201.png)

In Javascript, the stack is a data structure used to store information about code execution. It is a stack that contains a series of frames, each of which represents an execution context.

The stack is used to track the order of function execution. Whenever a function is called, a new frame is added to the stack. This frame contains information about the function, including its name, parameters, and local variables. When the function returns, the frame is removed from the stack, and execution continues from the point where the function was called.

The stack is important to ensure that the code is executed in the correct order. It is used to control the execution of functions and ensure that the local variables of one function do not interfere with the variables of another function that is being executed simultaneously. In addition, the stack is used to detect execution errors, such as stack overflows, which occur when the amount of information stored in the stack exceeds the maximum limit allowed by the execution environment.

In summary, the stack is a crucial data structure in the execution of Javascript code, and its proper use is important to ensure that the code is executed efficiently and without errors.

### EVENT QUEUE

![Untitled](images/Untitled%202.png)

The Event Queue is an important part of Javascript's asynchronous programming model. It is a queue (or list) of events (or tasks) waiting to be executed. Each event in the queue is associated with a callback function that will be executed when the event is processed.

Events in the queue are added whenever an asynchronous action occurs in the program, such as an AJAX request, an animation, a timer event, or user input. When an event is added to the queue, it waits until the execution stack is empty to be processed.

The processing of events in the queue is done by Javascript's event loop. The event loop is responsible for continuously checking if there are events in the queue, and if so, executing them in order. It takes the first event in the queue and executes its callback function until the function returns. Then it takes the next event in the queue and repeats the process.

The use of the event queue allows Javascript to execute asynchronous tasks without blocking synchronous code execution. This is important to ensure that the user interface does not freeze while the code performs time-consuming tasks or waits for external events. In addition, the use of callbacks allows asynchronous code to be executed in a non-linear fashion, which is essential for developing complex and responsive applications.

In summary, the event queue is a fundamental part of Javascript's asynchronous programming model, and its proper use is important to ensure that the code is executed efficiently and responsively.

## Arrow Function

![Untitled](images/Untitled%203.png)

Arrow function is an anonymous JavaScript function introduced in ES6 (ECMAScript 2015) that uses the "arrow" syntax (=>) to define a function more succinctly and with a different variable scope than traditional functions.

The basic syntax of an arrow function is as follows:

```jsx
const arrow = () => console.log('Arrow Function')
arrow()

const greeting = name => `Hello ${name}`

const sum = (...numbers) => {
	let total = 0
	for(let n of numbers) {
		total += n
	}
	return total
}

console.log(sum(10,30,40,50))

const pow = base => exp => Math.pow(base,exp)

console.log(pow(2)(4))

// this

Array.prototype.log = function() {
	console.log(this)
}

Array.prototype.last = () => {
	console.log(this[0])
} // not work

const numbers = [1, 2, 3]

numbers.log()

numbers.last() // undefined
```

An arrow function can have zero or more parameters enclosed in parentheses, and the function body is enclosed in curly braces ({}) if there is more than one statement, or it can be a single expression if there is only one statement. Additionally, the **`return`** keyword does not need to be explicitly used to return a value, since the returned value is implicitly the result of the last evaluated expression.

Another important difference is that arrow functions do not have their own **`this`** object, which means that the value of **`this`** is inherited from the context where the function was defined, instead of being defined in the function call. This can be useful in cases where the value of **`this`** needs to be preserved, such as in callback functions.

Finally, arrow functions are generally more concise and easier to read than traditional functions, especially when it comes to simple functions or single returns.

## Callback

![Callback-notitle.svg](images/Callback-notitle.svg)

In programming, a callback is a function that is passed as an argument to another function and will be executed when a certain event occurs or when the original function finishes its execution.

A common example of using callbacks is in asynchronous functions, such as in HTTP requests. When a request is made, it is sent to the server and the function does not wait for the response, continuing to execute the rest of the code. When the response is received, the callback function is called, allowing the code to handle the response data.

Another example is in user interface, where a callback function can be used to respond to user input events, such as clicking a button or typing text in an input box.

The use of callbacks is an important technique in asynchronous programming and helps make the code more modular and flexible.

Examples:

```jsx
function exec(fn, a, b) {
	return fn(a,b)
}

const sum = (x,y) => console.log(x + y)

const subtract = (w,z) => console.log(w -z)

exec(sum, 30, 40)

const fn = () => consle.log('interval')
setInterval(fn, 1000)
```

```jsx
const fs = require('fs')
const path = require('path')

const myPath = path.join(__dirname, 'data.txt')

function showContent(err, data) {
	console.log(data)
}

console.log('Start..')
fs.readFile(myPath, {}, showContent)
console.log('End..')

console.log('Start Sync')
const content = fs.readFileSync(myPath)
console.log(content)
console.log('End Sync')

```

## Map

The **`map()`** function in JavaScript is a method that is available on arrays. It creates a new array by applying a callback function to each element of the original array.

The syntax of the **`map()`** function is as follows:

```jsx
array.map(callback(currentValue[, index[, array]])[, thisArg])
```

The **`callback`** function is called for each element in the array, and it can take up to three arguments:

- **`currentValue`**: The value of the current element being processed in the array.
- **`index`** (optional): The index of the current element being processed in the array.
- **`array`** (optional): The original array on which **`map()`** was called.

The **`callback`** function should return a new value for each element in the array. The **`map()`** function will then create a new array with the same length as the original array, where each element is the result of calling the **`callback`** function on the corresponding element in the original array.

Here's an example of using **`map()`** to create a new array of numbers that are twice the values of the original array:

```jsx

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

In this example, the **`map()`** function is called on the **`numbers`** array, and a callback function is passed to it that takes each element in the array and returns a new value that is twice the original value. The **`map()`** function then creates a new array (**`doubledNumbers`**) where each element is the result of calling the callback function on the corresponding element in the original array.

The **`map()`**function is a useful tool for transforming data in an array into a new array of transformed data. It can be used in a variety of scenarios, including filtering out certain elements, transforming strings into numbers, and much more.

Below is the implementation of `map`:

```jsx
Array.prototype.newMap = function(fn) {
	const mapped = []
	for(let i = 0; i < this.length; i++) {
		const result = fn(this[i])
		mapped.push(result)
	}
	return mapped
}
```

## Filter

The **`filter()`** function in JavaScript is a method that is available on arrays. It creates a new array with all elements that pass the test implemented by the provided callback function.

The syntax of the **`filter()`** function is as follows:

```jsx
array.filter(callback(currentValue[, index[, array]])[, thisArg]
```

The **`callback`** function is called for each element in the array, and it can take up to three arguments:

- **`currentValue`**: The value of the current element being processed in the array.
- **`index`** (optional): The index of the current element being processed in the array.
- **`array`** (optional): The original array on which **`filter()`** was called.

The **`callback`** function should return **`true`** if the current element passes the test, and **`false`** otherwise. The **`filter()`** function will then create a new array with all elements for which the **`callback`** function returned **`true`**.

Here's an example of using **`filter()`** to create a new array of even numbers from an original array of numbers:

```jsx
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

In this example, the **`filter()`** function is called on the **`numbers`** array, and a callback function is passed to it that takes each element in the array and returns **`true`** if the element is even, and **`false`** otherwise. The **`filter()`** function then creates a new array (**`evenNumbers`**) with all elements from the original array that returned **`true`** when passed to the callback function.

The **`filter()`** function is a useful tool for filtering data in an array based on a condition. It can be used in a variety of scenarios, including selecting certain elements, removing unwanted elements, and much more.

Below is the implementation of filter:

```jsx
Array.prototype.newFilter = function(fn) {
	const newArray = []
	for(let i = 0; i < this.length; i++) {
		if(fn(this[i], i, this)) {
		newArray.push(this[i])
		}
	}
	return newArray;
}
```