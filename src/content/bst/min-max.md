---
layout: '../../layouts/PageLayout.astro'
title: Min / Max
description: What if we want to know the minimum and maximum values?
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 3
---

### Min / Max:
Next, we may want to find the minimum and maximum values in our tree! This is fairly simple and intuitive to implement.

To find the minimum element, we go down the tree on the left most side until the left child is _null._ If the child is null it means that the current node contains the minimum value.

To find the maximum, we do the same thing, but instead traverse down the right side of the tree.

Minimum:
```cpp
// O(h)
// Find the smallest value inside the structure
Node* min(Node* node) const {
  if (!node) return nullptr;
  while (node->left) node = node->left;
  return node;
}
```

Maximum:
```cpp
// O(h)
// Find the largest value inside the structure
Node* max(Node* node) const {
  if (!node) return nullptr;
  while (node->right) node = node->right;
  return node;
}
```
