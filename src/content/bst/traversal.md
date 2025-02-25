---
layout: '../../layouts/PageLayout.astro'
title: Traversal
description: Now it's time to navigate our tree.
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 5
---

We may want to traverse our tree. We can do this in three different ways
1. inorder
2. preorder (not super useful)
3. postorder (not super useful)

In order traversal will likely be the only important output for our tree, but it is important to understand how the others work (and they are easy to implement).

Goal: Touch all nodes in the tree recursively.  $O(n)$

In this specific example, I store the list inside a `vector`.

Let's work through the in-order traversal:
1. We check to see if our node does not exist. If so, we return (the traversal is complete).
2. We recursively call the function to the left branch (this will get the left branch in order from smallest to largest).
3. We add the value of the current node into the list.
4. We recursively call the function on the right side of the branch to get the largest values!

In-order Traversal:
```cpp
// O(n)
// build a list with inorder traversal
void in_order(Node* x, std::vector<int>& list) {
  if (!x) return;
  in_order(x->left, list);
  list.push_back(x->key);
  in_order(x->right, list);
}
```

Pre-order Traversal:
```cpp
// O(n)
// build a list with preorder traversal
void pre_order(Node* x, std::vector<int>& list) {
  if (!x) return;
  list.push_back(x->key);
  in_order(x->left, list);
  in_order(x->right, list);
}
```

Post-order Traversal:
```cpp
// O(n)
// build a list with postorder traversal
void post_order(Node* x, std::vector<int>& list) {
  if (!x) return;
  in_order(x->left, list);
  in_order(x->right, list);
  list.push_back(x->key);
}
```

As you can see the post and pre-order traversal just changes the location we insert our elements into the list.