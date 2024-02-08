---
layout: '../../../../layouts/PageLayout.astro'
title: Constructors
description: In this section, we will cover the importance of {title}!
categories:
  - cpp
  - beginner
  - basics
published: true
lang: cpp
order: 13
---
When we create classes and structs, we need to also talk about [constructors](https://www.w3schools.com/cpp/cpp_constructors.asp)! 
### Default Constructors: 2 Examples
1. Example #1: no constructors defined. Member variables exist, with default initialization.
```cpp
class X {
 private:
	 int var;
};

X obj;  // the value of obj.var is garbage! (never initialized)
```

2. Example #2: class has a parameterless constructor (just a regular constructor)
```cpp
class X {
 public:
	X() : var(100) {}
 private:
	int var;
}

X obj;  // the value of obj.var is 100.
```

More on  [Default Constructors](https://en.cppreference.com/w/cpp/language/default_constructor)

### Copy Constructors:
Purpose: Initialize an object using another object of the same type (thus creating a copy).
```cpp
std::vector<int> a{ 1, 2, 3 }
std::vector<int> b(a);
std::assert(a == b && &a != &b);
```

This code example shows that we have successfully copied `a` to `b`, but they have unique memory addresses!

_Transfers ownership of pointer(s). No copies of internal data are made._

Classes with pointer members or other _non-trivial_ initialization need customized copy constructor. Otherwise, just let the compiler do it. Same goes for a [Move Constructor](https://en.cppreference.com/w/cpp/language/move_constructor)! 

More on [Copy Constructors](https://en.cppreference.com/w/cpp/language/copy_constructor).

### Initializer List Constructor
Purpose: Initialize an object using a list of values (in braces). 

ie `std::vector<int> a{ 1, 2, 3 };`

An initializer_list object is iterable with `begin()` and `end()` functions. 

### Range Constructor:
Purpose: initialize an object using a range of values specified by iterators.

Here's an example:
```cpp
std::string test("hello!");
std::string reversed(test.rbegin(), test.rend());
```

