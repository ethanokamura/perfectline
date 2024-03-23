---
layout: '../../layouts/PageLayout.astro'
title: Imports
description: In this section, we will cover the importance of imports and exports!
date: '11.1.2023'
tags:
  - javascript
  - import
  - export
  - package
  - dependency
published: true
lang: web
course: javascript-101
order: 8
---

### ES (ECMAScript) Modules
Allows someone to share code between files

By default, everything in a file or module is private to that file.
- If there is code we want to use elsewhere we can make it a **default export**

```js
export default function helper() {
	console.log('help me, help you');
}
```

This allows us to use it in a different file with an import statement:

```js
import helper from './Helper.js';
```

You can do multiple exports in one file and then reference them by name:

```js
// One file
export const a = 1;
export const b = 2;
export const c = 3;

// Another file
import { a, b, c } from './SomeExportFile.js'
```
### Package Managers
`npm` (Node Package Manager) is most common though **package managers** like `bun` are growing fast.

_Package managers allow you to use code written by other developers._

When you download a **package** from `npm` it downloads to your `node_modules` folder and creates or edits the `package.json` which lists all the **dependencies** in your project.
An example of this is:
`npm install { package name }`

### Bundle Your JavaScript
Combines all your JavaScript files into a bundle that can be used by the browser

To do this efficiently, you'll need a tool called a module bundler (`vite` or `webpack`).
If the JavaScript is too heavy, it can affect performance leading to slower page loading.

You can always split the bundles into multiple files and export them as **dynamic imports** to only import the code as needed.

```js
const lazyBundle = await import('./lazy.js');
```
