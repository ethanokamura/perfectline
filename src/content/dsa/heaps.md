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

To clear up confusion, a nearly complete binary tree is complete at every level except for the last. *Note that the last level is contiguous (left to right)

The tree on the left is nearly complete and the tree on the right is incomplete:
```
         10              10
       /    \           /  \
      5      8         3    8
     / \    /              / \
    2   1  3              3   1
```
The heap is a "lazy" data structure.

Normally in life, being lazy is deemed a bad thing, however, in programming, we try to be as lazy as possible.

Now let's create a priority queue using a heap data structure

## Our Heap
Our heap will be partially ordered and each value in a node is at most the value of its parent node!

For this, an array will be sufficient to hold our data in our heap.

## Priority Queue
A priority queue is a queue where the element with the highest value is removed first. Taking from the queue's FIFO system, we can manipulate the ranking by raising one element's priority. Unlike the queue, first out is not based on time, but rather its ranking.

For now, we will create a minimum priority queue, meaning the lower the element's ID the faster it will be removed. To increase its priority, we will decrease the key's value.

Given that the heap is built on an array, we must have a fixed size for our queue.

In our queue, we will need the following functions:
1. `Heapify()` to preserve the heap property!
2. `Heapsort()` to turn the heap into a sorted array
3. `HeapInsert()` to add new values
4. `ExtractMin()` to remove the highest priority element
5. `DecreaseKey()` to prioritize an element (move them up in the queue)

We will also need helper functions to keep track of relations within the heap (like the left, right, and parent nodes).

Remember that the left and right nodes are the left and right children of the current node we are working with. For example, 2 (left) and 3 (right) would be child nodes of 1:
```
    1
   / \
  2   3
```
These left, right, and parent functions are included in the git repository attached above.

One thing to note is that our heap will only take integer values! This structure will work with other data types, but for simplicity, we will use integers.


### Heap Insert
The first thing we will most likely want to do is insert values into the heap! To do this, we will need to accomplish the following tasks:
1. Make sure the heap is not already full (again we are working with arrays)
2. Increase the size of the heap
    - I created a private variable called size that keeps track of the maximum filled index. This is different than the capacity!
3. Insert the desired value into the end of the heap
5. Finally we want to decrease the keys value to make sure that the heap is partially ordered how we would expect. To do this, we call the decrease key. (Notice we increased the value of the data we are injecting so that way we can decrease it. More on this later)
4. Return true upon success!
```cpp
bool heap_insert(int val) {
  if (is_full()) return false;
  size++;
  arr[size - 1] = val + 1;
  decrease_key(size - 1, val);  // code this next
  return true;
}
```

### Decrease Key (Promoting the Element)
After we call the insert function, we may want to restructure our heap to make sure it keeps the properties we want. This takes two parameters. The index we want to edit and the value we want to prioritize. To do this, we need to follow to do the following:
1. Check to make sure our decrease is valid
2. Set the value at our index equal to the value we want to decrease
3. Loop while the index has not reached the top of the tree and while the value at the index is still less than that of its parent. This means that the value above it (in the tree) is not properly sorted.
4. Inside the loop, we will swap our current index with the parent index
5. We then set the parent's index equal to our current index.
6. Repeat until the conditions are met and the heap is sorted enough to our liking!

Note that you can easily write your swap function here or use the swap function from `<utility>`
```cpp
void decrease_key(int index, int val) {
  if (index < 0 || index >= size || arr[index] <= val) return;
  arr[index] = val;
  while (index > 0 && arr[parent(index)] > arr[index]) {
    std::swap(arr[index], arr[parent(index)]);
    index = parent(index);
  }
}
```

### Heapify
Heapify is arguably the most important function in this data structure. It acts as the backbone for this entire system! I find it fitting to work on this next. The goal is to move higher-priority values to the front of the heap.

It takes a parameter of the index in which we want to heapify our tree! From there, we pretty much just swap the value with its child values (given the child values are of higher priority than the current index). If the current value is a higher priority than that of its children, then we just move on.

Heapify is short and sweet, but extremely powerful. Here's my implementation:
```cpp
void heapify(int index) {
  int min = min_of_three(index, left(index), right(index));
  if (min != index) {
    std::swap(arr[index], arr[min]);
    heapify(min);
  }
}
```
Heapify is a recursive function that will continue to swap the minimum value with the current value at the desired index! Note that the function `min_of_three()` is not covered, but it just returns the minimum value between 3 integers. If you want to see the code feel free to check out the git repository attached above!

### Extract Min
This structure would not be a queue if we did not remove our highest-priority element! To do this, we use a function called `extract_min()`!

It will return the value that was extracted.

In this function, we will do the following:
1. Make sure there is a value to extract
2. Assign a variable to hold the value of the highest priority element (in our case the root of the tree).
3. Move the current highest priority element to the end of the list.
4. Make the list shrink to remove the element.
5. Heapify once again to partially order the heap!
```cpp
int extract_min() {
  if (is_empty()) return 0;
  int min = arr[0];
  arr[0] = arr[size - 1];
  size--;
  heapify(0);
  return min;
}
```

### Heap Sort
We may want to completely sort the heap at some point. To do this, we will create a function called heap sort. This will create a copy of our heap, sort it, and return the copy!

This function takes no parameters, but returns the sorted array and the size of that array!
  - note that the size of the sorted array is not equal to the capacity of our heap's array. Instead, it is equal to the total number of assigned elements in the heap.

This function will order them in descending order, meaning from lowest priority to highest priority!

This function is quite long and takes a lot of steps! So, without any more yapping, let's break it down:
1. Check to see if the heap is empty. If it is, return an empty array of size 0.
2. Create a new array with the size of the total number of elements in the heap.
3. Copy the elements from the heap into our new array (`temp_arr`).
4. Create an array (`old_arr`) that points to our old array.
5. Set our heap's array equal to the `temp_arr`.
6. Keep track of our size!
7. Loop through the elements in the array and sort them!
8. Shrink the array so that the sorted elements are removed.
9. Heapify to rebuild the structure.
10. Repeat until the index reaches the front of the heap (top of the tree)
11. Create a pair with the sorted array.
12. Point our heap's array to the previous memory address held by `old_arr`.
13. Return the pair.

```cpp
// sorts the heap and returns an array and its size
std::pair<int*, int> heap_sort() {
  if (is_empty()) return std::pair<int*, int>(nullptr, 0);
  int* temp_arr = new int[size];
  for (int i = 0; i < size; i++) temp_arr[i] = arr[i];
  int* old_arr = arr;
  arr = temp_arr;
  int old_size = size;
  for (int i = size - 1; i >= 0; i--) {
    std::swap(arr[0], arr[i]);
    size--;
    heapify(0);
  }
  size = old_size;
  std::pair<int*, int> _pair(arr, size);
  arr = old_arr;
  return _pair;
}
```
Just like that! We have a working priority queue and heap!

## In Conclusion
We finally created the main components and functions in our priority queue using the heap as a data structure. You will want to run tests and double-check that your code functions as expected! Again, to see the completed code, check out the git repository at the top!