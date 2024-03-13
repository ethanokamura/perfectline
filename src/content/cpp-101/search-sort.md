---
layout: '../../layouts/PageLayout.astro'
title: Search and Sort algorithms
description: In this section, we will cover the importance of algorithms!
tags:
  - cpp
  - algorithms
  - search
  - sort
published: false
lang: cpp
course: cpp-101
order: 15
---
_Much of the time/effort/energy spent by computer programs involves searching and sorting data_

"Algorithmic Efficiency" - how many resources a computer needs to expend to process an algorithm

### Searching for Values in Dataset:
Two simplest search algorithms:
1. Linear Search of `n` Items:
	1. Searches a structure (ex. an array/list) element by element
	2. Performs `n` comparisons if searching for a nonexistent value
		1. Minimum comparisons: 1
		2. Maximum comparisons: `n`
		3. Data does not need to be ordered
2. Binary Search of `n` values:
	1. Searches pre-sorted indexed structure (ex. an array/list)
	2. Performs log base 2 `n` comparisons if searching for a nonexistent value
	3. Cuts structure in half each time
		1. Minimum comparisons: 1
		2. Maximum comparisons: log base 2
		3. Data must be ordered

Pseudo code example of a binary search: (Assuming data is already sorted)
1. Inspect middle value
2. Check if the middle value is less, greater or equal to your desired value
3. Continue until `value == target`

```
function BinarySearch(haystack, needle):
	low = 0, high = len(haystack) - 1
	while low <= high:
		mid = (low + high) / 2 <- index between low and high
		if haystack[mid] == needle then return mid
		else if haystack[mid] > needle then high = mid - 1
		else low = mid + 1
	return -1
```

### Sorting Datasets:

