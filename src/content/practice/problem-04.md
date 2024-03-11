---
layout: '../../layouts/PageLayout.astro'
title: Problem 04
description: Min/Max
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 4
---

Using 3 variables (`input`, `max`, and `min`), write a block of code that takes in an undefined amount of integers using `while(std::cin >> input)` where `input` is an integer (remember hit `ctrl-d` to quit `std::cin`). Use if statements to find minimum and maximum values inputted by the user!


When the input stream stops, insert the following message into the terminal:
`the max is [max] and the min is [min]`

Here's an example of inputs with the predicted result:
```
enter at least one integer, press (ctrl-d) to quit:
1 2 4 7 0 123 4
(ctrl-d)

the max is 123 and the min is 0
```
## Possible Solutions:
### C++
```cpp
int input = 0;
std::cout << "enter at least one integer, press (ctrl-d) to quit:\n";
std::cin >> input;
int max = input;
int min = input;
while (std::cin >> input) {
  if (input > max) max = input;
  if (input < min) min = input;
}
std::cout << "the max is " << max << " and the min is " << min << ".\n";
```