---
layout: '../../layouts/PageLayout.astro'
title: Functions
description: In this section, we will cover the importance of {title}!
tags:
  - cpp
  - intro to programming
  - functions
published: true
lang: cpp
course: cpp-101
order: 8
---
Functions are "self-contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it can be used over and over and over again. Functions can be "called" from the inside of other functions.

A function can even call itself in the function body. This is called recursion and will be covered in the advanced C++ course.

Here's an example of a function to calculate the volume of a triangular prism:
```cpp
#include <iostream>

double PrismVolume(double length, double width, double height) {
	double base = length * width;
	double volume = (height/3) * base;
	return volume;
}

int main () {
  double length = 3;
  double width = 3;
  double height = 9;
  std::cout << "The volume of a prism with the length "
            << length << ", width "
            << width << ", and height "
            << height << " is: "
            << PrismVolume(length,width,height) << '\n';
	return 0;
}
```
The function will return a `double` with the value of `27`.

The overall output should return the following:
`The volume of a prism with the length 3, width 3, and height 9 is: 27`.