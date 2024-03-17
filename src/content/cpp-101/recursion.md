---
layout: '../../layouts/PageLayout.astro'
title: Recursion
description: In this section, we will cover the importance of recursion!
tags:
  - cpp
  - recursion
  - functions
published: true
lang: cpp
course: cpp-101

order: 9
---
Recursion works because of stack

```cpp
uint64_t factorial(uint64_t n) {
	if (n < 2) return 1;  // base case
	return n * factorial (n-1);
}

factorial(5);
```

For a recursive function, data is stored on the "stack" (memory typically stored in the cache). One call waits for another call which waits for another call until it reaches a base case where a value is returned.

# Fibonacci Sequence:

Every element is a sum of the previous 2:
`0, 1, 1, 2, 3, 5, 8, 13, 21, ...`

The `nth` fibonacci number is equal to the one before that plus the one before that.

```cpp
fib(n) = fib(n - 1) + fib(n - 2);
```

This is untrue for the first or second number!
`fib(0) = 0; fib(1) = 1`

```cpp
uint_64t fib(uint64_t n) {
	if (n < 2) return n;  // base case
	return fib(n - 1) + fib(n - 2);
}
```

