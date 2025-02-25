---
title: Event Loops
description: In this section, we will cover the importance of event loops!
tags:
  - javascript
  - event-loop
  - callback
  - promise
  - async
  - await
published: true
lang: web
course: javascript-101
order: 7
---

### JavaScripts Non-Blocking Event Loop!
JavaScript, by default, executes in a **synchronous** way, meaning one line cannot be read until the line before it has.

However, JavaScript allows for #asynchronous code via its event loop.
* Without async, it would be impossible to multitask.
* Allows tasks to be executed independently by sending code to another thread, which leads to more efficient use of system resources.
* This is crucial for handling concurrent operations like handling user input and making API calls.

An example of synchronous code:

```js
first();
second();
third();
```

Asynchronous code can be demonstrated with `setTimeout()`:

```js
setTimeout(() => {
	console.log('5 seconds into the future');
}, 5000);  // in ms
```

The function above can also be referenced as a **callback function** which are very useful when not abused.

"Callback hell" can be prevented with a **promise** or a wrapper for a currently unknown value that will resolve in the future. An example of this is calling API's.

```js
const promise = new Promise(
	(resolve, reject) => {
		// do something async here
		if (success) {
			resolve('success');  // if all goes right it is resolved
		} else {
			reject('failure');  // if something goes wrong it can raise an error
		}
	}
);
```

This can also be used with `.then()` and `catch()`:

```js
promise
	.then(success -> {
		console.log('yay', success);
	})
	.catch(err => {
		console.log('oops', err);
	})
```

Or even better, write an async function that returns a promise:
* We use the `await` key word to pause the execution and wait for other promises to resolve.
* To handle errors use a `try`/`catch` block

```js
async function asyncFun() {
	try {
		const result = await promise;
	} catch (err) {
		console.log('oops', err);
	}

}
```
