---
layout: '../../layouts/PageLayout.astro'
title: Pointers
description: In this section, we will cover the importance of {title}!
tags:
  - cpp
  - pointers
  - memory
published: true
lang: cpp
course: cpp-101
order: 113
---
In this section, we are finally covering the topic of pointers! Pointers are everywhere, in some ways, everything boils down to being a pointer. Pointers are often thought of as one of the most challenging topics to cover in C++. Though, in the right hands, they are really not so complicated.

Pointers are a fundamental concept in programming, especially in languages like C and C++. They allow you to directly interact with memory locations. Here's a simple explanation:
Memory Address: Every piece of data in a computer's memory has a unique address. Think of it like a house number on a street.

Here are 2 important definitions for this section:
1. **Pointer**: A pointer is a special type of variable that stores the memory address of another variable. It's like writing down the address of a house on a piece of paper.
2. **Dereferencing**: When you want to access the actual value at the memory address stored in a pointer, you "dereference" the pointer. This is like going to the house whose address you wrote down and seeing what's inside.

Pointers are just memory addresses!
* Arrays are just pointers which are just memory addresses.
* Strings are just an array of characters which are pointers which are just memory addresses.
* References are just pointers in disguise which are memory addresses as well.

So essentially:
* arrays -> pointers
* strings -> array of characters -> arrays -> pointer
* references -> pointer
* everything -> pointer

Before, we get into pointers, lets review some things:

### What even is a variable? And what does it hold?
4 important aspects of any variable:
1. Type
2. Name (identifier
3. Value
4. Location (memory address)

```cpp
int x;  // where type: int, name: x, value: garbage, locaton: &x
```

Any fundamental type in C++ hold a garbage value until it's initialized. This is not true for non-fundamental types such as string which are empty upon declaration.

Location is always some integer value! (ie, the memory address of the variable) If we need it we can access it via `&` AKA the "address-of" operator

An example of a memory address might look something like `0x744c516a000`
In a program, each variable holds a unique memory address!
### Ok now lets talk pointers:
Here's some syntax that you'll see in the rest of the section:

Now lets look at this:
```cpp
int n = 7;
int *ptr = &n;  // same as "int* ptr = &n;"
```

`ptr` is the location of the address of `n` and is of type `int*`

In this example:
- `n` is 7
- `&n` is some memory address
- `ptr` is the same address as `&n`
- `&ptr` is a different memory address
- `*ptr` dereferences the pointer and is equal to the value of `n` (7).

type `int`:
represents some memory address `&n` and holds the value of whatever is stored at that address `&n` (7).

type: `int *`:
(AKA "int pointer" or "pointer to an int") has the value of the address of another int (`&x`) and also resides somewhere in memory `&ptr`

Here's an example in C++:

```cpp
int number = 42; // This creates a variable 'number' with the value 42.
int *ptr = &number; // This creates a pointer 'ptr' that stores the memory address of 'number'.
cout << *ptr; // This prints the value at the memory address stored in 'ptr', which is 42.
```

In this example, `ptr` is a pointer that "points to" (stores the address of) the variable `number`. When we use `*ptr`, it means "give me the value at the memory address stored in `ptr`", which is `42`.

Pointers are powerful because they allow you to manipulate data at a lower level, which can be very useful in certain situations. However, they can also be a bit tricky, so it's important to be careful when using them to avoid errors in your code.
### C Strings:
Now let's look at "strings". In C, there is no string type. Instead we have either `char[]` or `char*`. And believe it or not in C and C++, arrays don't actually exist either.

All of these c strings (strings of characters) are equivalent:
```cpp
char msg[] = "hello";
char msg[] = { 'h', 'e', 'l', 'l', 'o', 0 };
char msg[] = { 'h', 'e', 'l', 'l', 'o', '\0' };
```

To check the length of a string, one could use the function:
```cpp
int strlen(const char *str) {
	int len = 0;
    for(; *str; ++str)
	    ++len;
	return len;
}
```

When the function is called via:
```cpp
strlen(msg);
```

The parameter `str` in the function `strlen()` gets a copy of the argument: pointer/memory address of `msg`.

In the function itself, when we use `*str` we are **dereferencing** it or getting its actual value at the address being pointed to.

By incrementing `str` with `++str` we are increasing the value of the pointer/memory address `str` by the size of on char. Meaning we move forward to the next item in the referenced string.

To see a nice visual of this syntax keep the following TRUE statements in mind:

| Memory Address | Value | Pointer Notation | Array Notation |
| ----------------- | ------ | ---------------- | --------------- |
| `msg == &msg[0]` | `'h'` | `*msg` | `msg[0]` |
| `msg + 1 == &msg[1]` | `'e'` | `*(msg + 1)` | `msg[1]` |
| `msg + 2 == &msg[2]` | `'l'` | `*(msg + 2)` | `msg[2]` |
| `msg + 3 == &msg[3]` | `'l'` | `*(msg + 3)` | `msg[3]` |
| `msg + 4 == &msg[4]` | `'o'` | `*(msg + 4)` | `msg[4]` |
| `msg + 5 == &msg[5]` | `'\0'` | `*(msg + 5)` | `msg[5]` |

At this point, you might be wondering: When do you _need_ to use pointers
1. Whenever you are using arrays. (You have no choice)
2. Rarely! (You should use `std::vector` instead of arrays most time)
3. Whenever you are using references. (They are really just pointers)
4. Often. But _smart pointers_ are generally preferable. (more on this later).

So where, if anywhere, do pointers show up in the STL?
* Not too frequently, but you may find them useful occasionally!

In C++, both references and pointers are used to work with memory addresses, but they have some important differences:

Here is some more helpful information:
### Syntax:
**Pointers**: Pointers are declared using an asterisk (\*). They directly hold the memory address of another variable.
**References**: References are declared using an ampersand (&). They are essentially aliases for existing variables.
## Nullability:
Pointers: Pointers can be assigned a special value `nullptr` to indicate that they are not pointing to any valid memory location.
Keep in mind, references must always be initialized and cannot be changed to refer to a different object after initialization.

Here's the code example:
```cpp
int* ptr = nullptr; // Valid
int& ref; // Error: References must be initialized
```

## Dereferencing:
Pointers: To access the value pointed to by a pointer, you use the dereference operator (*) like `*ptr`.
References: References do not require dereferencing. They are used directly, similar to regular variables.
```cpp
cout << *ptr << endl; // Access value pointed to by ptr
cout << ref << endl;  // Access value through ref
```

## Reassignment:
Pointers: Pointers can be reassigned to point to different memory locations.
References: References cannot be reassigned after initialization. They always refer to the same object.
```cpp
int num2 = 10;
ptr = &num2; // ptr now points to num2
int& ref2 = num2; 
// ref2 = &num; // Error: Cannot reassign a reference
```

## **Pointer Arithmetic:**
Pointers: You can perform arithmetic operations on pointers, like adding or subtracting an integer to move between memory locations.
References: References don't have a notion of memory address arithmetic.
```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr_arr = arr; // Points to the first element of arr
// References don't have this capability
```

## Function Parameters:
Pointers: They can be passed as arguments to functions, allowing the function to directly modify the original variable.
References: They can also be used as function parameters, offering similar benefits to pointers, but with a more intuitive syntax.
```cpp
void modifyWithPointer(int* ptr) {
   *ptr = 100;
}

void modifyWithReference(int& ref) {
   ref = 100;
}
```

Both references and pointers have their use cases. References are often preferred for their safety and cleaner syntax when you want to work with existing variables. Pointers, on the other hand, offer more flexibility in certain situations, such as dynamic memory allocation or when you need to reassign where the variable points.
