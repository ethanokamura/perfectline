---
layout: '../../layouts/PageLayout.astro'
title: Quicksort
description: Divide and Conquer
tags:
  - cpp
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 8
---

Quicksort is a classic sorting algorithm where, in simple terms, we break up a list into smaller lists.

Given a list: `[ 2, 5, 3, 1, 4 ]`

We want to accomplish the following tasks:
1. Find the start and end!
2. Calculate the pivot point typically the middle index: (start + end) / 2
3. Next, we partition the array.
    - It might be easier to think of start and end as left and right from here on out.
4. We want to put all the numbers smaller than the pivot into to the left partition and all the numbers greater than the pivot into the right partition.
5. If they are out of place, swap the numbers at the left and right indecies.
6. Once the left is greater than or equal to the pivot and right is less than or equal to the pivot, we reapeat the process.
7. When left and right cross eachother, our list is correctly partitioned.

This may look something like this:
```
while left <= right
  while array[left] < pivot
    left++
  while array[right] > pivot
    right--
  if left <= right
    swap(array[left], array[right])
    left++
    right--
return left
```

This would end up looking something like this:
```
[ 2, 5, 3, 1, 4 ]  <- left is 2, right is 4, pivot is 3
[ 2, 1, 3, 5, 4 ] first sort
[ 2, 1, 3 ] [ 5, 4 ] partition
```
Repeat for each partition
```
[ 2, 1, 3 ]  <- left is 2, right is 3, pivot is 1
[ 1, 2, 3 ] sort
[ 1 ] [ 2, 3 ] partition
```
Repeat again
```
[ 2, 3 ]  <- left is 2, right is 3, pivot is also 2
[ 2, 3 ] sort
[ 2 ] [ 3 ] partition
```
As you can see, quicksort is recursive in nature. For this section, we are looking at Lomuto's take on the quicksort algorithm. It as written as such:

```cpp
// lomuto's implimentation of quicksort
void quicksort(std::vector<int>& list, int start, int end) {
  if (start < end) {
    int pivot = partition(list, start, end);  // create partition
    quicksort(list, start, pivot - 1);        // sort left half
    quicksort(list, pivot + 1, end);          // sort right half
  }
}
```

We implement the partition as so where `pivot` is the middle point and `boundary` is the lower bound.
```cpp
int partition(std::vector<int>& list, int left, int right) {
  int mid = (left + right) / 2;
  int pivot = list[mid];
  int boundary = left - 1;
  for (int i = left; i < right; i++) {
    if (list[i] <= pivot) {
      boundary++;
      std::swap(list[boundary], list[i]);
    }
  }
  std::swap(list[boundary + 1], list[right]);
  return boundary + 1;
}
```

For this code example, we are only dealing with integer values!

If you are curious, the best case scenario for quicksort, the sorting is done in O(nlogn) time complexity. Worst case, we get O(n<sup>2</sup>) time complexity. As for space complexity, quicksort uses O(logn).

Typically, quicksort is best at sorting a random list of data and slowest when sorting pre-sorted data