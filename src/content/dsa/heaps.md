---
layout: '../../layouts/PageLayout.astro'
title: Heaps
description: A nearly complete binary tree
tags:
  - cpp
  - data-structures
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 7
---

A heap is a nearly complete binary tree that respects the heap property.

To clear up confusion, a nearly copmlete binary tree is complete at every level except for the last. Note that the last level is contiguous (left to right)

The tree on the left is nearly complete and the tree on the right is incomplete:
```
         10              10
       /    \           /  \
      5      8         3    8
     / \    /              / \
    2   1  3              3   1
```
The heap is a "lazy" data structure.

Normally in life, being lazy is deemed as a bad thing, however, in programming, we try to be as lazy as possible.
