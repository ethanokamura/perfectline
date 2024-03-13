---
layout: '../../layouts/PageLayout.astro'
title: Classes And Objects
description: In this section, we will cover the importance of object oriented programming!
tags:
  - cpp
  - intro to programming
  - oop
  - classes
  - objects
published: true
lang: cpp
course: cpp-101
order: 12
---
In the beginning of this class, we learned about fundamental types in C++ like `int` and `bool`, but now let's look at how to make our own types! We can do this by defining **classes** and **structs**.
A class is a blueprint or a template for creating objects. It's a way to group together data (attributes) and actions (methods or functions) that operate on that data.

In simple terms, you can think of a class as a cookie cutter and the objects as the cookies themselves. One cookie cutter can create many objects. It makes creating multiple cookies with the same attributes more efficient. Just like with functions, the goal is to write once and use many times.

`class` in C++ is the building block that leads to Object-Oriented programming. It is a user-defined data type, which holds its own data members and member functions, which can be accessed and used by creating an instance of that class. For Example: Consider the `class` of Cats. There may be many cats with different names and colors but all of them will share some common properties (ie. all of them will have 2 eyes, 4 legs, a nose, etc). So here, Cat is the class, and coat color, age, and weight are their properties.
  1. **Attributes:** These are like variables that hold information about an object. For example, if you're creating a class for cats, attributes could be things like color, name, age, etc.
  2. **Methods:** These are functions that define what actions an object can perform. For our cat example, methods could be things like Meow(), Eat(), Scratch() and so on.

Here's an example of a simple class in C++:

```cpp
class Cat {
	// Attributes
	string color;
	string name;
  int age;

 public:
  // Methods
  void Meow() {
    // Code to meow
  }
  void Eat() {
    // Code to eat
  }
  void Scratch() {
    // Code to scratch
  }
};
```

In this example, we've defined a class called `Cat` with attributes `color`, `name`, and `age`. We also have methods like `Meow()` and `Eat()`.

Once you have a class defined, you can create objects (instances) of that class. Each object will have its own set of attributes and can perform actions defined in the methods.

For example:

```cpp
int main () {
	Cat milo; // This creates an object of type Cat
	milo.color = "Gray"; // Set the color attribute
	milo.name = "Milo"; // Set the name attribute
	milo.Meow(); // Call the Meow method
	return 0;
}
```

Classes are fundamental in object-oriented programming and help organize code by encapsulating data and behavior into reusable units.

By default, all attributes and methods in classes are private, meaning that they can only be used within the class itself. To specify whether an attribute or method is private/public you use the `public` and `private` keywords. Here's an example:

```cpp
class SomeClass {
  // Public Attributes
  int x;

 // Public Methods
 public:
  void PublicMemberFunction() {}

 // Private Methods/Attributes
 private:
  char c;
  void PrivateMemberFunction() {}
};
```

Both `x` and `PublicMemberFunction` can be referenced and manipulated from outside the class whereas, `c` and `PrivateMemberFunction` can only be used inside the class.

In the next section, we will talk about class **constructors**.