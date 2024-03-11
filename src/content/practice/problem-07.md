---
layout: '../../layouts/PageLayout.astro'
title: Problem 07
description: Vowel Count
tags:
  - cpp
  - python
  - intro to programming
  - practice problems
published: true
lang: misc
course: practice
order: 7
---

Write a program with the variables `std::string word` and `int n`. Use a for loop to iterate through the string and count how many vowels the string contians.

Here are some example inputs with the predicted result:
```
type a word:
MILO

There are 2 vowels in the word: MILO
```
```
type a word:
Because!

There are 4 vowels in the word: Because!
```
```
type a word:
12345

There are 0 vowels in the word: 12345
```
```
type a word:
E

There are 1 vowels in the word: E
```

## Possible Solutions:
### C++
```cpp
std::string word;
std::cout<< "type a word:\n";
std::cin >> word;
int n = 0;
for (char c : word) {
  if (c >= 'A' && c <= 'Z') c += ('a'-'A');
  if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') n++;
}
std::cout << "There are " << n << " vowels in the word: " << word << '\n';
```