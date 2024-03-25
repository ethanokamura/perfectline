---
layout: '../../layouts/PageLayout.astro'
title: Increasing or Decreasing Numbers
description: if / else statements
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 2
---

Write a basic program that extracts 3 integers. Using a series of if else statements, determine if the numbers are increasing, decreasing, or neither and print the string `increasing`, `decreasing`, or `neither`.

Your program should have 3 integers named `x`, `y`, and `z`!

Here are some example inputs with the predicted result:
```
enter 3 integers:
1 2 3
increasing
```
```
enter 3 integers:
1 3 2
neither
```
```
enter 3 integers:
3 2 1
decreasing
```

## Possible Solutions:
### C++
```cpp
int x,y,z;
std::cout << "enter 3 integers:\n";
std::cin >> x >> y >> z;
if (x < y && y < z) std::cout << "increasing\n";
else if (y < x && z < y) std::cout << "decreasing\n";
else std::cout << "neither\n";
``

