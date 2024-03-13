---
layout: '../../layouts/PageLayout.astro'
title: iostream
description: In this section, we will cover the importance of iostream!
tags:
  - cpp
  - intro to programming
  - iostream
published: true
lang: cpp
course: cpp-101
order: 4
---
By including C++'s standard input/output library `<iostream>`, we are able to create both inputs `std::cin` and outputs `std::cout` through the _command line_.

Command Line: The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

[more on iostream](https://cplusplus.com/reference/iostream/)

### Syntax
To start, let's include the `iostream` library at the top of our file:
```cpp
#include <iostream>
```
When you include libraries you do not need semicolons!

Now let's get into the actual input and output.

We use `std::` to say in simple terms "Inside the standard library we are using \_\_." In this specific case, we are using `std::cin` (console input from the standard library), `std::cout` (console output from the standard library), and `std::string` (a non fundamental type). For any class, type, etc. that is not included in the C++ language, we access it using libraries or headers. To specify which library we are extracting them from we use the "`::`" syntax.

To end an output line you would finish with either `std::endl` or `\n`.

`\n` counts as a single character despite containing 2 characters on first glance. You can think of the backslash as a command.


```cpp
std::cout << "hello, world\n";
//  OR
std::cout << "hello, world" << std::endl;
```

These 2 variations work interchangeably. Personally, I prefer the `\n`.

To include multiple pieces or variable types in an output you use the "insertion operators" `<<` like glue. For example:

```cpp
std::cout << "this is an example of how to print the number " << 1 << '\n';
```

You should see the result of `this is an example of how to print the number 1` where the integer 1 could be replaced by any type of variable.

Notice how I left an empty space after `number` to allow for space infront of the integer/variable.

[More on Insertion Operators](https://faculty.cs.niu.edu/~hutchins/csci241/io-op.htm)

For getting input, we would write something along the lines of

```cpp
std::cin >> input;
```

Where `input` is a variable. Note that the "extraction operators" `>>` are similar to the insertion operators except they are flipped. This allows us to extract the users input from the console and hold that data in the variable named `input`.

Alternatively, we can put `using namespace std;` under our included libraries. This would negate the need for writing `std::`. However, this can be considered poor practice so we will not be using this for our programs.

```cpp
#include <iostream>

using namespace std;

int main() {
	cout << "hello, world!\n";
	return 0;
}
```

### Cliff Notes:

1. `<<` -> pushing out
2. `>>` -> taking in
3. `cin` -> stream extraction operator
4. `cout` -> stream insertion operator
5. multiple inputs: `cin >> x >> y;`
6. multiple outputs: `cout << "x + y = " << x + y;`

