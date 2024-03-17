---
layout: '../../layouts/PageLayout.astro'
title: Complexity
description: How complex is our structure or algorithm?
tags:
  - cpp
  - data-structures
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 4
---

When we talk about algorithmic complexity, there are two main types:
1. Time complexity (Relative accoring to a metric)
2. Space complexity (memory usage)

## Space Complexity
How much memory do we need to run the algorithm?

Here's an example:

Take an array-like input of size `n`
```
[ 0, 1, 2, 3, 4, ..., n-1 ]
```
For finding something like a max, it takes a **constant** amount of storage. This is known as an **in place** algorithm.

In "big O" notation, an "in place" algorithm looks like `O(k)` where k is just some constant (like 5).

## Time Complexity
What happens when data is large?

With the same example of an array-like input of size `n`
```
[ 0, 1, 2, 3, 4, ..., n-1 ]
```

We might ask: How much wrok does an algorithm do in realtion to n?

To answer this, we take a key operation (like sort, swap, mult, etc) that's "inside the loop". We then count how many times it occurs relative to `n`.

In general, constant time (or "in place" complexit) is the fastest and exponential like some number to the power of `n` is the slowest.

Here's a graph:

![](/imgs/time_complexity.png)