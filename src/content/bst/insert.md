---
layout: '../../layouts/PageLayout.astro'
title: Insert
description: Let's add some data!
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 1
---

We will need some way to insert data into our tree. To do this, we will search the tree for an acceptable place to insert our new node based on the data point's value. To deal with duplicate values, we will return from the function without inserting anything!

## How it works:
1. Check to see if the value exists. If so return false.
```cpp
if (find(val)) return false;
```

2. Create a new node for the data we want to add. 
```cpp
Node* node = new Node(val);
```
3. Check to see if the tree is empty, if so set the root to the new node.
```cpp
if (!root) {
  root = node;
  n++;
  return true;
}
```
4. Set a placeholder node to keep track of the previous node we have traversed over. Set a placeholder node to keep track of the current position in the tree.
```cpp
Node* prev = nullptr;
Node* current = root;
```
5. We will use a while loop to evaluate if our new node's value is less than or greater than the current node's value. If it is less, we set our current node to the left child, otherwise, we set the current node to the right child.
```cpp
while (current) {
  prev = current;
  if (val < current->key)
    current = current->left;
  else
    current = current->right;
}  // current is guaranteed null
```
6. Now we need to attach the node to the tree. We will first set the new node's parent to the previous node.
```cpp
// first attachment
node->parent = prev;
```
7. Next, depending if the new node's value is greater than or less than the parent's node, we will set the new node to either the left or right child of the parent node.
```cpp
// second attatchment
if (val < prev->key)
  prev->left = node;
else
  prev->right = node;
```

## Final result:
```cpp
// O(h)
// insert a value if it is not already inside the structure
bool insert(int val) {
  // check if value already exists
  if (find(val)) return false;
  Node* node = new Node(val);
  // check if it's empty
  if (!root) {
    root = node;
    n++;
    return true;
  }
  Node* prev = nullptr;
  Node* current = root;
  // find the correct empty spot to insert val
  while (current) {
    prev = current;
    if (val < current->key)
      current = current->left;
    else
      current = current->right;
  }  // current is guaranteed null
  // first attachment
  node->parent = prev;
  // second attatchment
  if (val < prev->key)
    prev->left = node;
  else
    prev->right = node;
  n++;
  return true;
}
```