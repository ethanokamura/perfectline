---
title: Delete
description: How can we delete elements?
tags:
  - data-structure
  - binary-search-tree
published: true
lang: cpp
course: bst
order: 6
---

Finally, we will want some sort of functionality to delete nodes from our tree. This will be the most complex portion of the data structure. If we need to delete a node with children, then we need the next largest node to take the place of the current node to be deleted.

## How it works:
1. First, check if the tree is not empty. If it is, we return without doing anything.
```cpp
if (!node) return;
```
2. Next, we assign a temporary node to keep track of the target node we want to delete.
```cpp
Node* target = (!node->left || !node->right) 
                ? node 
                : successor(node);
```
3. Set the child node. If the target has a left child, we will set the child to the left child otherwise, we set it to the right child.
```cpp
Node* child = (target->left) ? target->left : target->right;
```
4. Finally, if the child exists, we set it's parent to the target's parent.
```cpp
if (child) child->parent = target->parent;
```
5. We then need to determine if the node has a parent. If so, which child node is our target?
	1. If there is no parent node, then our root becomes the child and we are done.
	2. If the target is the parent's left node, we set the parent's left node to the target's child.
	3. If the target is the parent's right node, we will set the parent's right node to the target's child.
```cpp
  if (!target->parent)
    root = child;
  else if (target == target->parent->left)
    target->parent->left = child;
  else
    target->parent->right = child;
```
6. If our target is not equivalent to the starting node, we set the starting node's value to the target's value.
```cpp
if (target != node)
  node->key = target->key;
```
7. Finally, we delete the target and decrease the amount of nodes in our tree.
```cpp
delete target;
n--;
```

## Final result:

```cpp
// O(h)
// delete a specific node in the tree
void delete_node(Node* node) {
  // check to make sure the tree isn't empty
  if (!node) return;

  // value to be stranded
  // if the target has 0 or 1 child(ren) then we set it to the current node
  // if the node has two children, we set the target to the successor node
  Node* target = (!node->left || !node->right) ? node : successor(node);

  // set child node
  Node* child = (target->left) ? target->left : target->right;
  // reassign parent (first disconnection)
  if (child) child->parent = target->parent;

  // check if node has a parent
  // if so, figure out what child it is
  if (!target->parent)
    root = child;
  else if (target == target->parent->left)
    target->parent->left = child;
  else
    target->parent->right = child;
  // if target is different than the node param
  if (target != node)
    node->key = target->key;
  // delete target!
  delete target;
  n--;
}
```