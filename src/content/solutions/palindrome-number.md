---
layout: '../../layouts/PageLayout.astro'
title: Palindrome Number
description: Given an integer x, return true if x is a palindrome, and false otherwise.
type: misc
order: 0
problem: https://leetcode.com/problems/palindrome-number/description/
---

## My Solution
```cpp
bool isPalindrome(int x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) return false;
  if (x < 10) return true;
  long long r = 0;
  while (x > r) {
    r = r*10 + x%10;
    x /= 10;
  }
  return (x == r) || (x == r/10);
}
```