Let's start with defining some variables to hold data such as speeds, timers, and player stats:
```cs
private float curSpeed;  // current speed of the player
private float moveSpeed = 7f;  // change speed to moveSpeed;
private float sprintSpeed = 13f;  // speed while sprinting
private float stamina = 1f;  // stamina (1 = 100%)
private float staminaLeft;  // keeps track of current value of stamina
private float staminaMultiplier = 1;  // how fast the stamina regens
private bool isResting = true;  // checks to see if the player is at rest
private float coolDown = 3f;  // cooldown keeps track of the time between the end of sprint and the rest period
private float coolDownTimer;
public KeyCode sprintKey = KeyCode.LeftShift;  // default keycode for sprinting
```

In `Start()` initialize the default values for the following variables:
```cs
private void Start() {
	...
	curSpeed = moveSpeed;
	coolDownTimer = coolDown;
	staminaLeft = stamina;
}
```

In `Fixed Update()`, all we have to do is change `dir * speed` to `dir * curSpeed`:
```cs
private void FixedUpdate() {
	rb.velocity = dir * curSpeed;  // change speed to curSpeed
}
```

We will put all of our code for the sprint functionality in its own function. This will allow for less clutter in the `Update()` function. 

The general goal for the main function we will define as `CheckForSprint()`:
```
if you press the [sprintKey] and you have [stamina]:
	change [curSpeed] to [sprintSpeed]
	decrement [staminaLeft]
	player is no longer resting
else when conditions are not met:
	revert [curSpeed] to [moveSpeed]
	if you do not have full [stamina]:
		decrement cooldown
		if cooldown ends:
			player is now "resting"
			reset cooldown timer
if you've rested and stamina is not full:
	increment stamina over time
	when [staminaLeft] is equal to or over [stamina] you are no longer "resting"
```

Now, the execution:
```cs
private void CheckForSprint() {
	if (Input.GetKey(sprintKey) && staminaLeft > 0) {
		curSpeed = sprintSpeed;
		staminaLeft -= Time.deltaTime;
		isResting = false;
	} else {
		curSpeed = moveSpeed;
		if (staminaLeft < stamina) {
			coolDownTimer -= Time.deltaTime;
			if (coolDownTimer <= 0) {
				isResting = true;
				coolDownTimer = coolDown;
			}
		}
	}
	if (isResting && staminaLeft < stamina) {
		staminaLeft += Time.deltaTime * staminaMultiplier;
		if (staminaLeft >= stamina) isResting = false;
	}
}
```

In `Update()` include the reference to the function  `CheckForSprint()`, without this, the function will never be called and in turn never be used.
```cs
private void Update() {
	...
	CheckForSprint();
}
```
