---
layout: '../../../../layouts/PageLayout.astro'
title: Solutions
description: Possible Solutions to the Example Problems.
categories:
  - cpp
  - intro to programming
  - practice problems
published: true
order: 12
---
### Solution 1: My Name Is
```cpp
std::string name;
int age;
std::cout << "enter your name and age seperated with a space:\n";
std::cin >> name >> age;
std::cout << "my name is " << name << " and I am " << age << " year(s) old!\n";
```

### Solution 2: Increasing / Decreasing
```cpp
int x,y,z;
std::cout << "enter 3 integers:\n";
std::cin >> x >> y >> z;
if (x < y && y < z) std::cout << "increasing\n";
else if (y < x && z < y) std::cout << "decreasing\n";
else std::cout << "neither\n";
```

### Solution 3: Fizzbuzz
```cpp
int n = 0;
std::string fizzbuzz;
std::cout << "enter an integer:\n";
std::cin >> n;
if (n % 5 == 0 && n % 3 == 0) fizzbuzz = "fizzbuzz";
else if (n % 3 == 0) fizzbuzz = "fizz";
else if (n % 5 == 0) fizzbuzz = "buzz";
else std::cout << n << '\n';
```

### Solution 4: Min/Max

```cpp
int input = 0;
std::cout << "enter at least one integer, press (ctrl-d) to quit:\n";
std::cin >> input;
int max = input;
int min = input;
while (std::cin >> input) {
  if (input > max) max = input;
  if (input < min) min = input;
}
std::cout << "the max is " << max << " and the min is " << min << ".\n";
```

### Problem 5: Digit Count 
```cpp
int num = 0;
std::cout << "enter an integer:\n";
std::cin >> num;
if (num < 0) num = -num;
while (num > 0) {
  num /= 10;
  digits++;
}
std::cout << "there are " << digits << " digits in the number" << num << '\n';
```

### Problem 6: Vowel Count
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

### Solution 7: Max Value in an Array

```cpp
int MaxIndex(int a[], const int SIZE) {
	int index = 0;
	int max = a[0];
	for (int i = 1; i < SIZE; i++) {
		if (a[i] > max) {
			max = a[i];
			index = i;
		}
	}
	return index;
}

int main () {
  const int CAPACITY = 100;
	int values[CAPACITY];
	int index = 0;
	std::cout << "input up to " << CAPACITY << " ints (press ctrl-d to stop):\n";
	while (index < CAPACITY && std::cin >> values[index])
    index++;
	int max_index = MaxIndex(values, index);
  std::cout << "INDEX:\n";
	for (int i = 0; i < index; i++) {
		std::cout << i << ": " << values[i];
		if (i == max_index) std::cout << " <-- max";
    std::cout << '\n';
	}
	return 0;
}

```

### Problem 8: Sum of a Vector
```cpp
int sum(std::vector<int> v) {
  int sum = 0;
  for (int n : v)
    sum += n;
  return sum;
}

int main () {
  int input;
  std::vector<int> v;
  while (std::cin >> input)
    v.push_back(input);
  std::cout << "sum is " << sum(v) << '\n';
  return 0;
}
```
