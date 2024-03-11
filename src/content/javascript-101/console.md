---
layout: '../../layouts/PageLayout.astro'
title: Console Tips
description: In this section, I'll show you tips and tricks for console.log!
tags:
  - web
  - javascript
  - css
  - html
  - intermediate
published: true
lang: web
course: javascript-101
order: 9
---

Let's say you have 3 objects:

```js
const foo = { name: 'ethan', age: 22, human: true };
const bar = { name: 'm', age: 18, human: true };
const baz = { name: 'milo', age: 1, human: false };
```

The obvious approach to `console.log()` is to write each out as so:

```js
// ugly
console.log(foo);
console.log(bar);
console.log(baz);
```

However, this can be confusing in the console because the name of the variable is unknown. In bigger projects, this is a living hell.

Instead add the variables to an object! This is something called computed property names.

```js
// pretty
console.log({ foo, bar, baz });
```

This not only is less code, but it also tells us which variable defines what data.

What if you need it to stand out in the console? Not a problem, add CSS:

```js
console.log('%c Hello!', 'color: green; font-weight: bold;')
```

If the objects share common properties, you might want to output them as a `table`:

_This is super nice for arrays as well_

```js
console.table([foo, bar, baz]);
```

Want to keep track of the time it takes to do something? Use `time` and `timeEnd`:

```js
console.time('looper');
let i = 0;
while (i < 1000000) { i++ }
console.timeEnd('looper');
```

Let's say you need to keep track of where the `console.log` originated from:

```js
// Stack Trace Logs
const deleteMe = () => console.trace('bye bye database');

deleteMe();
deleteMe();
```