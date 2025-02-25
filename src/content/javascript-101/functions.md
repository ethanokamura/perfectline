---
title: Functions
description: In this section, we will cover the importance of Functions!
tags:
  - functions
  - closure
  - heap
  - variables
  - javascript
  - higher-order-functions

published: true
lang: web
course: javascript-101
order: 4
---

Keep in mind, in JavaScript, functions are really just objects!

### How Do We Use Functions
Create a **function declaration** where `a` and `b` are input parameters (arguments):
* Function declarations will be hoisted (meaning you can use it anywhere in the file, even if you declare a function at the bottom).

```js
function add(a, b) {
	return a + b;
}
```

In JavaScript, functions are just objects and can be used as expressions, meaning you can assign a variable to a function.

Examples of **function expressions** and **function statements**:
* Function expressions are not created until it is encountered in the code (Any code above it cannot reference/use it)

```js
const add = function(a,b) {
	return a + b;
}
```

Function expressions can be anonymous meaning you can use them as arguments for other functions without giving them a name:

```js
const anon = arr.map(function(val) {
	return val * 2;
});
```

Typically use declarations for global code and expressions for local code.
- Always keep [scope](https://www.w3schools.com/js/js_scope.asp) in mind!

This can be used to create higher-order-functions

Functions can also be nested to create closures to encapsulate data and logic from the rest of the program!

### Higher Order Functions (HOF)
A **higher-order function** is a function that takes a function as an argument or returns a function.
* They are commonly used in functional programming and are a powerful tool for abstracting away complexity.

Often, we deal with callbacks. Here's a function that uses a callback as an argument:

```js
function funWrapper(callback) {
	callback('Called by wrapper');
}
funWrapper(sayHi);  // call the callback with whatever arg you want
funWrapper(m => console.log(m));  // pass function expression as arg
```

In this next example, we will look at a function that returns another function:

```js
function funCreator() {
	return function(message) {
		return 'Said...' + message;
	}
}
```

When called, we get a function value back and can now use it elsewhere in the application:

```js
const fn = creator();
fn('hello!');
```

Here's one last example:

```js
// A function that takes a function as an argument
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function math(x, y, operator) {
  return operator(x, y);
}

math(5, 2, add); // 7
```
# Closures
A [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) is a function that has access to the parent scope, even after the parent function has closed.

JS will automatically store the state of a closure in the heap memory, even after the parent function has returned.

This behavior makes them useful for encapsulating private variables.

In simple terms, closures are functions that can access values outside of their curly braces.

Here's a fully self-contained, closed expression:

```js
funciton pureFun(a,b) {
	return a + b;
}
```

But what if the function accesses data outside of its scope (such as the global environment or outer function)? In this case, you get a closure:

```js
let b = 3;

funciton pureFun(a) {
	return a + b;
}
```

For the interpreter to call this function and know the value of these variables, it creates a closure to store them and access them later. They are stored in something called the **heap**, an area of memory that can keep data indefinitely and later decide when to get rid of it via the garbage collector, unlike the **call stack**

More on [Memory Management](https://www.geeksforgeeks.org/memory-management-in-javascript/)

A closure is a function combined with its outer state or lexical environment.

Take note that closures require more memory and processing power than a pure function, but there are many practical reasons to use them such as data encapsulation.

A closure is a function that closes over a state or data so it can be used elsewhere.

Here's a good example:

By default, a variable defined within a function is only accessible within the scope of the function such as `x` in this `outer` function:

```js
function outer() {
	let x = 1;
}
```

But what if we want outside code to change the value of `x`? We can do this with closures.
1. By defining a function inside the `outer` function
2. When JavaScript sees a function that references a value in its parent scope, it creates a closure to save that value in memory to be accessed later

```js
function outer() {
	let x = 1;  //
	function inner() {
	    x += 1;
	}
	return inner;
}

const incrementX = outer();
incrementX();  // x = 2
incrementX();  // x = 3
```

We can now manipulate x anywhere in the file because the data has been encapsulated by a closure.