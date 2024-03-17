---
layout: '../../layouts/PageLayout.astro'
title: Linked Lists
description: Let's learn about Doubly Linked Lists!
tags:
  - cpp
  - intermediate
  - advanced
  - algorithms
published: true
lang: cpp
course: dsa
order: 1
---
### List:
Elements probably not laid out sequentially in memory
Access a subscript/index via traversing nodes (which is slow)
Implemented as a "linked list"

### Linked List
Internally has "nodes".

Using this example:
```cpp
char* data = "hello"
```

(Where `data[0] == h` and `data[4] == o`)

In this case we have a char and two pointers in each node:
1. `char data` would be `'h'`
2. `Node *prev` would be a `nullptr`
3. `Node *next` would be a pointer to the next node (`'e'`)

### Doubly Linked List
1. Each list element (ie node) contains a pointer to the next and previous node in the list. Along with the data each node holds

```cpp
tempalte<typename T>
class LinkedList {
  // A forward declaration for a nested type named "Node"
  // We can refer to the Node type in the body of public member functions even though it hasn't been fully defined yet
  struct Node;
 public:
  // Constructors
  // Destructors
  // other public member functions
 private:
  struct Node {
    T data;
    Node* next = nullptr;
    Node* prev = nullptr;
  };
  Node* head_ = nullptr;
  Node* tail_ = nullptr;
  std::size_t size_ = 0;
};
```

A list type should almost always be a template type
For the same reason that `std::vector` is actually `std::vector<T>`
(ie T is the element type)

### Constructors:
1. Default constructor
2. Copy constructor
3. Initializer List

### Destructor:
Destroys the object and deallocates all memory allocated to the object!
_Essentially undoes the constructor._
* This is a pointer-based structure
* This class will dynamically allocate memory to create (at least) Node objects
* Those Node objects must be deleted when a list dies.

### Other public member functions:
* Allow for stuff other STL containers like vectors can do (insert, pop, push, delete, etc)

### Node:
* Each element of the list will consist of a Node object
* No reason for this type to be exposed outside of the class so we can use a nested class (struct)
* Since type Node is not publicly accessible, no need for encapsulation enforcement
* Each node consists of:
	* data value
	* a pointer to the previous node
	* a pointer to the next node

Doubly linked linked list support traversal in both directions and operations at either end so it makes sense to have pointers to both ends of the list (`head_` and `tail_`)

## Memory Leak
When a long running program that has allocated memory, never gives back or deletes the allocation.

`valgrind` helps debug stuff like segmentation faults or memory leaks.

### Disadvantages:
1. No direct access (unlike an array)
Address of value at index 5 in an array: (ie a single integer addition).
```cpp
array_variable + 5
```

Address of node representing index 5 in a linked list: (ie multiple pointer dereferences)
```cpp
list_variable.head_->next->next->next->next->next
```

2. Occupies more space than an array (overhead). An array of chars of size 3 holds 3 bytes. A doubly linked list of chars, size 3 holds up to 67 bytes (8 pointers, 3 chars) (more likely 88 bytes - memory alignment on 8-byte boundaries faster for CPU)
3. No spacial locality: (nodes likely not next to each other in memory) May be difficult for COU cache to optimize.

### Advantages:
1. Compared to other base standard sequence containers (array, vector, deque), lists preform generally better in inserting, extracting and moving elements in any position within the container for which an iterator has already been obtained, and therefore also in algorithms that make intensive use of these, like sorting algorithms.

Keep in mind `std::list` already exists. If we end up making our own specialized linked-list class for some specific purpose, we should make sure it supports iterators!

### Many iterator-based functions in `std::list` (and `<algorithm>`):
Iterators provide _pointer-like access_ to a position in a data structure.

Check out the table on [this](https://cplusplus.com/reference/iterator/) page!

Available operations depend on the type of iterator!
1. Move around in the data structure with: `++ -- + - += -=`
2. Access value at current position: `*`
3. Copy, compare: `= == != < > <= >=`

Making iterators for user-defined types in C++:
If you want to use...
1. Ranged-based for loop
2. `std::sort`
3. `std::find`
4. `std::count`
5. `std::swap`
6. `std::fill`
7. `std::min`
8. `std::max`
9. and other things in `<iterator>`

... you must implement iterators for your custom type!

Generally:
1. Member functions `begin()` and `end()`, which return:
2. "iterator" objects that support at least "incrementing" to the next value `++` and dereferencing contained value `*`. Often other functions as well.

In the case of a doubly linked list, we probably want to implement a [bidirectional iterator](https://cplusplus.com/reference/iterator/BidirectionalIterator/).
### Code Example:
Here's an example of a basic linked list class with functions you might want and a custom iterator type:

Class `LinkedList` is an archetypal doubly linked list. Where `Node` structures and internal list details are kept private. Also note that all member functions are defined inside the class declaration. (No separate .h and .cpp/.cc files.) Template classes are usually defined this way. For this class, the param `T` is the type of the list elements

```cpp
template <typename T>
class LinkedList {
  struct Node;  // forward declaration for our private Node type
 public:
  // default constructor
  LinkedList() : head(nullptr), tail(nullptr), size_(0) {}
  // list constructor
  LinkedList(std::initializer_list<T> init_list);
  // copy constructor
  LinkedList(const LinkedList<T> &another);
  // destructor
  ~LinkedList();
  // returns the value of the head node
  T& front() const;
  // returns the value of the tail node
  T& back() const;
  // returns the size of the linked list
  std::size_t size() const;
  // returns true if list is empty
  bool empty() const;
  // adds a new element (val)
  // assigns new element as head
  void push_front(T val);
  // adds a new element (val)
  // assigns new element as tail
  void push_back(T val);
  // removes the current head node from list
  // reassigns new head
  void pop_front();
  // removes the current head node from list
  // reassigns new head
  void pop_back();
  // clears the linked list
  void clear();
  // assigns list to a new list
  LinkedList& operator=(std::initializer_list<T> init_list);
  // assigns list to an existing list
  LinkedList& operator=(const LinkedList &another);
  // checks list for equivalency to another list
  bool operator==(const LinkedList &another);
  // checks list for inequivalency to another list
  bool operator!=(const LinkedList &another);
  // allows stdout of list
  friend std::ostream& operator<<(std::ostream& out, const LinkedList& list);

 private:
  struct Node {
    T data;
    Node* next = nullptr;
    Node* prev = nullptr;
  };
  Node* head = nullptr;
  Node* tail = nullptr;
  std::size_t size_ = 0;
};

```