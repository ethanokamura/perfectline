---
layout: '../../layouts/PageLayout.astro'
title: Search
description: How do we find nodes within the tree?
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 2
---

When we search for data, we use code very similar to a binary search (thus the name binary search tree). We will check to see if the value of a certain node is greater than, less than, or equal to the value we are searching for.

If it is greater, we start the search again for the right child. If it is less, we start the search from the left child.

When the value of the current node is equivalent to the target value, we return.

Because we are accessing nodes directly, we will need to make sure that the actual search function is private, and we instead use a public wrapper function called `find()` to search for a specific value.

We will always want to start at the root and work our way down the tree, so our public wrapper will search for the element starting at the root.

private:
```cpp
// O(h)
// Find the value inside the structure
Node* search(Node* node, int key) {
  // found or not found
  if (!node || node->key == key) return node;
  // search left or search right
  if (key < node->key) return search(node->left, key);
  return search(node->right, key);
}
```

public wrapper:
```cpp
// public wrapper for search
bool find(int key) { return search(root, key) != nullptr; }
```
