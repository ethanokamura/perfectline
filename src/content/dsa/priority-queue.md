---
layout: '../../layouts/PageLayout.astro'
title: Priority Queue
description: Let's create a priority queue using a heap!
tags:
  - cpp
  - data-structures
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 8
---

A priority queue is a queue where the element with the highest value is removed first. Taking from the queue's FIFO system, we can manipulate the ranking by raising one element's priority. Unlike the queue, first out is not based on time, but rather it's ranking.

To hold our queue, we will use a heap.

## The Heap
Our heap will be partially ordered and each value in a node is at most the value of its parent node!

For this, an array will be sufficient to hold our data in our heap.

In our case, the hieght of a node in the tree is O(lgn) - we will have nodes at height log n

## The Queue
For now, we will create a minimum priority queue, meaning the lower the element's ID the faster it will be removed. To increase it's priority, we will decrease the key's value.

Given that the heap is built on an array, we must have a fixed size for our queue.

## The Functions

Here are our main functions that we want to create:
```cpp
class IntMinHeap {
 public:
  IntMinHeap(int);                   // empty heap wth apacity
  ~IntMinHeap();                     // clean up allocated memory
  std::pair<int*, int> heap_sort();  // return sorted array and size from heap
  std::string to_string();
  bool heap_insert(int);        // add element to heap; return success
  int minimum();                // min functions should return 0 in empty heaps
  int extract_min();            // return and remove A[root]
  void decrease_key(int, int);  // A[i] decreased to k
  bool is_empty();
  bool is_full();

 private:
  int min_of_three(int, int, int);  // finds the smallest value of up to 3 ints
  int left(int);                    // find left child of index i
  int right(int);                   // find right child of index i
  int parent(int);                  // find parent of index i
  void build_heap();
  void heapify(int);      // heapify at position i
  void swap(int&, int&);  // swap positions
  int* A;                 // array of integers - data
  int capacity;           // size of array A
  int size;               // data size in array
};
```