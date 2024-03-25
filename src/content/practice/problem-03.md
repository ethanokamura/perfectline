---
layout: '../../layouts/PageLayout.astro'
title: fizzbuzz
description: Fizzbuzz
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 3
---

Extract any integer from the standard input and do the following:
1. If the number is divisible by 3, print fizz
2. If the number is divisible by 5, print buzz
3. If the number is divisible by both 3 and 5 print fizzbuzz
4. If it is neither divisible by 5 or 3, print the number

(Hint, use the modulus operator `%` to find the remainder of an integer)
```
9 % 2 == 1
8 % 2 == 0
```

The program should hold 2 variables an empty string called `fizzbuzz` and an integer `n`.

Here are some example inputs with the predicted result:

```
enter an integer:
3
fizz
```
```
enter an integer:
5
buzz
```
```
enter an integer:
15
fizzbuzz
```
```
enter an integer:
4
4
```

## Possible Solutions:
### C++
```cpp
int n = 0;
std::string fizzbuzz;
std::cout << "enter an integer:\n";
std::cin >> n;
if (n % 5 == 0 && n % 3 == 0) fizzbuzz = "fizzbuzz";
else if (n % 3 == 0) fizzbuzz = "fizz";
else if (n % 5 == 0) fizzbuzz = "buzz";
else std::cout << n << '\n';
```