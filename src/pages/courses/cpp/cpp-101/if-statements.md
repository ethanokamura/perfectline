---
layout: '../../../../layouts/PageLayout.astro'
title: if/else
description: In this section, we will cover the importance of {title}!
categories:
  - cpp
  - intro to programming
  - statements
published: true
order: 5
---
if/else statements are crucial for any programming language and are debatably the easiest to learn. They can be read similar to a regular english sentence. "if" a condition is met, do x, "else if" the first condition is not met, but another condition is met, do y, "else", if none of these conditions are met, default to z.

A pseudo code version of this would be something like the following:

```cpp
if (condition_a) {
	do something if true
} else if (condition_b) {
  do something if condition_a is false but condition_b is true
} else {
  do something if condition_a and condition_b are false
}
```

For instance, you could have a program that checks if a user's age is over 18. If it is, it lets them access a website. If not, it might show a message saying they're too young.

```cpp
if (age >= 18) {
  std::cout << "Access Granted\n";
} else {
  std::cout << "Access Denied\n";
}
```

### Syntax:

in C++, we use curly brackets to encase blocks of code as previously discussed. To write and if statement, we write "`if`" in lowercase, followed by a set of parenthesis to encase our condition that we are checking. If the condition is met, the code in the curly brackets following the statement will run.

```cpp
if (condition) {
  do this;
}
```

On a side note, if the code that must be run is contained in a SINGLE line of code, the if statement can be written as such:

```cpp
if (condition) do this;
// OR
if (condition)
	do this;
// OR
if (condition) { do this; }
```

Note that curly brackets are only necessary if the block of code that must be run is longer than 1 line. HOWEVER, if the else if / else statement is more than one line of code, the first `if` should also contain brackets

Do not write:

```cpp
if (condition) do x;
else {
	do y;
	do z;
}
```

Instead write:

```cpp
if (condition) {
	 do x;
} else {
	do y;
	do z;
}
```

When in doubt, use curly brackets!

### Ternary Operations

A condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if/else statement. This should typically only be used for (if / else) NOT (if / else if / else):

```cpp
condition ? true do this : false do this;
```
