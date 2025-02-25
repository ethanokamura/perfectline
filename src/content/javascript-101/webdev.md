---
title: Web Development
description: In this section, we will cover the basics of web developement!
tags:
  - web-development
  - javascript
  - css
  - html
published: true
lang: web
course: javascript-101
order: 1
---

### HTML - Hypertext Markup Language
A language that defines the structure of content on a webpage

HTML uses opening and closing tags to add content to the page. The tags and its inner content is known as an element.

For example, we use `h` for headers and `p` for paragraphs:

```html
<!-- this is a comment -->
<h1>this is a header</h1>
<p>this is a paragraph</p>
```

There are dozens of different tags to accomplish different tasks!

There are tags such as `<video>`, `<audio>`, and `<canvas>` to embed different media types.

The typical HTML element has an opening and closing tag with content in the middle. The content can be text known as `innerText` or other tags known as `innerHTML`

```html
<!-- where hi == innerText -->
<span>hi</span>

<!-- where child == innerHTML -->
<span>
	<p>child</p>
	<p>child</p>
	<p>child</p>
</span>
```

The tags can hold attributes as well such as an `id` or `class` for CSS:

```html
<p id="foo" class="css-class" >

</p>
```

A basic webpage starts with an HTML tag (`<html>`) and has exactly 2 children: `<head>` and `<body>`:
1. `<head>`contains things that aren't directly shown like a tile or metadata.
2. `<body>` contains the content of the page itself (UI).

```html
<html>
	<head>
		<title>My First Website!</title>
		<meta name="description" content="yay!">
	</head>
	<body>
		<h1>html is fun!</h1>
		<p>sometimes...</p>
		<img src="./path-to-image.jpg" alt="image"/>
		<!-- Direct someone to another link using anchor! -->
		<a href="https://PerfectLine.io">learn to code</a>
	</body>
</html>
```

If an element is self-contained the closing tag is optional (ie. `<meta>` or `<img/>`)

It is common to group elements together to style them as a whole unit using `<div>`:

```html
<html>
	<head>
		<title>My First Website!</title>
		<meta name="description" content="yay!">
	</head>
	<body>
		<h1>html is fun!</h1>
		<div id="main-content" class="css-class">
			<p>sometimes...</p>
			<img src="./path-to-image.jpg" alt="image"/>
			<!-- Direct someone to another link using anchor! -->
			<a href="https://PerfectLine.io">learn to code</a>
		</div>
	</body>
</html>
```

### CSS - Cascading Style Sheets
A stylesheet language that is famous for making websites look pretty.

A typical CSS rule will start with a selector matched to an HTML element in the document:
1. Use braces for a declaration block.
2. Contains properties that change the appearance of that element.

```css
p { font-size: 1.2em; }
```

```html
<p>This is a paragraph</p>
```

Because CSS is cascading, a style sheet may contain multiple rules for the same element. This creates a hierarchy!

The browser uses the rules of cascade, specificity, and inheritance.
1. Cascade - the most specific rule will override. In this example, the `inner-class` will override any overlapping class properties from `outer-class`
2. Specificity - lower specificity like rules for elements like `p` vs higher specificity such as rules for classes or id attributes defined in `id` and `class`. Rules from `div` will be overridden by rules applied to `outer-class`
3. Inheritance - If unspecified, will take on the properties of their parent (ie background color). If `outer-class` has a text color of white, then the `p` inside that div will have white text unless specified otherwise.

```html
<div class="outer-class">
	<p class="inner-class">sometimes...</p>
</div>
```

Let's say we wanted to change the text color of a `<p>` element to red!
To reference an element type just type the name directly like so:

```css
p { color: red; }
```

We saw this above! But what if we want to change a class like `outer-class` or `inner-class`? In this case, we put a period and then the name of the class we want to create rules for:

```css
.outer-class { color: red; }
```

To write CSS you can either create a document ending in `.css` or include a `<style>` tag directly in your HTML like so:

```html
<style>
	.red { color: red; }
</style>
<h1>this is my header</h1>
<p class="red">turn me red</p>
```

CSS relies on the [Box Model](https://www.w3schools.com/css/css_boxmodel.asp#:~:text=In%20CSS%2C%20the%20term%20%22box,padding%2C%20and%20the%20actual%20content.) for formatting.