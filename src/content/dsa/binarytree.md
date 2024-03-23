---
layout: '../../layouts/PageLayout.astro'
title: Binary Tree
description: It's like a tree, but in binary...
tags:
  - data-structure
  - binary-tree
published: true
lang: cpp
course: dsa
order: 6
---

A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. These children themselves are binary trees, making binary trees a recursive data structure.

```
        5
       / \
      3   8
     / \   \
    2   4   10
```

In this tree:
- The node with the value 5 is the root node.
- The node with the value 3 is the left child of the root (5), and the node with the value 8 is the right child of the root.
- Similarly, the node with the value 2 is the left child of the node with the value 3, and so on.
- The values 2, 4, and 10 are called leaves. They sit at the bottom of the tree.

A binary tree can be held in something like an array!
With the first example, it would be held in an array that looks like this: `[ 5, 3, 8, 2, 4, null, 10 ]`

The above example is of a tree that is considered "nearly complete" because the tree still has an open space at its lowest level. A completed binary tree would look something like this:

```
         10
        /  \
       /    \
      3      8
     / \    / \
    2   4  3   1
```
