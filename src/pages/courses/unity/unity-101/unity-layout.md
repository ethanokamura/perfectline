---
layout: '../../../../layouts/PageLayout.astro'
title: Unity Editor Layout
description: Learn The In's and Out's of the Unity UI
author: Ethan Okamura
date: 11.1.2023
categories:
  - unity
  - beginner
published: true
lang: unity
order: 2
---

## What Is The Unity Editor:
The Unity Editor is the environment where you directly work on your projects. It offers a straightforward UI and is relatively quick to learn. Here you can edit all the components that are inside your game (scripts, artwork, lighting, objects, UI, etc). Scripts in Unity are typically written in a language called C# (similar to C++ or Java). Each script, when created, holds a template (more on this later). Unity ensures a smooth transition between scripting and a drag and drop user interface.

## Initial Layout:
The default layout of Unit should look something like this:
![](/imgs/unity/unity-101/BlankEditor.png)

Let's break this down into the most important tabs:
1. Project
2. Console
3. Hierarchy
4. Inspector
5. Scene / Game

## 1. Project:
At the bottom of your screen you should see a tab called `Project`. In here, there are two main folders, `Assets` and `Packages`. For the sake of our courses. We will never directly edit the Packages folder. We mainly want to look inside the Assest folder. 
Here's what you should be looking for:
![](/imgs/unity/unity-101/ProjectFolder.png)
#### Assets Folder
The Assets folder is where all the files that we create for the project will be held. This includes objects, artwork, scripts, levels in the game, etc. The only folder in there by default is called `Scenes`. Think of each scene as a level in your game. You may have a main menu scene, a death scene, and scenes for each level in your game! For now, the default scene or `Sample Scene` is what we will be using.

## 2. Console:
The console tab (normally next to the Project tab) will display messages that are important to the developer:
- errors in our code
- warnings with our code
- messages we create that display expected results (more on this later)
We will look at the console once we start scripting.

## 3. Hierarchy
![](/imgs/unity/unity-101/Hierarchy.png)

## 4. Inspector
![](/imgs/unity/unity-101/Inspector.png)
## 5. Scene / Game
![](/imgs/unity/unity-101/MainWindow.png)