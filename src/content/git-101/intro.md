---
title: Intro to Git
description: In this course, we will cover the importance of Git!
tags:
  - git
  - repositories
  - file system
published: true
lang: misc
course: git-101
order: 0
---
A system for keeping track of changes over a set of files
## Setup:
To check to make sure git is installed and to see the current version run `git --version` in the command line
* For Windows, use the basic [git installer](https://gitforwindows.org/)
* For Mac, install using `brew install git`
	* If you use a mac and do not have homebrew, I would recommend installing it

Collaboration is a big part of git, to verify your identity modify `git config`
* To get the current config run `git config --list`
	* This list should have a current username and user email
	* To exit type `:q`

If it doesn't have your info run the following commands:
1. `git config --global user.name "exampleuser"` for username
2. `git config --global user.email "exampleuser@something.com"` for email
## Create a repo with `git init`
Create/initialize a git repository (repo)
* A repository is just a set of files that keeps track of changes within a depository

Using an editor like VS Code, then run `git init` from the command line.
* It now lives in the hidden git directory in your projects folder.
## Staging with `git add`
Run `git add` to add/stage the files to the current repo.
1. To get all the files in the working directory use `git add .`
2. Otherwise, for specific files use `git add [filename]`

As you work on a codebase, you will take snapshots (commits) of the current state of these files.

Each commit has its own unique id and is linked to its parent making it so we can travel back in time to undo changes to the project or specific files.

If you want to untrack files use the command `git reset .` or `git reset [filename]` for specific files.
## Save progress with `git commit`
Run `git commit` to create a snapshot of the current state of these files

Each commit has its unique ID to track the difference in certain files and not the difference in others.
* This is great if you accidentally introduce a bug and need to roll back to an older snapshot

A typical commit goes to the main/master branch and needs a commit message stating what changes were made using the `-m` flag

For example `git commit -m "some message!"`

Just like that, you've added the first commit at the head of the main branch of the current repo!

The changed files now disappear from the staged files and you have a clean working directory
* A unique ID is made for that commit!

The head represents the most recent commit. When we commit to the head, it moves forward. Keep in mind, that you can always move back to a previous reference to the git.

To skip using `git add`, add the `-a` flag to your commit to add all the files in the current working directory. Followed by a message with `-m`

`git commit -a -m "commiting all files"`

Or even better:

`git commit -am "commiting all files"`
## Repo branches with `git branch`
Software is often developed in a non-linear fashion. You might have multiple teams working on different features in the same codebase simultaneously. This is possible using "branching".

Create one by running `git branch [branch name]` and then move into it via `git checkout [branch name]`. You can now edit code in this branch without affecting the master branch. Commits here live in an "alternate universe".

To merge the changes in your branch use `git merge [branch name]`.

The merge now becomes the head of the master branch unless you run into a merge conflict.
## Check on your repo with `git status` or `git log`

Check the current state or status of your repo with `git status`
* This says which files have been added, deleted, or modified

Get info from the last commit with `git log`.

This gives the previous commit ID, author, and time of commit
* This is a direct reference to the head of the master branch
## Hiding files with `.gitignore `
Ignore files in your repo by referencing the file name in another file called `.gitignore`
* This makes them invisible to `git status` as well
