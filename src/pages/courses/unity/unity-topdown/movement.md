Unity's #input-system in combination with the `Rigidbody2D` class helps tremendously with making 2D movement and physics easy to create and manipulate.

Let's start with defining some variables to hold data regarding things like speed direction to create a #vector:
```cs
float speed = 7f;  // speed of the character
Vector2 direction;  // holds data for the direction the player moves
Rigidbody2D rb;  // Unity's phyisics class
```

The first step is simple, reference the player's `Rigidbody2D` component:
```cs
void Start() {
	rb = GetComponent<Rigidbody2D>();
}
```
This is done in the `Start()` function because we need it done as soon as the player is created.

To understand the way movement works, we need to understand a few terms beforehand, one of these terms is a #vector. 
>A vector has both a magnitude and direction. This is a topic covered in physics and math. 
>Vectors contain both an x and y component.
>This is wildly different from `std::vector` that we saw in C++. 

With our variables this means the following:
>`speed` -> magnitude multiplier
>`direction` -> direction and magnitude

In Unity, there are 2D and 3D vectors called `Vector2` and `Vector3` respectively. They hold an x, y, and sometimes z value.

Here is a diagram of a vector in relation to physics:
# insert image

For our specific case, we will be basing our vector on something called the #unit-circle. The general idea is that the radius of the circle is always 1 and the angle (theta) varies. For our `Vector2`, we need our x and y in `Vector2(x,y)` to always have a radius of 1 despite the angle. To do this we normalize the vector. This means in simple terms, we force the vector to a value of `1` This is important because we need some sort of consistency to have fluid movement.

We need to update the x and y variables of `direction` separately

The x and y values will be defined by Unity's `Input` system. For x, we use `Horizontal` and for y, we use `Vertical`, both the spelling and capitalization are important.

Unity's input system, by default, includes WASD, the arrow keys, and joystick inputs for controllers.

We will put all of this in a function defined as `CheckForInputs` with a parameter referencing a `Vector2`:
```cs
void CheckForInputs(Vector2 dir) {
	dir.x = Input.GetAxis("Horizontal");   // value between -1 to 1
	dir.y = Input.GetAxis("Vertical");  // value between -1 to 1
	dir.Normalize();  // force value to a magnitude/radius of 1
}
```

Anytime we are checking for user input, we want this in the `Update()` function. This ensures the fastest i/o time. 
```cs
void Update() {
	CheckForInputs(dir);
}
```

We put anything physics based because we need the movement to be based on time, for example, m/s or mph. Therefore, we need the movement itself. We can simply put this in `FixedUpdate()`:
```cs
private void FixedUpdate() {
	rb.velocity = dir * speed;
}
```
