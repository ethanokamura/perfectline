---
layout: '../../layouts/PageLayout.astro'
title: Syntax
description: In this section, we will cover everything you need to know about JavaScript Syntax!
tags:
  - web
  - javascript
  - css
  - html
  - intermediate
published: true
lang: web
course: javascript-101
order: 3
---

### JavaScript Types:
JavaScript is a [dynamically-typed](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) language (like python), meaning that no data type annotations are necessary.

The primitive data types for JavaScript:
1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null

Unlike C++, `;` are optional because the JavaScript parser will add them automatically

_However you want to write it, stick with it. Consistency is most important_

### How to use JavaScript:
Start by creating a file ending with `.js`!

Define variables using the `var`, `let`, or `const` keywords!
1. `let` is often the most popular variable declaration!
2. `const` are variables that cannot be reassigned later.
3. `var` should be avoided unless you know how to use it!

In JavaScript, switching data types is perfectly acceptable meaning that you can change the value of a number to a string to a bool etc.

Keep in mind that `console.log()` prints to standard output, similar to `std::cout` in C++!

Alright, let's take a look:

```js
let x;
const name = 'ethan';
var bad = 'avoid var unless you are smart';

console.log(x);  // undefined
x = null;
x = 'seven';  // switching data types is perfectly acceptable
x = new Object();  // any value that isn't primitive will inherit from the object class
```

### Nullish Coalescing
Nullish coalescing is a relatively new operator that was introduced in ES2020. It is similar to the logical OR operator `||`, but it only returns the right-hand side if the left-hand side is `null` or `undefined`.

```js
const foo = null ?? 'bar';
console.log(foo); // 'bar'

const foo = 0 ?? 'bar';
console.log(foo); // 0
```

Another example:
```js
const person = { };

const dude = person.name;
console.log(foo); // Uncaught TypeError: Cannot read property 'bar' of undefined

const dude = person?.name; // undefined
```
### Lexical Environment (Scope)
Determining which type to use when depends on the [lexical environment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) (where variables do and don't work)

Lexical Environment in JavaScript defines the following:
1. Global Scope - available everywhere.
2. Local Scope - can only be used inside the function it was defined in.
3. Block Scope - can only be used inside the block or statement.

`var` variables can be [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) to the local scope if inside a block scope.

Scope is also used for functions (more on this in the next section)

Examples of scope:
```js
let a = 'global';  // global scope
function fun() {
	let a = 'local';   // local scope (applies only within fun())
	if (true) {
		let a = 'block';   // block scope (applies only within the if statement)
		var b = 'hoisted';  // var allows the value to be hoisted to local scope
	}
}
```
### DOM
All websites are based on the Document Object Model (DOM). More on this in the HTML section

In JavaScript, we can access the DOM via things like `document` and grab specific HTML elements:
```js
window.document

// find the element
const btn = document.querySelector('button');
// find the class
const btn = document.querySelector('.button');
// find the id
const btn = document.querySelector('#button');

// you can grab multiple elements at the same time:
const allBtns = document.querySelector('.button')
```

You can use JavaScript to listen to [events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	console.log('clicked');
	document.body.style.backgroundColor = 'red';
});
```

Much of web dev revolves around listening to events and updating the UI accordingly. People tend to dislike vanilla JavaScript because of imperative code where the UI is being manipulated directly. To solve this, many people prefer to use a JavaScript [framework](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) where the UI is a function of its input data.

An example of this is React, a popular framework created by FaceBook. Where JavaScript data can be bound to HTML directly, allowing for site reactivity or automatic UI updates. Frameworks, like React, make this especially easy.
```js
function MyComponent() {
	// some JavaScript
	const [message, setMessage] = useState();

	return (
		<div>
			<h1>Hello { message }</h1>
			<button onClick={() => setMessage('world')}></button>
		</div>
	);
}
```
