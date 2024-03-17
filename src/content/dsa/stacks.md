---
layout: '../../layouts/PageLayout.astro'
title: Stacks
description: They're like pancakes...
tags:
  - cpp
  - data-structures
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 2
---

A stack is a data structure that works fairly intuitively. You have a stack of data that you can pull from.

Like a stack of pancakes, the first one on the plate is the last one to be eaten.

This type of system is known as "LIFO" or "last in first out".

With stacks, you can only access the data on the top or bottom of the stack, but not both. You can either add to the stack or remove/delete the value that was most recently added.

For example, let's look at the list: `[ 1, 2, 3, 4 ]`

```
start: [ 1, 2, 3, 4 ]
add zero: [ 0, 1, 2, 3, 4 ]
remove 3: [ 3, 4 ]
```

When we implement stacks, we use an internal data structure.

Here's an example of a stack (with generic data) using a linked list behind the scenes:

```cpp
// Defines a stack that uses a doubly-linked list as a data structure.
template <typename T>
class Stack {
 public:
  // default constructor
  Stack() : _ll{} {}
  // list constructor
  Stack(std::initializer_list<T> init_list) {
    for (const std::string& val : init_list)
      this->_ll.push_front(val);
  }
  // pushes a string to the top of the stack
  void push(T val) { this->_ll.push_front(val); }
  // pops off the top value in the stack
  void pop() { this->_ll.pop_front(); }
  // returns the data at the top of the stack
  T& top_data() { return this->_ll.front(); }
  // checks if the stack is empty (bool return value)
  bool is_empty() { return this->_ll.empty(); }
  // returns the size of the stack
  int size() { return this->_ll.size(); }
 private:
  LinkedList<T> _ll;
};
```

The way we used the linked list is with something called composition. It is a method of "reusing code".

It is important to check to make sure that when we manipulate the stack, we are always within bounds and are not trying to access memory that does not exist. For me, I took care of the memory issues and bounds checking within my `LinkedList` class, however, this can be done in the Stack itself.