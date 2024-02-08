---
layout: '../../../../layouts/PageLayout.astro'
title: Arrays
description: In this section, we will cover the importance of {title}!
categories:
  - cpp
  - intro to programming
  - data structures
published: true
order: 6
---

An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. _strings are an array of characters_ (`char[]`).

For example, think of an array like a shelf with different compartments. Each compartment can hold one item, and all the items on the shelf are of the same kind (like all books or all shoes).

Here's a simple example in pseudocode:

```cpp
auto my_array[] = { item1, item2, item3, ... }
```

So, `my_array` could be a collection of numbers, names, or any other type of data. You can access the items in the array using an index (which is like the compartment number). The first item starts at index 0.

For instance, if you have an array of numbers:

```cpp
int numbers[5] = { 10, 20, 30, 40, 50 }
```

You can access them like this:
`numbers[0]` gives you `10`
`numbers[1]` gives you `20`
`numbers[4]` gives you `50`

Arrays are really useful for storing and organizing data in your programs!

One thing to note is that arrays cannot be resized. Meaning that if you have an array that is initialized with a size of 3, you cannot change its size to 2 or 4! To make this known, we use the `const` keyword, more on this below.

Arrays index as far as the length or size of the array -1. They are used to hold multiple items under one variable name. Remember the items in the array must be of the same variable type.

Meaning that an array such as this one named "arr" `arr[] = { 1, 2, 3 }` has a size of 3, but only reaches an index of 2. Use the following as reference:

```cpp
arr[0] == 1
arr[1] == 2
arr[2] == 3
```

There are a few ways to initialize an array. Here are 3 examples:
```cpp
int arr1[] = { 1, 2, 3 };

int arr2[3] = { 1, 2, 3 };

const int SIZE = 3;
int arr3[SIZE] = { 1, 2, 3 };
```
You might notice in example 3, we use the `const` key word. As discussed above, `const` means that we initialize a variable with a value that cannot be manipulated or changed. In the case of arrays, this is exactly what we want to use. `const` variables are typically written in all caps to make it easy to remember.

### Array Examples In C++:

```cpp
#include <iostream>
#include <string>

int main () {
  std::string cat = "milo!";
  // This outputs "m!"
  std::cout << name[0] << name[4] << '\n';

  const int SIZE = 3;
  char greeting[SIZE] = { 'H', 'i', '!' };
  // This outputs "Hi!"
  std::cout << name[0]
            << name[1]
            << name[2] << '\n';
}
```