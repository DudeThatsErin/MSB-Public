# Git

Git
2024-03-26 22:36:00
Git is an open source version control system, which supports your development tasks, especially in distributed code projects.

**Installation**

**MacOS**

On MacOS, Git can be installed by using the _Homebrew_package manager:

brew install gitCopy

Or by installing the XCode command line tools. This can be done by executing the following command:

xcode-select --installCopy

**Linux**

On Linux, Git can be easily installed on Linux systems with the available package managers.

E.g. for Debian based systems:

apt install gitCopy

**Windows**

On Windows, Git can be installed by downloading the installer from the _download page of Git_.

Or by using the winget package manager:

winget install gitCopy

**Others**

For more information, see _download page of Git_.

**Configuration**

Git can be configured by the CLI using the git configcommand. For first configuration it is necessary to configure at least the parameters user.name and user.email. This

can be done by the following commands:

gitconfig --global user.name "MyFancyUser"Copy

gitconfig --global user.email "developer@mydomain.com"Copy

**Using Git**

The following commands can be helpful for working with git.

**Basic commands**

|  **git command**<br/> | **Comment**<br/> |
|-----|-----|
|  git init<br/> | Initialize a directory as git managed repository<br/> |
|  git clone <url><br/> | Clone a remote repository to your local client<br/> |
|  git status<br/> | Shows uncommited changes, new files etc.<br/> |
|  git add <file><br/> | Stage an updated / new file to the next commit<br/> |
|  git rm <file><br/> | Remove a file and stage the removal for the next commit<br/> |
|  git commit -m "message"<br/> | Commit staged changes under a new commit<br/> |
|  git commit<br/> | _Will open an editor to write more descriptive commit messages. See here for a guide on good commit messages_<br/> |
|  git log<br/> | Shows a list of commits in the current branch<br/> |
|  git log --pretty=oneline<br/> | Shows a list of commits in the current branch in one line<br/> |
|  git log --patch<br/> | Shows a list of commits in the current branch with the changes<br/> |
|  git reset <commit><br/> | Reset the current branch to the given commit<br/> |
|  git reset --hard <commit><br/> | Reset the current branch to the given commit and discard all changes<br/> |
|  git reset --soft <commit><br/> | Reset the current branch to the given commit and keep all changes staged<br/> |
|  git checkout <branch><br/> | Switch to another branch<br/> |
|  git branch<br/> | Shows a list of existing branches<br/> |
|  git branch <branch><br/> | Creates a new branch (from the currently checked out branch)<br/> |
|  git merge <branch><br/> | Merge changes from branch to the currently checked out branch<br/> |
|  git push<br/> | Push commited changes to the remote repository<br/> |
|  git pull<br/> | Pull current state from the remote repository to your local repo<br/> |

**Working with git-flow**

Git-flow assists you by combining multiple steps of gitcommands to one git-flow command

which will do a workflow of steps. Although git-flow makes live easier in some cases,

it makes it also more complex sometimes and you need to execute some steps before or after using

a git-flow command as regular git command. (See below)

As an example, here is the comparison between the regular git commands and the appropriate

git-flow command for creating a release.

|  **git-flow command**<br/> | **git command**<br/> |
|-----|-----|
|  git-flow feature start <feature_name><br/> | git checkout -b feature/<feature_name> develop<br/> |
|  git-flow feature finish <feature_name> [--squash]<br/> | git checkout develop<br/> |
|   | git merge [--squash] --no-ff feature/<feature_name><br/> |
|   | git branch -d feature/<feature_name><br/> |

Another git-flow cheat sheet can be found _here_.

**Using git-crypt**

Having secret or sensitive information in your git repository is never a good choice. But

sometimes it's necessary. Never push unencrypted data to your remote repository.

Git-crypt is a transparent encryption tool that works seamless with your Git repository. All sensitive

information is encrypted before pushed to the remote repository. Once you've unlocked the

repository locally, all data will be decrypted automatically when pulling from the remote

repo. This makes development with encrypted data effortless.

To install git-crypt, you can use your package manager of choice (e.g. apt):

sudoaptinstallgit-cryptCopy

To initialize a new repository with git-crypt, you can use git-crypt init when located in the

repository directory. An already encrypted git repository can be unlocked by git-crypt unlock.

This requires you to have either the repository encryption key in your GPG keychain, or that

your private GPG key has been added to the allowed keys in the repository. For more details,

see the links below.

For more information, check out the official Github repository _here_.

A tutorial on git-crypt can be found _here_.

 