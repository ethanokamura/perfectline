---
layout: '../../layouts/PageLayout.astro'
title: Successor
description: What if we want to find the next largest or smallest node to the current node?
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 4
---

The next feature we should add is the ability to find the next largest or smallest element in the tree. For example, if we had a node with the value of 20, we may want to know what element comes before or after it (in a sorted order).

To do this, we will use two functions:
1. `successor` to find the next largest node in the tree.
2. `predecessor` to find the next smallest node.

If no such value exists, we will return _null_.

These two functions will be very similar except for which branch we traverse down!

For now, let's start with the successor function! The function will execute the following instructions:
1. Check for a _null_ value. This signifies that we are looking at a node that does not exist!
2. Next, we will check if the right child node exists. If so, we return the minimum value from the right branch. (This will be the next largest value following our current node's value)
3. If the right node does not exist. We set a pointer to our current node's parent.
4. While the parent exists and our current node is equivalent to the node on the right, we swap our current node with the parent node.
5. After this completes, we return the next largest value (or return our same node if there was no parent).

Successor:
```cpp
// find next largest node down the tree
// (typically the node to the right)
Node* successor(Node* node) {
  if (!node) return nullptr;
  if (node->right) return min(node->right);
  Node* temp = node->parent;
  while (temp && node == temp->right) {
    node = temp;
    temp = temp->parent;
  }
  return temp;
}
```

We use the same idea for the successor, but this time we are searching for the maximum node on the left side of the tree! To do this, it is as simple as swapping `node->right` for `node->left` and swapping our use of the `min()` function for `max()`.

Predecessor:
```cpp
// find next smallest node down the tree
// (typically the node to the left)
Node* predecessor(Node* node) {
  if (!node) return nullptr;
  if (node->left) return max(node->left);
  Node* temp = node->parent;
  while (temp && node == temp->left) {
    node = temp;
    temp = temp->parent;
  }
  return temp;
}
```