---
layout: '../../../../layouts/PageLayout.astro'
title: Prerequisites
description: Learn a bit of terminology, syntax and types for C++!
categories:
  - cpp
  - intro to programming
  - syntax
published: true
order: 1
---
### Now let's cover some basic programming terminology
**Syntax** -> Grammar rules for forming statements
**Semantics** -> The meaning of statements (ie how they can concretely be translated into machine code).
**Type System** -> How data and expression values are categorized.
**Standard Library** -> Functions, classes, objects, etc. available for use by any program.

The syntax for C++ is not very beginner-friendly and is often times hated by new students. This being said, the benefits of learning the language definitely outweigh possible downsides. Here are some examples of C++ syntax. We will practice and talk more about this as we go. If this looks horrific at first. Don't worry, I thought the same thing.
### C++ has a complete syntax!
It contains 97 keywords! (Java: 50, JavaScript: 38, Python 3: 35) and has many more operators (`==`, `!=`, `+`, `+=`, `>`, etc.) than most languages and we can redefine what they mean for _compound types_ like objects

With anything of course, there are tradeoffs:
1. C++ is powerful and has direct access to memory and the flexibility to break rules (with great power comes great responsibility)
2. C++ is concise, but not always readable (meaning it can get ugly).
3. The semantics can require many levels of interpretation (ie `+` means different things in different places).
4. Compliers are complicated to make but can produce highly optimized code making C++ suitable for things like game engines or robotics.
5. There are infinite ways to accomplish the same goal... which is great until the code you write doesn't work and no one has solved the problem in the same way.

### C++ Fundamental Types:
A fundamental type is one that is built into the language. In C++ there are 4 major categories:
1. A lack thereof (no type): `void` -> for functions that don't return a value (and potentially other more exotic uses)
2. A nonexistent memory address: `std::nullptr_t` -> To mark a memory address as invalid/uninitialized (more on this later)
3. Integral: `bool`, `char`, `short`, `int`, `long`, etc. -> purpose: integers in constrained ranges, with perfect precision. Also `unsigned` version (no negative values allowed, greater positive range). One thing to note is that ranges are system dependent, meaning newer systems will have better ranges.
4. Floating-Point: `float`, `double`, `long double` etc. -> Fractional numbers, wider ranges, imperfect precision. Almost always approximate values.

_With fundamental types there is no need to `#include` "built in" (keywords)_
