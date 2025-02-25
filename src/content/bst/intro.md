---
layout: '../../layouts/PageLayout.astro'
title: Binary Search Tree
description: Desc
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 0
---

## Binary Tree:

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

## Overview:

Let's make a Binary Search Tree! You can think about it like a _dynamic search tree_.

Typically, the first data structure we might think of when inserting, deleting, and searching for elements would be a `map`. However, we may want more...

What if we want to know the minimum and maximum values within our data set or what element comes before or after our current element (without requiring sorting)? Finally, we might want to traverse our dataset as well. With these things in mind, a standard `std::map` would not suffice.

Now, we introduce the _Binary Search Tree_. It is a tree-like structure that inserts elements based on the value of each element. Elements with a higher value go down the tree on the right side, and lower values go to the left.

Similar to our _disjoint set_, the best and worst-case scenarios can affect the speed of this structure.

Worst:
```
  1
   \
    2
     \
      3
       \
        4
```

Best:
```
      4
     / \
    2   5
   / \   \
  1   3   6
```

Unlike our disjoint set, our tree will not be self-healing. If you need to use self-healing trees, refer to the AVL Tree or the Red-Black Tree

## So What Is A Binary Search Tree (BST)?
Simply put, a binary search tree is a tree that respects the BST property. It relates the values of a node to its children assuming unique keys:
- `x.left.key < x.key`
- `x.right.key > x.key`

```
      x
     / \
    /   \
  left  right
```

## Binary Search Tree Functions:
Inside our BST, our member functions will mostly consist of recursive functions! It will make our code easy to read and write without too many downsides.

 We will likely want public _wrapper functions_ to pair with the private member functions that directly manipulate data.
