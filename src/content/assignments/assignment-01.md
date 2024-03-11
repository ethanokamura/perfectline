---
layout: '../../layouts/PageLayout.astro'
title: AS01
description: Create a Rock/Paper/Scissors Game
tags:
  - practice exercises
  - cpp
  - js
  - python
published: true
lang: misc
course: assignments
order: 1
---

Create a program to replicate the game of rock paper scissors. You will play against the CPU to try to win the best out of the given round limit.

To do this, we will need the following variables:
1. A variable to hold the amount of rounds that will be played.
2. A variable to hold acceptable inputs for both the player and CPU.
3. Variables to hold the CPU or Player's inputs
4. Variables to hold the scores.

Start by taking the user's input to figure out how many rounds will be played.

The output should state who wins the round, or in case of a tie, state that it was a tie.

The inputs should only be `rock`, `paper`, or `scissors` and prompted as such:
`choose rock, paper, or scissors:`

Between rounds, you should output the current score such as:
`player's score: 1, computer's score: 0`

You may want a function to check the conditions of the player and CPU's choice!

Finally when the game finishes, output a message to let the user know the game is over.
This can look something like `[player or CPU] wins! GG`

## Possible Solution
[C++](codesantacruz.com)