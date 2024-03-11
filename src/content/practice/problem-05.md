---
layout: '../../layouts/PageLayout.astro'
title: Problem 05
description: Digit Count
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 5
---
Write a block of code that takes in an integer and counts the amount of digits.

This program should have 2 variables: `num` and `digits`

`there are [digits] digits in the number [num]`

In this program, we should check for negative numbers!

Here are some example inputs with the predicted result:
```
enter an integer:
123

there are 3 digits in the number 123
```
```
enter an integer:
0

there are 1 digits in the number 0
```
```
enter an integer:
-75000

there are 5 digits in the number 75000
```

## Possible Solutions:
### C++
```cpp
int num = 0;
std::cout << "enter an integer:\n";
std::cin >> num;
if (num < 0) num = -num;
while (num > 0) {
  num /= 10;
  digits++;
}
std::cout << "there are " << digits << " digits in the number" << num << '\n';
```
