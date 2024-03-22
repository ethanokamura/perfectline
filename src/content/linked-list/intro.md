---
layout: '../../layouts/PageLayout.astro'
title: Linked Lists
description: Let's learn about Doubly Linked Lists!
tags:
  - cpp
  - intermediate
  - data-structure
published: true
lang: cpp
course: linked-list
order: 0
---

## List:
Elements probably not laid out sequentially in memory
Access a subscript/index via traversing nodes (which is slow)
Implemented as a "linked list"

## Linked List
Internally has "nodes".

Using this example:
```cpp
char* data = "hello"
```

(Where `data[0] == h` and `data[4] == o`)

In this case we have a char and two pointers in each node:
1. `char data` would be `'h'`
2. `Node *next` would be a pointer to the next node (`'e'`)

## Doubly Linked List
Each list element (ie node) contains a pointer to the next node in the list. Along with the data each node holds.

Here's a basic visual for a linked list!

![](/imgs/cpp/linked_list.svg)

Class `LinkedList` is an archetypal doubly linked list. Where `Node` structures and internal list details are kept private. Also note that all member functions are defined inside the class declaration. (No separate .h and .cpp/.cc files.) Template classes are usually defined this way. For this class, the param `T` is the type of the list elements. You can thing of it as a dynamic or generic way to hold data!

```cpp
tempalte<typename T>
class LinkedList {
  // A forward declaration for a nested type named "Node"
  // We can refer to the Node type in the body of public member functions even though it hasn't been fully defined yet
  struct Node;
 public:
  // Constructors
  // Destructors
  // other public member functions
 private:
  struct Node {
    T data;
    Node* next = nullptr;
  };
  Node* head = nullptr;
  Node* tail = nullptr;
  std::size_t list_size = 0;
};
```

A list type should almost always be a template type
For the same reason that `std::vector` is actually `std::vector<T>`
(ie T is the element type)

## Disadvantages:
1. No direct access (unlike an array)
Address of value at index 5 in an array: (ie a single integer addition).
```cpp
array_variable + 5
```

Address of node representing index 5 in a linked list: (ie multiple pointer dereferences)
```cpp
list_variable.head_->next->next->next->next->next
```

2. Occupies more space than an array (overhead). An array of chars of size 3 holds 3 bytes. A doubly linked list of chars, size 3 holds up to 67 bytes (8 pointers, 3 chars) (more likely 88 bytes - memory alignment on 8-byte boundaries faster for CPU)
3. No spacial locality: (nodes likely not next to each other in memory) May be difficult for COU cache to optimize.

## Advantages:
Compared to other base standard sequence containers (array, vector, deque), lists preform generally better in inserting, extracting and moving elements in any position within the container for which an iterator has already been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms.

Keep in mind `std::list` already exists. If we end up making our own specialized linked-list class for some specific purpose, we should make sure it supports iterators!

## Goals:

For our list, we will want to allow for stuff other STL containers like vectors can do (insert, pop, push, delete, etc). We may need to include overloading operators so we can make copies and comparisons (ie `= == != < > <= >=`).

Like and array, we will most likely need to index our list in the future so an overloaded `[]` operator will benefit us!

We will also want to have iterator-based functions like in `std::list` (and `<algorithm>`). Iterators provide _pointer-like access_ to a position in a data structure. Check out the table on [this](https://cplusplus.com/reference/iterator/) page!

In the case of a doubly linked list, we probably want to implement a [bidirectional iterator](https://cplusplus.com/reference/iterator/BidirectionalIterator/).


If you want to use...

1. Ranged-based for loop
2. `std::sort`
3. `std::find`
4. `std::count`
5. `std::swap`
6. `std::fill`
7. `std::min`
8. `std::max`
9. and other things in `<iterator>`

... you must implement iterators for your custom type!
