---
layout: '../../layouts/PageLayout.astro'
title: GitHub
description: In this section, we will cover the importance of {title}!
tags:
  - git
  - github
  - file system
  - repositories
published: true
lang: misc
course: git-101
order: 1
---
In GitHub create a new repository and give it a name. Once created, GitHub will create an empty repository and give you instructions on how to connect it locally.

There are 3 file areas of git:
1. Working Directory - files you're currently looking at in VS Code
2. Staging Area - Created when using `git add`
3. Commit History - State of files previously created
### `git remote`
Allows us to use remote repositories like GitHub
1. Run `git remote` to see which remote repositories you currently have linked to your project.
	- If it returns nothing it means that no repo was found.
2. Next run `git remote add origin [url of repo]`
	- Origin can be replaced with the name of your remote repo.
3. Run `git remote` again to make sure you see the origin.
	- `git remote -v` will print out the url as well.
	- `git remote show origin` will show even more like the head of the repo.
### `git push`
Takes the code from our current repo and syncs it / uploads it to the remote repo

The command requires 2 things, the name of the repo (typically origin) and the branch you want to push to. If the remote repository is the "final source of truth", the `-u` flag sets the origin to upstream remote (this lets us use `git pull` later).

For example run: `git push origin master -u`

Just like that, your code is now in GitHub!
### `git merge`
* We should now have 2 branches: the master on the remote repo and the master on the local repo. The head on each of these branches is a different commit.
* The remote repo is one commit ahead of the local repo.
* Merge takes 2 different branches or codebases and merges them together

Run `git merge origin/master` where `origin/master` what we want to merge on top of our local code.

Now our local code should be linked to the master
### `git pull`
Often times when you are working on software that changes frequently you will be pulling new code from the remote repo.

If you didn't add the `-u` flag during the push, run `git pull origin master`
If you did, just run `git pull`

If you have uncommitted changes in your current directory the operation will fail. **It will not overwrite**. You can either:
1. Commit changes before pulling
2. Stash

If your local code is trying to modify the same line of code that you're trying to pull in you can run into a merge conflict.
### `git reset` and `git revert`
Remove staged files with git reset!

Use `git reset` when you're working on your local project and use `git revert` when files are on a remote repo like GitHub

To remove all staged files use `git reset`
1. Run `git log` and find the desired commit's id / SHA
2. Run `git reset [commit id]` to go back to the previous commit
	- This will not delete any files
3. The head is now on the previous commit

For a more permanent and dangerous use case, run `git reset` with the `--hard` flag like so: `git reset --hard [commit id]`
1. Goes back to the previous commit.
2. Completely deletes files that were added.
3. Do not do this if the code is already on GitHub!

If you need to undo commits that are already pushed to GitHub, that's possible via `git revert`
1. Run `git log` to get the id of the bad commit
2. Run `git repo [commit id]`

This removes the file like `git reset --hard` but it keeps the commit in the log. You can now push this commit to the repo without issues for other team members.
