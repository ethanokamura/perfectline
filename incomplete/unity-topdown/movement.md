---
layout: '../../../../layouts/PageLayout.astro'
title: Player Movement
description: Let's Write a Basic Movement Script For Our Player
author: Ethan Okamura
date: 11.1.2023
tags:
  - unity
  - beginner
  - top-down
  - movement
published: true
lang: unity
order: 1
---

## Basic Goal:
Our main goal with this script is for the player to be able to move in all directions! To do this, we will need to access our GameObject's `Rigidbody` Component. We will learn about the `Vector` class.

## Getting Started:
Unity's input-system in combination with the `Rigidbody2D` class helps tremendously with making 2D movement and physics easy to create and manipulate.

Let's start with defining some variables to hold data regarding things like speed, a vector to hold user's input, and a reference to our player's `Rigidbody` component to use phyisics:
```cs
float speed = 7f;  // speed of the character
Vector2 direction;  // holds data for the direction the player moves
Rigidbody2D rb;  // Unity's phyisics class
```
Don't worry, we will get into Vectors in a bit!

The first step is simple, reference the player's `Rigidbody2D` component. To initialize it, we will set it's reference in the `Start()` function. This way, it is called once we hit the start button and never again. We will need it as soon as the level loads:
```cs
void Start() {
	rb = GetComponent<Rigidbody2D>();
}
```

To understand the way movement works, we need to understand a few terms beforehand, one of these terms is a `vector`.

A vector has both a magnitude (length) and direction. This is a topic covered in physics and math. `Vector2D` contains both an x and y component. This is wildly different from `std::vector` that we saw in C++. For our specific case, we want to hold in the magnitude of the players movement and it's direction in the `x` and `y` axis.

With our variables this means the following:
- `speed` -> magnitude scalar (multiplier)
- `direction` -> direction and base magnitude

In Unity, there are 2D and 3D vectors called `Vector2` and `Vector3` respectively. They hold an x, y, and z value (if it is a `Vector3`).

Here is a diagram of a vector in relation to physics:
![](/imgs/unity/unity-topdown/BasicVector.webp)

For our specific case, we will be basing our vector on something called the #unit-circle. The general idea is that the radius of the circle is always 1 and the angle (theta) varies. For our `Vector2`, we need our x and y in `Vector2(x,y)` to always have a radius of 1 despite the angle. To do this we normalize the vector. This means in simple terms, we force the vector to a value of `1` This is important because we need some sort of consistency to have fluid movement.

We need to update the x and y variables of `direction` separately

The x and y values will be defined by Unity's `Input` system. For x, we use `Horizontal` and for y, we use `Vertical`, both the spelling and capitalization are important.

Unity's input system, by default, includes WASD, the arrow keys, and joystick inputs for controllers.

Anytime we are checking for user input, we want this in the `Update()` function. This ensures the fastest input / output time:
```cs
void Update() {
	direction.x = Input.GetAxis("Horizontal");   // value between -1 to 1
	direction.y = Input.GetAxis("Vertical");  // value between -1 to 1
}
```
Alternatively, we could write it as:
```cs
void Update() {
	direction = new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
}
```

Finally, we will need to `normalize` the vector meaning that we want it to be forced to have a magnitude of 1. If we were to, for example, go up and to the left, we would actually move faster than if we were to just go up or just go to the left.

```cs
void Update() {
	direction.x = Input.GetAxis("Horizontal");   // value between -1 to 1
	direction.y = Input.GetAxis("Vertical");  // value between -1 to 1
	direction.normalized;  // force value to a magnitude/radius of 1
}
```

Here are some before and afters with normalization:

Before:
![](/imgs/unity/unity-topdown/NonNormalized.webp)
After:
![](/imgs/unity/unity-topdown/Normalized.webp)

We put anything physics based because we need the movement to be based on time, for example, m/s or mph. Therefore, we need the movement itself. We can simply put this in `FixedUpdate()`. We want to manipulate our `Rigidbody` to utilize Unity's built in physics engine. When we multiply `direction` (a vector) by a number or scalar, we return a new vector with the direction of `direction` and the magnitude of speed:

```cs
private void FixedUpdate() {
	rb.velocity = direction * speed;
}
```
![](/imgs/unity/unity-topdown/VelocityVector.webp)