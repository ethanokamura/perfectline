---
layout: '../../layouts/PageLayout.astro'
title: Problems
description: Example Problems to Practice the Covered Material.
tags:
  - cpp
  - intro to programming
  - practice problems
published: false
lang: misc
course: practice
order: 11
---

### Problem 1: My Name Is
Write a basic program that holds 2 variables: `name` and `age`. The input `std::cin` should extract both name and age at the same time! The program should insert the following message into the console:
```
enter your name and age seperated with a space:
> [name] [age]

my name is [name] and I am [age] year(s) old!
```

With the following input of `ethan 22` you should expect the following output:

`my name is ethan and I am 22 year(s) old!`

### Problem 2: Increasing / Decreasing
Write a basic program that extracts 3 integers. Using a series of if else statements, determine if the numbers are increasing, decreasing, or neither and print the string `increasing`, `decreasing`, or `neither`.

Your program should have 3 integers named `x`, `y`, and `z`!

Here are some example inputs with the predicted result:
```
enter 3 integers:
1 2 3
increasing
```
```
enter 3 integers:
1 3 2
neither
```
```
enter 3 integers:
3 2 1
decreasing
```

### Problem 3: Fizzbuzz
Extract any integer from standard input and do the following:
1. If number is divisible by 3, print fizz
2. If number is divisible by 5, print buzz
3. If number is divisible by both 3 and 5 print fizzbuzz
4. If it is neither divisible by 5 or 3, print the number

(Hint, use the modulus operator `%` to find the remainder of an integer)
```
9 % 2 == 1
8 % 2 == 0
```

The program should hold 2 variables an empty string called `fizzbuzz` and an integer `n`.

Here are some example inputs with the predicted result:

```
enter an integer:
3
fizz
```
```
enter an integer:
5
buzz
```
```
enter an integer:
15
fizzbuzz
```
```
enter an integer:
4
4
```

### Problem 4: Min/Max
Using 3 variables (`input`, `max`, and `min`), write a block of code that takes in an undefined amount of integers using `while(std::cin >> input)` where `input` is an integer (remember hit `ctrl-d` to quit `std::cin`). Use if statements to find minimum and maximum values inputted by the user!


When the input stream stops, insert the following message into the terminal:
`the max is [max] and the min is [min]`

Here's an example of inputs with the predicted result:
```
enter at least one integer, press (ctrl-d) to quit:
1 2 4 7 0 123 4
(ctrl-d)

the max is 123 and the min is 0
```

### Problem 5: Digit Count
Write a block of code that takes in an integer and counts the amount of digits.

This program should have 2 variables: `num` and `digits`

`there are [digits] digits in the number [num]`

In this program, we should check for negative numbers!

Here are some example inputs with the predicted result:
```
enter an integer:
123

there are 3 digits in the number 123
```
```
enter an integer:
0

there are 1 digits in the number 0
```
```
enter an integer:
-75000

there are 5 digits in the number 75000
```

### Problem 6: Vowel Count
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

### Problem 7: Max Value in an Array
Write a program that finds the maximum index and value of an array with the capacity of 100.

Here is your starter code:
```cpp
int MaxIndex(int a[], const int SIZE) {}

int main () {
  const int CAPACITY = 100;
	int values[CAPACITY];
	int index = 0;
	std::cout << "input up to " << CAPACITY << " ints (press ctrl-d to stop):\n";
	while (index < CAPACITY && std::cin >> values[index]) index++;
	return 0;
}
```

You will need to add to both the `MaxIndex()` function and the `main()` function for this to work.

Here's an example of inputs with the predicted result:
```
input up to 100 ints (press ctrl-d to stop):
231 213 13 413 32 42 42 43 24
INDEX:
0: 231
1: 213
2: 13
3: 413 <-- max
4: 32
5: 42
6: 42
7: 43
8: 24
```

### Problem 8: Sum of Vector
Write a program that