---
title: Data Structures
description: In this section, we will cover the importance of data structures!
tags:
  - javascript
  - data-structure
  - array
  - set
  - map
  - container
published: true
lang: web
course: javascript-101
order: 5
---

### Arrays
Of course, we have the **array**, which, unlike arrays in C++, holds a dynamic collection of indexed items:

```js
const arr = ['foo', 'bar', 'baz'];
```

What if you wanted an array with 100 0's?

Use the `Array()` class:

```js
const arr = Array(100).fill(0);
```

But what if you want an array that counts from 0-99 (AKA a range)?

Use the `map()` function:

```js
const arr = Array(100).fill(0).map((_, i) => i + 1);
```

This loops over the array and modifies the contents within it. It executes a function for each element in the array and uses the return value to replace a value.

This works well, but can always be better. Use **spread** syntax!

In this next example, `keys` returns the entire index of the array that goes from 0 -> n. More specifically, `keys` returns an array iterator (almost like an array you can loop over). It does not provide all of the values directly, just methods like `next()`.

```js
const arr = [...Array(100).keys()];
```

### Sets
We also have **set** which is like an array, but it only holds unique values:

```js
const unique = new Set(arr);
```

You can also use the spread operator to get all the unique items from an array via set, but convert back to keep the array class:

```js
const unique = [...new Set(arr)];  // still an array
```

The most common thing to do with arrays is loop over them!

The easiest way to loop through an array is with a `for`/`of` loop (similar to the C++ range-based `for` loop):

```js
for(const val of arr) {
	console.log(val);
}
```

This syntax is great for most cases, but sometimes you'll need the index of the array.

To do this use `entries()`:
1. Each entry is an array itself that contains the index and value.
2. We can now nicely destructor it to provide both index and value for each iteration.

```js
for(const [i, val] of arr.entries()) {
	console.log(i,val);
}
```

JavaScript allows us to use a variety of methods in the array class:
```js
arr.forEach();  // takes a callback function as arg and returns both value and index for each iteration of the loop
arr.map();  // converts values in the array to a different value
arr.filter();  // removes unwanted values
arr.find();  // finds specific values
arr.findIndex();   // finds specific index
arr.reduce();  // takes entire array and calculates a single value
```

### Maps
The last one we will talk about is **map** that holds a dynamic collection of key/value pairs and is easily looped over:
```js
const dict = new Map([
	['foo', 1],
	['bar', 2]
]);
```

Because JavaScript is **garbage collected**, it automatically deallocates objects from memory when they are no longer referenced via code. With a map however, all the properties in that map will always be referenced. If this is an issue, use `WeakMap()` or `WeakSet()` to create garbage collected values to help memory usage.
