# Pacific Development `git` workflow

## Single source of truth

The `main` branch of [this](https://github.com/PacificDevelopment/JobSite) remote repository will serve as our **single source of truth**. It will represent the latest version of production-ready code.

## Branch Protection
`main` branch has special protection rules.
1. To merge code into `main` you must create a pull request.
2. The pull request must be approved by at least 1 other person.
3. No one can push directly to main except the team captains.
4. In the future Continous integration will also place a status check preventing anyone from pushing directly to main.


## Cloning the repository

Your first step will be cloning our remote repository. Navigate to the appropriate folder on your local machine and execute the following command:

```
git clone https://github.com/PacificDevelopment/JobSite.git <desired_folder_name>
```

Then change into your newly created directory:

```
cd <desired_folder_name>
```

Confirm that you are configured with the correct remote repository:

```
git remote -v
```

You should see the following:

```
origin	https://github.com/PacificDevelopment/JobSite.git (fetch)
origin	https://github.com/PacificDevelopment/JobSite.git (push)
```

## Working on a feature

> No work should be done on the `main` branch.

All work should be done on a **feature branch**; that is, an existing or newly created branch designated to the feature on which you are working.

Resource for more about feature branch workflow: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

### Create a new branch

From the `main` branch, create and checkout a new branch:

```
git checkout -b <new_feature_branch_name>
```

### Implementing changes to your feature

Implement the changes to your feature's code, making frequent, small commits as follows:

```
git add .
git commit -m "<your_commit_message>"
```

Use descriptive commit messages in the present tense; for example:

```
git commit -m "implement click event handler on checkout button"
```
Resource for writing good commit messages: https://cbea.ms/git-commit/

### Incorporating your updates into the `main` branch

Once you have pushed your feature branch to its upstream branch at the `origin`:

1. Go to your feature branch on the `origin` GitHub repository
2. Create a **pull request** from your feature branch to the `main` branch
3. In the **title** of the pull request: reference the name of the corresponding Trello ticket
4. In the **comments**: describe your changes and any details that will be helpful for the reviewer
5. Tag the appropiate person to merge your PR into main.
  Example:
```
    UI team please review @maki-q
      OR
    Tech team please review @Gobleizer
      OR
    PM please review @ahjohnston
```
You may get any team member to review your work, but a final check and merge must be done by one of the three repo maintainers, AJ, QM, or KG.

Finally:

1. Resolve any merge conflicts.
2. Use the Trello/GitHub integration to link the pull request. On the Trello ticket > Power-ups > GitHub> Attach Pull Request > search for/select pull request by name
![Image showing step 2, trello github integration to attach Pull Request](https://user-images.githubusercontent.com/78059363/145341291-96dbe937-6cf6-4b0e-84d6-ea9be70a6fd9.png)
3. Any other member of the team may pick up the PR for review by placing an emoji on the PR notification in the git Slack channel to note they are doing so.

### Oh no I committed to the main branch locally instead of starting a NEW feature branch
That's ok, we start a new branch from this history of commits, and then reset your main branch back to the original commit. Here's how:
1. From the main branch with recent accidental commits
```
git log --oneline
```
2. Note down the commit hash of the commits you want to move.
```
4116a29 (HEAD -> main) Bad Commit
dffab65 (origin/main, origin/HEAD) Merge pull request #1 from PacificDevelopment/eslint
```
3. Create your new feature branch
```
git checkout -b feature-b
```
4. Now in your new feature branch, check the log, you should see the accidenal commits are part of both main and the new branch
```
git log --oneline
4116a29 (HEAD -> feature-b, main) Bad Commit
dffab65 (origin/main, origin/HEAD) Merge pull request #1 from PacificDevelopment/eslint
```
Great these commits are now part of the feature branch we made
5. Switch back to the main branch
6. Force reset main branch back to the original commit known as origin/main, origin/HEAD. Note: This is the dangerous part, back up your changes somewhere just in case!
```
git reset --hard dffab65
```
And that's it. Now your main branch is back to the original pulled commit, and your new branch should still have your recent commits.

### Oh no I made commits to main that should have been on the feature branch I started earlier!
That's ok, we can cherry pick commits from one branch to another, and then reset your main branch back to the original commit, here's how:
1. From the main branch with recent accidental commits
```
git log --oneline
```
2. Note down the commit hash of the commits you want to move.
```
cf9f2f0 (HEAD -> main) Mistaken commit 2
dffab65 (origin/main, origin/HEAD) Merge pull request #1 from PacificDevelopment/eslint
```
3. Move to the branch you want to cherry-pick the commits to.
```
git checkout feature-b
```
4. Now in the feature branch you want to move commits to, git cherry-pick the commit hash
```
git cherry-pick cf9f2f0
```
5. Follow terminal instructions if necessary to deal with Merge Conflicts.
6. Repeat for as many commits as necessary.
7. When done cherry-picking confirm your commit history is what you want for the feature branch.
```
git log --oneline
6d4a25f (HEAD -> feature-b) Mistaken commit 2
4116a29 Bad Commit
dffab65 (origin/main, origin/HEAD) Merge pull request #1 from PacificDevelopment/eslint
```
8. If done fixing feature branch, checkout main branch
```
git checkout main
```
8. Force reset main branch back to the original commit known as origin/main, origin/HEAD. Note: This is the dangerous part, back up your changes somewhere just in case!
```
git reset --hard dffab65
```
And that's it. Now your main branch is back to the original pulled commit, and your feature branch should still have your cherry-picked commits.

### Resolving lockfile conflicts

> [npm docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-locks#resolving-lockfile-conflicts): Occasionally, two separate `npm install` will create package locks that cause merge conflicts in source control systems. As of npm@5.7.0, these conflicts can be resolved by manually fixing any package.json conflicts, and then running `npm install [--package-lock-only]` again. npm will automatically resolve any conflicts for you and write a merged package lock that includes all the dependencies from both branches in a reasonable tree.