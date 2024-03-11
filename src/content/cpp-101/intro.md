---
layout: '../../layouts/PageLayout.astro'
title: Intro
description: In this section, we will cover what C++ is and why one might use it.
tags:
  - full course
  - cpp
  - beginner
  - basics
published: true
lang: cpp
course: cpp-101
order: 0
---
## Learn the basics of C++ and programming!
In this course, you will learn the fundamentals of programming via the C++ language!

To get started, we will need to install both a text editor (VS Code is preferred) and a C++ compiler like clang. The text editor/IDE will let us create and edit files to build our program, and the compiler will allow us to run it!

Below are instructions and links to download the necessary software!

## Visual Studio Code: (VS Code)
Visual Studio Code is an application that allows us to see, write and edit files! This tool will allow us to do all the necessary tasks to create programs with code. Again, it is free to use and typically is pretty fast to install.
[Download VS Code](https://code.visualstudio.com/)

## Compilers:
In order to use the code I will write in the introduction to programming lessons, I will be using what are called compilers. This is a free-to-use tool that turns our code into something that the computer can understand and interpret! I will send a second email on how to set up a compiler on the computer used for the lessons. It is pretty quick and doesn't take up much storage.

To get started, install a C++ compiler for either mac or windows or use an online compiler like [this](https://nsspot.herokuapp.com/compiler/)
#### Mac:
1. Install Xcode
2. Install Microsoft's VS Code extension for C++
#### Windows:
1. [Step-by-Step Guide to Installing C++ For Windows OS](https://www.freecodecamp.org/news/how-to-install-c-and-cpp-compiler-on-windows/)
2. [msys2 Installation Link](https://www.msys2.org/)

## What is C++?
C++ is a statically typed, multi-paradigm, procedural, object-oriented, generic, functional language.

1. **Statically typed** -> the type of a variable is known at compile time. For C++ this means that you as the programmer must specify what type each variable is. (more on types later).
2. **Multi-Paradigm** -> there are many features and ways of going about solving problems!
3. **Procedural** -> functions in a step by step process
4. **Object Oriented** -> we can define _custom types_ (classes or structs) with members that are either _properties_ (variables) or _actions_ (functions)
5. **Generic** -> we write code that applies broadly to many different data types.
6. **Functional** -> we compose programs by writing functions that call other functions

C++ is known for its efficiency, performance, versatility, and widespread use in software infrastructure. It was developed by Bjarne Stroustrup at Bell Labs in the early 1980s as an extension of the C programming language, adding object-oriented features. C++ is a super set of the language C - meaning that virtually any C program is a valid C++. The language provides low level memory and hardware control like its predecessor C, but with high level features like classes and smart pointers.

C++ can create pretty much anything! Here are a couple examples of popular software built with C++:
  1. Game engines (Unreal Engine)
  2. Desktop software (Adobe Products)
  3. Databases (mySQL)
  4. Embedded systems (displays in your car or on your appliances)
  5. Used to implement much of our low level infrastructure like language compilers and virtual machines

It is, however, also known for its steep learning curve and unforgiving syntax.
## The building `{blocks}` of C++:
Most common blocks:
1. `if` statement: Selects a block to execute based on a Boolean or `bool` (`true` / `false`) conditions.
2. `while` loop: Repeats a block as long as a `bool` condition remains true.
3. `for` loop: Repeats a block as long as a `bool` condition remains true or for every value in an iterable object.
4. Function definition: Defines a _callable_ block of code that can receive _arguments_ and _return_ a value.
5. `class` / `struct` definition: Defines a new data type, usually containing a combination of properties (variables) and actions (functions).

Blocks of code are typically wrapped in "curly brackets" `{}`
## Let's say something to the world:
```cpp
#include <iostream>

// every C++ program must define at least a main function!

int main() {
	std::cout << "Hi Mom!\n";
}
```

If this makes no sense, no need to worry. Let's break it down:

## Standard Input/Output Library
`#include` is a _preprocessor_ directive (technically not a C++ statement).
- A C++ preprocessor prepares source code for _compilation_ (ie translation from source code to machine code)
- `#include <iostream>` is replaced with the actual contents of a file named `iostream` which contains definitions of input/output (io) related objects from the C++ [Standard Library](https://en.cppreference.com/w/cpp/standard_library).

## Comments
You might notice above a greyed-out line of code that starts with `//`.

The two slashes signify that a comment is written and will negate anything until the end of that line. When code is compiled (more on this later) the computer does not read comments. It sees the slashes and skips to the next line.

Comments can also be written with the `/**/` syntax for multi-line comments:
```cpp
// single line comment

/*
this is a
multi-line
comment
*/
```

## The `main` Function
Looking back at the comment itself in the program above, it says, "every C++ program must define at least a main function!". This is true!

`main` function definition:
The block here constitutes the body of the main function. `int main()` is **ALWAYS** the program's _entry point_.

`int` returns a type (more on this later) and `main` is the name of the function.

`()` : No parameters (this function accepts no arguments).

Anything not referenced or put inside the `main` function will not be used in the program.

## Statements:
The line that contains:
```cpp
std::cout << "Hi Mom!\n";
```

is called a statement.

All statements in C++ end in semicolons `;`

You can think of semicolons as punctuation for programming (like a period).

I find the most common error both new and experienced programmers make is forgetting to put a `;` at the end of each statement.

`std` is a namespace with the name `std` (ie the standard library)
- Namespace: A collection of identifiers (functions, classes, objects, etc.)

`cout` is an object of type `ostream` in namespace `std` (AKA "standard output").

In basic terms, this entire statement essentially says, _Insert the string "Hi Mom!" into the standard output_

## Running the Program!
1. Create and edit a source-code file using a text editor (such as VS Code).
2. Open the terminal to input commands in order to run the program.
3. Use a "compiler" to **preprocess**, **compile**, and **link** the code to create an **executable** (in a file named a.out or a.exe in the current directory by default) with the command `g++` or `clang++` followed by the filename `helloworld.cpp`.
4. Run the executable with the command `./a.out` for mac or `./a.exe` for pc.