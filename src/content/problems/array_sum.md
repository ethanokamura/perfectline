---
title: Array Sum
description: Find The Sum of An Array
order: 2
---

```cpp
int sum_of_array(int* arr, unsigned int SIZE) {
  int sum = 0;
  for (int i = 0; i < SIZE; i++) sum += arr[i];
  return sum;
}
```
