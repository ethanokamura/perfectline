---
layout: '../../layouts/PageLayout.astro'
title: OOP
description: Everything you need to know about Object Oriented Programming (OOP) in JavaScript!
tags:
  - javascript
  - oop
  - classes
  - objects
  - prototypes
published: true
lang: web
course: javascript-101
order: 6
---

### Classes
_JavaScript uses **classes** (kinda)_

JavaScript supports the creation and use of classes using the `class` keyword. However, this is just syntactic sugar for prototypal inheritance and objects.

Here's an example of a class in JavaScript:
```js
class Human {
	constructor(name) {  // called on creation of the object
		this.dna = 'AACTG';
		this.name = name;
	}
	get gender() {  // get grabs data
		return this.gender;
	}
	set gender(val) {  // set sets data
		this.gender = val;
	}
	walk() {  // method
		console.log('walk');
	}
	static isHuman(human) {  // static makes it global to the class name
		if (human.dna == 'AACTG') {
			return true;
		}
	}
}
```
### Objects
An object is a collection of **properties**, and a property is an association between a name (or _key_) and a value. A property's value can be a function, in which case the property is known as a method.

_Anything that isn't a primitive type is an object!_

Objects can be created or defined in a few ways. Here are two examples:

```js
const human = {}  // '{}' -> object literal syntax
const human = new Object();  // 'new' -> constructor syntax
```

Here's an example of an object holding a collection of key/value pairs or properties and values:

```js
const human = {
	dna: 'AACTG',
	name: 'Ethan',
	born: Date.now(),
	walk() {
		console.log('walking');
	}
}
```

A common issue when creating apps is calling a property from within an undefined object. This can lead to app-breaking errors! To fix this, you can use something called [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
* If you're ever not 100% certain that the object will be defined, use optional chaining.

Here's an example of the syntax:

```js
const human = undefined;
human?.name;
```

Putting a `?` before the period to call a property on an object will allow the object to return undefined without throwing an error.

This can be used while accessing items in an array or calling a function with arguments:

```js
const arr = [1,2,3];
arr?.[0];
function foo(a,b) { }
foo?.(1,2);
```

### Prototypes
A **prototype** refers to an object from which other objects inherit properties and methods. It's like a blueprint or a template for creating similar objects.
* In very basic terms, a prototype in JavaScript refers to an object from which other objects inherit properties and methods. It's like a blueprint or a template for creating similar objects.
* Every object in JavaScript is linked to a prototype object, which provides it with default properties and methods. If you try to access a property or method on an object and it doesn't exist on the object itself, JavaScript will look for it in the object's prototype.
* This prototype-based inheritance is a key feature of JavaScript, and it allows you to create hierarchies of objects that share common functionality.

For referencing a prototype stick to this:

```js
human.__proto__.__proto__;  // never use this
Object.getPrototypeOf(human);  // Recommended way to get prototype
```

Essentially, one object can inherit properties or methods from another object through something called the prototype chain.
* Every object can have exactly one prototype
* At the end of the chain, the value is `null`

Here's an example:

```js
const animal = {
	dna: 'ATCG',
};
const cat = {
	meow() {
		console.log('meow')
	}
}

Object.setPrototypeOf(cat, animal);  // cat now has the DNA property
console.log(cat.dna);  // ATCG
console.log( Object.getPrototypeOf(cat) );  // { dna: 'ATCG' }

Object.getPrototypeOf(cat) === animal; // true
Object.getPrototypeOf(animal) === Object.prototype; // true
Object.getPrototypeOf(Object.prototype) === null; // true (end of chain)

```
### Let's talk about **this**:
A keyword that references an object based on how a function is called
* In global scope, `this` references the browser
* In an object, `this` references that specific object

For example:

```js
function wtfIsThis() {
	console.log(this);  // ref: browser
}

const person = {
	wtfIsThis: function() {
		console.log(this);  // ref: person
	}
}
```

You can bind `this` to another object using `.bind()`:

```js
const person = {};
const personFun = wtfIsThis.bind(person);
```

`this` can get confusing... luckily, JavaScript has the "arrow" syntax
Arrow functions do not have their own `this` value and are always **anonymous** making them ideal for function expressions

```js
function wtfIsThis() {
	console.log(this);  // ref: browser
}

const person = {
	wtfIsThis: () => {
		console.log(this);  // ref: person
	}
}
```

Keep in mind when creating functions, when used as an argument, primitive types are passed by value (creating a copy of the original variable) and functions are passed by reference (and stored by heap).****

### Destructuring Objects
Objects like this have several properties that we may want to set as individual variables to use throughout the app.

_It's good to use destructuring whenever possible._

Here's a basic cat object:

```js
const cat = {
	name: 'milo',
	age: 1,
	meow() {
		console.log('meow');
	}
}
```

One way to destructure an object is with **dot notation** where we reference each property with a period followed by the property name:

```js
const name = cat.name;
const age = cat.age;
```

However, JavaScript provides a better syntax that gives the same outcome:

```js
// can use const or let
const { name, age } = cat;
```

You can even change the name of the variables with this syntax like so:

```js
// can use const or let
const { name: nameOfCat, age } = cat;
```

Destructuring can also be used on arrays:

```js
const arr = [ 'foo', 'bar', 'baz' ];

// Deconstruct a full array:
const [ a, b, c ] = arr; // position matters! ( a === 'foo' )
// Deconstruct one item:
const [ ,, c ] = arr;
// Equivalent to
const c = arr[2];
```

### Combining Objects/Arrays With the **Spread** Syntax
Merge objects or arrays with the spread operator `...`

Let's say you have 2 objects that are retrieved from different API calls:

```js
const obj1 = {
	first: 'a',
	second: 'b',
	third: 'c',
}
const obj2 = {
	third: 'd',
	fourth: 'e',
}
```

One way you can combine these is via `Object.assign()` where the last object takes the highest priority:

```js
const full = Object.assign({}, obj1, obj2);
```

Where `full` would contain the following:

```js
first: 'a',
second: 'b',
third: 'd',
fourth: 'e',
```

This can look much nicer with the spread operator and is more common in practice:
```js
const full = { ...obj1, ...obj2 };
```

Or even better merge them as you define `obj2`:

```js
const obj2 = {
	...obj1,
	third: 'd',
	fourth: 'e',
}
```

Position matters, any properties that come after will be overwritten:

```js
const obj2 = {  // third === 'd' (obj2 overrides)
	...obj1,
	third: 'd',
	fourth: 'e',
}
// Versus
const obj2 = {  // third === 'c' (obj1 overrides)
	third: 'd',
	fourth: 'e',
	...obj1,
}
```

