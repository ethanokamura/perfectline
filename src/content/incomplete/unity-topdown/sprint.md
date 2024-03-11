---
layout: '../../../../layouts/PageLayout.astro'
title: Sprinting
description: Let's Go a Little Deeper And Create Sprinting Funcitonality For Our Player
author: Ethan Okamura
date: 11.1.2023
tags:
  - unity
  - beginner
  - top-down
  - movement
published: true
lang: unity
order: 2
---

## Adding A Sprint Feature To The Player Controller
Another feature we may want to add to our character would be a sprint funciton. This way the player could quickly traverse the map or dodge enemy attacks. When the player changes from one way of being to another (like walking to running) we call this changing the player's current state.

## Editing Our Movement Variables
The first step we should take is to redefine our `speed` variable. We should instead change it to something like `base_speed` or `walk_speed`.

We will then want to add two more variables to keep track of the player's speed. One to hold our player's current speed and one to hold the desired speed of our sprint state. To do this lets add the following code:

```cs
float cur_speed;  // current speed of the player
float walk_speed = 7f;  // change "speed" to move_speed
float sprint_speed = 13f;  // speed while sprinting
```
We will now want to add the intialization of `cur_speed` to our `Start()` function:
```cs
private void Start() {
	....
  cur_speed = walk_speed;  // set the default current speed to be our walk speed
}
```

Last thing in this section is to change our movement functionality in `FixedUpdate()` to use `cur_speed` instead of our original `speed` variable.

```cs
private void FixedUpdate() {
	rb.velocity = direction * cur_speed;  // changed from speed
}
```

## Creating Limits For Our Sprint
One thing to consider is whether we want our player to be able to sprint infinitely. If this is the case we can just skip this part. However if you want to add a sort of stamina effect, we would do the following:


Let's start with defining some variables to hold data for some timers and player stats regarding stamina:
```cs
float stamina = 1f;  // stamina (1 = 100%)
float stamina_left;  // keeps track of current value of stamina
float stamina_multiplier = 1;  // how fast the stamina regens
float cool_down = 3f;  // cooldown keeps track of the time between the end of sprint and the rest period
float cool_down_timer;
bool is_resting = true;  // checks to see if the player is at rest
public KeyCode sprint_key = KeyCode.LeftShift;  // default keycode for sprinting
```

One type that you haven't seen before is `KeyCode`. `KeyCode` is a reference to Unity's mapping of keyboard keys to values the computer can read.

Check out Unity's [KeyCodes](https://docs.unity3d.com/ScriptReference/KeyCode.html) for yourself.

In `Start()` initialize the default values for the following variables:
```cs
private void Start() {
	....
	cool_down_timer = cool_down;  // set default cool down time
	stamina_left = stamina;  // set the stamina to be full!
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
(Keep in mind this is not `C#` this is merely psuedo code or code that replicates plain english)

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
	....
	CheckForSprint();
}
```

Alright, we've finally finished our sprint functionality. The next thing we will want to do is add some shooting into our game!