---
layout: '../../layouts/PageLayout.astro'
title: Single Number
description: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
type: array
order: 0
problem: https://leetcode.com/problems/single-number/
---

## Problem
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Examples
```
[2,2,1] -> 1
[4,1,2,1,2] -> 4
[1] -> 1
```

## Thought Process
My first thought is to use a map to store key value pairs. The elements in the array will be keys and the amount of times they occur will be values.

After they are inserted into the map. I will loop through the map to find the key with the value of 1.

If we think of time complexity. Having two loops, one O(n) and one that goes until we find the key value pair that has a value of 1 (which will be <= n). Therefore, our time complexity will be O(n) + O(n) or ... just O(n).

## First Solution
My first solution works! But is very slow and takes up wayyy too much space. Time to rework.
```cpp
int singleNumber(vector<int>& nums) {
  if (nums.size() == 1) return nums[0];
  unordered_map<int,int> table;
  for (int i : nums)
    table[i]++;
  for (auto const& it : table)
    if (it.second == 1)
      return it.first;
  return -1;
}
```

## Second Solution
Looking back on the first solution, I realized that there is most likely a better way to do this than to store values in a map. Using a key value table would likely be overkill for what I am trying to do.

For this next solution, I tried sorting the array, and then removing any duplicate values... This also didnt work, but it was a definite improvement.

```cpp
int singleNumber(vector<int>& nums) {
  sort(nums.begin(), nums.end());
  while (nums.size() > 1) {
    if (nums[nums.size() - 1] == nums[nums.size() - 2]) {
      nums.pop_back();
      nums.pop_back();
    } else {
      return nums[nums.size() - 1];
    }
  }
  return nums[0];
}
```

## Third Solution
For the third solution, I realized that I could sort the list and compare the current and next element in `nums`. If they did not match, I would return the current element, otherwise I would increment `i` twice.

Finally, if there were no single elements found, it meant that the last item was the single element, so we return the last element.

This process once again gave us slightly better results, but still was not good enough for me. It wasn't until I did some research that I found the correct, most efficient solution.
```cpp
int singleNumber(vector<int>& nums) {
  if (nums.size() == 1) return nums[0];
  sort(nums.begin(), nums.end());
  for (int i = 0; i < nums.size() - 2; i++) {
    if (nums[i] == nums[i + 1]) i++;
    else return nums[i];
  }
  return nums[nums.size() - 1];
}
```

## Final Solution

Though all three of the previous solutions work fine. The final solution was right under our nose the entire time. It required the bitwise XOR operator.

I found this on [GeeksForGeeks](https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/)

"The bitwise XOR operator is the most useful operator from a technical interview perspective."
- "It is used in many problems. A simple example could be “Given a set of numbers where all elements occur an even number of times except one number, find the odd occurring number” This problem can be efficiently solved by doing XOR to all numbers."

Therefore, the best, fastest solution is actually only a few lines of code:
```cpp
int singleNumber(vector<int>& nums) {
  int n = 0;
  for (int i : nums)
    n ^= i;
  return n;
}
```

We loop through and compare each value using the bitwise XOR operator!