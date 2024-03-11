---
layout: '../../layouts/PageLayout.astro'
title: Problem 06
description: Sum Of The Vector
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 6
---

Write a program that inputs a series of integers held in a vector. Then use a for loop to find the sum.

Here are some example inputs with the predicted result:
```
enter a series of ints:
> 0 1 2 3 4 5

the sum of the vector is: 15
```
```
enter a series of ints:
> 2 2 2 2 2

the sum of the vector is: 10
```
```
enter a series of ints:
> -1 3 -3 0 3

the sum of the vector is: 2
```
## Possible Solutions:
### C++
```cpp
std::vector<int> vec;
int input;
std::cout << "enter a series of ints:\n";
while (std::cin >> input)
  vec.push_back(input);
int sum = 0;
for (int i : vec)
  sum += i;
std::cout << "the sum of vector is " << sum << '\n';
```