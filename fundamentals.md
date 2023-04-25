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