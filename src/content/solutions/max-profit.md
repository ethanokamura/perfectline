---
layout: '../../layouts/PageLayout.astro'
title: Best Time to Buy and Sell Stock
description: Given an array of stock prices, find the best day to buy and sell the stock.
type: array
order: 0
problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
---

## The Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.


## Thought Process
Find max and min in one loop.
- This doesn't work because the day to sell for maximum profit could be before the best day to buy

Find the best price (min) then track the next max afterward. If the price continues to drop, return 0;
- O(n)
```
[7,1,5,3,6,4]
0: min == max == 7
1: (1 < 7) -> min == max == 1
2: (5 > 1 && 1 < 5) -> min of 1; max of 5
3: (3 > 1 && 3 < 5) -> min of 1; max of 5
4: (6 > 1 && 6 > 5) -> min of 1; max of 6
5: (4 > 1 && 4 < 6) -> min of 1; max of 6
```

I first ran into issues because of a test case where a new min was assigned, but the overall profit was better earlier in the array.

For example with the array:
```
[2,7,3,1,3]
```
It says the max profit is 2.

This is because the current solution constantly looks for a new min, resets values, and returns the difference afterward.

This is somewhat correct, but in the case of this array, the maximum profit is actually in the first two elements (profit of 5).

To solve this issue, I added a profit variable. I then continued the loop and if the current profit was better than the previous profit, I replaced the value.

## First Solutioin
Here's my first working solution:
```cpp
int maxProfit(vector<int>& prices) {
  if (prices.size() == 1) return 0;
  int buy, sell;
  int profit = 0;
  for (int i = 0; i < prices.size(); i++) {
    if (prices[i] < buy || i == 0)
      buy = sell = prices[i];
    if (sell < prices[i]) {
      sell = prices[i];
      if (sell - buy > profit)
        profit = sell - buy;
    }
  }
  return profit;
}
```

From here, I was averaging around 86 ms run time. Which as we all know, is "good enough", but not for me.

## Final Solution
I had a slight Eurika moment and remembered some stupid bullshit solution where we disable some of the built in C and C++ functions.

I won't go into too much detail, this solution was a long shot and has very specific use cases. Here's a quick explaination I found online:

The first line turns off buffer synchronization between the cin stream and C-style stdio tools (like scanf or gets) resulting in a faster cin.

By default cout has a buffer that flushes each time you read something from cin.

This may be slow when you repeatedly read something small then write something small over and over. So this line unties cin from cout by tying cin to null instead of cout (turning off the synchronization).

Long story short, this additional code cut my computation time in half, but is not good to use without knowing what you are doing. If you want to learn more. Read up on it!

Here's the final solution:
```cpp
static const auto io_sync_off = []() {
  // turn off sync
  std::ios::sync_with_stdio(false);
  // untie in/out streams
  std::cin.tie(nullptr);
  return nullptr;
}();

int maxProfit(vector<int>& prices) {
  if (prices.size() == 1) return 0;
  int buy, sell;
  int profit = 0;
  for (int i = 0; i < prices.size(); i++) {
    if (prices[i] < buy || i == 0)
      buy = sell = prices[i];
    if (sell < prices[i]) {
      sell = prices[i];
      if (sell - buy > profit)
        profit = sell - buy;
    }
  }
  return profit;
}
```

This code put me at 42ms, which beat 99.64% of users (in C++) at the time of submission.