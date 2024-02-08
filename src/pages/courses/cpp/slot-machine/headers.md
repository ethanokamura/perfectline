---
layout: '../../../../layouts/PageLayout.astro'
title: Headers
description: Learn header files in C++
categories:
  - cpp
  - file system
  - headers
published: false
order: 26
---

Header files in C++ are used to declare the structure of functions and classes that you intend to use in your program. They serve as a kind of "blueprint" that tells the compiler what functions or classes are available and how to use them.

Here's a breakdown:
1. Declaration vs Definition:
   Declaration: It tells the compiler that a function or class exists, but it doesn't provide the details of how it works. It's like saying "Hey, there's a function/class with this name and these parameters."
   Definition: It provides the actual implementation of the function or class, including the code that gets executed when it's called.
2. Separation of Interface and Implementation:
   Header files (.h or .hpp) contain declarations, while source files (.cpp) contain definitions. This separation helps organize code and allows for easier collaboration in larger projects.
3. Avoiding Duplicate Code:
   Header files are typically included in multiple source files. This prevents you from having to re-write the same function or class declaration in every file that uses it.
4. Preprocessor Directives:
   Header files are included in source files using preprocessor directives (`#include`). This essentially copies the contents of the header file into the source file at compile time.

```cpp
#include "my_header.h"
```

5. Guard Clauses:
   To prevent multiple definitions of the same function or class, header files often include "guard clauses" using preprocessor directives like `#ifndef`, `#define`, and `#endif`.

```cpp
// my_header.h

#ifndef MY_HEADER_H

#define MY_HEADER_H

// Declarations go here

#endif
```

This ensures that even if the header is included multiple times, it's only processed once.

6. Common Content in Header Files:
   Header files often contain function prototypes, class declarations, constants, and type definitions that are shared across multiple source files.

```cpp

// my_header.h

#ifndef MY_HEADER_H

#define MY_HEADER_H

int add(int a, int b); // Function declaration

class MyClass {
 public:
   void myFunction();
};

#endif

```

Remember, header files play a crucial role in structuring C++ programs and facilitating code reusability. They provide an interface to the functionality you've implemented in your source files.
