---
layout: '../../layouts/PageLayout.astro'
title: Loops
description: In this section, we will cover the importance of {title}!
tags:
  - cpp
  - intro to programming
  - loops
  - while
  - for
published: true
lang: cpp
course: cpp-101
order: 7
---

In programming, loops are used to repeat a block of code multiple times. They're like a set of instructions that the computer follows in a loop until a certain condition is met.

### While Loops

A while loop repeatedly executes a block of code as long as a specified condition is true.
It's like saying "keep doing this while something is true".
While loop is used when the number of iterations is unknown.

```cpp
while (condition) {
	// execute block
}
```

### For Loops
A for loop is used to iterate (or loop) over a range of values.
It's like saying "do this for a specific number of times".
For loop is used when the number of iterations is already known.

```cpp
for (initialization; condition; increment/decrement) {
	// execute block
}
```

Here, `initialization` sets the starting point, `condition` is the condition for continuing the loop, and `increment/decrement` specifies how the loop variable changes after each iteration.

### Code Examples
Here's an example of a `while` loop that will be executed until the end of stdin:
```cpp
std::string input;
while (std::cin >> input) {
  std::cout << input << '\n';
}
```
To stop inputting values hit `ctrl-d` to end the loop.

Here's an example of a `for` loop that will be executed 5 times where `i` is the value of the current index or iteration of the loop:
```cpp
for (int i = 0; i < 5; i++) {
  std::cout << i;
}
std::cout << '\n';
```
This loop will print out `01234`.

### The Difference:
**While Loop**: Used when you want to repeat a block of code based on a condition. You might not know in advance how many times the loop will run.

**For Loop**: Used when you know exactly how many times you want to repeat a block of code. It's great for iterating over a range of values or performing a specific task a known number of times. For example, looping over arrays!

Remember, both types of loops are important tools in programming and are used in different situations depending on what you're trying to achieve!

The last thing I should cover are range-based `for` loops. Ranged based for loops are similar to `foreach` loops in other languages. For example, for each `char` in a `std::string` do something!

In this snippet, the ranged-based for loop capitalized each letter in the given string.

```cpp
std::string str = "hello!";
for (char c : str) {
  if (c >= 'a' && c 'z') c += ('A'-'a');
  std::cout << c;
}
std::cout << std::endl;
```
This will output: `HELLO!`

At the end of the day, the output of any of these loops are the same if written correctly.