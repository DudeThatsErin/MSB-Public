This is my demo Obsidian vault. This demo vault contains all of my templates, plugins, theme(s), and snippets she uses as well as the exact folder structure I use on my Obsidian Vault.

This Readme will be very long as it will include **lots** of pictures so I decided to keep a Table of Contents below so you can easily click through and find what you are looking for. Also as a quick list of different things I am using.

I decided to switch from my Obsidian Gist to a full vault so I can keep records of how my vault changes over time and I plan to use the `Releases` feature on Github so I can see every time I made a major change and it is easy for anyone to go back and get some feature that *may be working* still.

---
## Table of Contents
- Readme
	- Table of Contents
	- Syncing between devices
		- Obsidian Sync
		- Obsidian Git/GitHub/GitLab
		- iCloud
		- Syncthing
		- Manual File Sync
	- Theme & CSS Snippets
		- Theme
		- CSS Snippets
			- Obsidian Cards
			- Kanban Library by reaty on Obsidian Discord Server
			- My Snippets
				- Custom Callouts
				- Custom Checkboxes
				- Theme Fixes
			- Multi-Column CSS by Efemkay
			- Obsidian Banners Snippet
	- Plugins
		- Obsidan Kanban
		- Templater
		- Dataview
		- Calendar
		- Local Backup
		- Iconic
		- Home Tab
		- Omnisearch + Text Extractor
		- Obsidian Custom Sort
		- Paste Link + Auto Card Link
		- Custom Frames
		- Excalidraw
	- Folder Structure
	- Templates
		- Contact Template
		- Daily Note Template
		- Projects Template
		- Yearly Health Template
			- iOS Shortcut
	- Other iOS Shortcuts I use
	- Credits

---
## Syncing between devices
This is something you have to think about when you are creating a new vault and want to have access to it on more than 1 device. There are several ways you can sync your devices. I will be going over ways you do it if you use Windows + Apple devices as that is what I have in my home and that is what is harder to do due to the way Apple locks down their devices.

### Obsidian Sync
Obsidian sync is a unique End-To-End Encrypted sync service that works by copying your files to Obsidian’s servers and then downloading them to the receiving device. This is the sync service I use though I will not be renewing it come June 2025.

It works very quickly. When I am using excalidraw (for example) it takes 10-15 seconds for items to sync between my computer and my iPad with both devices open. Items are usually screenshots and handwriting.

This is in comparison to Apple Notes or OneNote that can take 5-10 seconds. So it is slower but not much slower.

I will not be renewing in 2025 because I will be using Obsidian Git + GitLab to sync between devices.

### Obsidian Git/GitHub/GitLab
Obsidian Git works similarly and you can connect it to any services that uses git as its backbone like GitHub or GitLab. It is an Obsidian plugin that automatically pushes your files to GitHub or GitLab. It works on iOS though I haven't been able to figure out *how*.

The reason why I will be switching to it is because I switch between Apple Notes & Obsidian and I can't justify a payment for Obsidian since I don't use Obsidian full time.

Plus this option provides an offsite backup of your files by default. Something that you have to do additionally with Obsidian Sync.

### iCloud
iCloud is a free option that works well if you have all Apple devices. If you use anything but an Apple device though, the syncing is not very good. Even with Apple devices the syncing is iffy at best. Sometimes iCloud will offload the files on your device for no reason which means that Obsidian has to redownload them which takes longer to move around Obsidian and open files.

### Syncthing
I have never used this option though I have heard it is a really good option. I have heard it works similarly to Obsidian Sync.

### Manual File Sync
This is where you copy the files manually from one device to another. This is harder to keep track of and harder to remember when you last did the copy. So I choose to not do this but it is an option.

## Theme & CSS Snippets
### Theme
I use [Obsidian Border](https://github.com/Akifyss/obsidian-border) because it is the most like [AnnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin) while still being supported and not lagging my vault. It changes *a lot* but also makes it super easy to add additional features and changes which I have. It is also able to be extended with [Style Settings](https://github.com/mgmeyers/obsidian-style-settings). You can check 100-Resources for my `style-settings.json` file if you want to copy the way I have my theme set up with or without all of my extra tweaks that I have in my CSS Snippets.

Most of those tweaks came from [Christopher Lawley's Obsidian Setup Video](https://www.youtube.com/watch?v=xR5-0XDkwU0) though. I just did a few changes where I colored **bold** and *italic* fonts which he had as default colors. I prefer to tell by color and weight/style how a font is changed. You can check the description of the his video for his setup though.

I mostly use dark theme though I swap to light theme when I am in a very bright area and I can't see my screen with dark mode enabled. So, you will see some screenshots here in light mode and dark mode.

![[Pasted image 20240907165611.png]]
### CSS Snippets
I will talk more about how I use some of these snippets later but I have quite a few CSS Snippets that do different things and extend Obsidian in unique ways.

### [Obsidian Cards View Snippet](https://github.com/DeusEx01/Cards-View-snippet/tree/main?tab=readme-ov-file)
In my `databases` kanban file I currently use a different snippet that makes the images smaller though I forgot I had this one installed. So, I am still deciding between this and the next snippet.
![[Pasted image 20240907170507.png]]
### Kanban Library by reaty on Obsidian Discord Server
This is what I currently use and it works well I like the way it functions though I haven't tested the former snippet so we will see what I think when I do.
### My Snippets
I have a few snippets I created from scratch for myself.
#### Custom Callouts
These allow me to have a multitude of different callouts. You can see them all in `99-Archives/My Custom Code Additions.md`. I will note that most of them work better in dark mode than light mode because that is my preference for all of my apps BUT I wanted to extend these and the checkboxes. Most of my snippets come from [Rushikesh's Repo](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/tree/Collection/Snippets).

#### Custom Checkboxes
I have several checkboxes I have added (you can check the same file as above to see them) which give me additional features. My checkboxes also implement [Rushikesh's Checkbox Priorities](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Checkboxes%20-%20Priority%20checkboxes.md) to give me different colored checkboxes.

I will be honest, I don't use these checkboxes much but I still want to keep them in case I ever want/need them.
![[Pasted image 20240907175533.png]]
#### Theme Fixes
This is where I store all of my updates to the border theme. Like the dividers in my file explorer and having the kanban columns wider than normal. Those are the only 2 things for now but as I want/need something changed in the vault, I will use this file to update the theme. This ensures that if the developer of Border updates their theme, it doesn't overwrite any changes I have made and I can fix anything that breaks because of Obsidian changes easier this way.
### [Multi-Column CSS by Efemkay](https://github.com/efemkay/obsidian-modular-css-layout)
I use this A LOT in my notes as it allows me to have columns. Something that a lot of apps don't allow you to have. Check the repo linked for instructions on how to install it and use it. It is very simple.

### [Obsidian Banners Snippet](https://github.com/HandaArchitect/obsidian-banner-snippet)
I use this to have banners in a lot of my notes. I like the way Notion looks with its banners so I recreate that in Obsidian.
## Plugins
### [Obsidian Kanban](https://github.com/mgmeyers/obsidian-kanban)
I use this for A LOT of my projects as I find it the easiest to read (as far as statuses go) as well as the easiest to quickly get information. One example is for work where I have statuses similar to my projects folder. The only exception is `QA` is replaced with `Questions` where I store questions I have for my coworker/boss (small company) to ask when she is in the office. I work full time in the office (by choice) while she works half days. So, while I do ask her questions the 2nd half of the day, it is easier to talk in person on some things so I store those in the `Questions` column.
Also, similar to my `Databases` Kanban I have a `Misc` column that stores the excalidraw drawing (again, I handwrite A LOT), any pictures I need to save as well as quick links to important information for the project I am working on at work.

The fact that I can view this as a list, kanban, table, or markdown is very useful. Plus the fact that the files are local and I don't have to worry about my employer caring about a 3rd party seeing the notes is also useful (not that mine does but never know if that may change).
![[Screenshot 2024-09-07 at 5.06.55 PM.png]]

### [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)
I use this to update the look of the Border theme more than usual. Read the theme section to see more about the theme.
### [Templater](https://github.com/SilentVoid13/Templater)
I use this for all of my templates. Read that section to see more about how I use it.
### [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
I use this to view my recent files that I have accessed in my vault. I used to use it for more but that is really it now.
### [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
I use this so I can quickly see what day of the week and month it is. It is nice cause I can create daily notes from here as well but it is mostly used just as a quick calendar to view what day of the week/month it is.
### [Local Backup](https://github.com/cgcel/obsidian-local-backup)
I use this to make a static backup that is automatically put in a `.zip` file and saved to my Macbook's Documents folder which is automatically backed up to iCloud. So this gives me 2 backups in 1. I have a local one on my Mac as well as an offsite one with iCloud. I then copy this `.zip` folder to my 2TB External SSD so I have a 3rd backup. This runs every *single* time I open my vault and then every 3 hours while my vault is open and keeps 1 week worth of backups.

Can be a bit annoying if I am restarting Obsidian to troubleshoot something but I'd rather have *too many* backups than *too little*.
It also does cause a bit of lag when opening your vault because it has to run to backup your vault. The amount of lag depends on the size of your vault. I find it worth it though because it backs up my important files.
### [Iconic](https://github.com/gfxholo/iconic)
I use this as it works better than [Iconize](https://florianwoelki.github.io/obsidian-iconize/) which can use a lot of bugs. I haven't had any bugs with Iconic (yet) and I've been using it for 3 months so far.

### [Home Tab](https://github.com/olrenso/obsidian-home-tab)
I use this because I can search through my notes easily and open recently accessed notes easily. It works with Omnisearch + Text Extractor if you want it to have a better search as well.

### [Omnisearch](https://github.com/scambier/obsidian-omnisearch) + [Text Extractor](https://github.com/scambier/obsidian-text-extractor)
This provides a better (more granular) search through your vault. It can also parse PDFs unlike Obsidian's built-in search.

### [Obsidian Custom Sort](https://github.com/SebastianMC/obsidian-custom-sort)
This allows me to sort the file explorer however I like. I can get as granular as I like as well.

### [Paste Link](https://github.com/jose-elias-alvarez/obsidian-paste-link) + [Auto Card Link](https://github.com/nekoshita/obsidian-auto-card-link)
I use these in combination to paste pretty links into my vault like this:
![[Pasted image 20240907181814.png]]
That is just a screenshot so I can show you how it would look in your vault. Paste link can interfere and cause issues with Auto Card Link but I don't mind it cause Paste Link allows me to copy a link from Arc (my browser of choice) and Paste it into obsidian and it automatically gives me the `[](https://google.com)` markdown format for that link and puts my cursor in the brackets `[]` so I can start typing the name. It is extremely useful.
You can stop this interference by turning off the "override Obsidian Paste Handler" in the Past Link settings (then restarting Obsidian) and then manually right clicking and pasting links with Paste Link.
### [Custom Frames](https://github.com/Ellpeck/ObsidianCustomFrames)
This is super useful while I am working because I can have a few web pages I always have open, open in obsidian alongside my notes so I can easily swap back and forth between them. I don't use it much these days but it is still very useful.
### [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)
I love the way it works and how I can have an infinite drawing/handwriting canvas inside Obsidian though it starts to lag the more you add to the canvas when you attempt to handwrite. This is due to the way it functions and how it stores drawings/handwriting as SVGs so you are just adding more and more images (screenshots, pictures, etc.) to the canvas the more you handwrite so it is expected and impossible to solve.
## Folder Structure
I decided to set my folders up this way because it made sense to me and as you will see in the Theme & CSS Snippets section, I am able to divide my folders up in a way that makes everything easy to find and read in the file explorer.

In order to have this structure, I am using the [Obsidian Custom Sort Plugin](https://github.com/SebastianMC/obsidian-custom-sort). It is annoying that I have to have an extra folder in my bookmarks pane for this *but* I keep it shut/toggled so the sorting isn't visible unless I need it.

![[Screenshot 2024-09-07 at 1.05.49 PM.png]]

This is a picture of my Bookmarks Explorer and File Explorer from Obsidian. You can see first I have my KB Shortcuts file which is a Kanban that I keep in list view in my left sidebar of common KB Shortcuts I want to remember for my terminal or VSCode among others. It is something I just started in early September (when this demo vault was originally released) and already find useful.

Next I have the readme, which is only for this vault. I wrote it up in Obsidian and then added the github links once I got it uploaded to github. I use iTerm2 for my terminal for that.

Inbox is for anything I need/want to quickly add to my vault and sort through or discard later. I have a `Scratchpad` folder that is an Excalidraw document that I keep in my right sidebar for quick notes. I use this for quick handwriting I need to store (and probably not keep) as well as quick notes that don't need their own individual note.

Next is my storage section. I am able to add these sections by using a CSS Snippet that I will talk about later.
This storage section includes any attachments (images, PDFs, banners) as well as archived notes (ones I may not need actively but will not delete until I don't need them anymore) and resources is my folder for my templater scripts as well as all of my templates.

Lastly, I have the Life Section. I wasn't sure what else to call this so that's why I decided on that. This contains all of my "contacts" aka people I know as well as my journals (daily notes), my databases which is where I store everything I have played, watched, and read.
Projects are all of my personal projects. Putting together this vault was one and my blog is another.
## Templates
I have several templates. They all serve a purpose and are useful.

### Contact Template
This is where I store all information I want to remember on a person. I keep phone number & address here as a backup in case I accidentally delete them from my contacts on my phone.

I keep them in a folder in case there is anything else about this particular person I want to keep save like photos or other detailed meetings that will make this note extremely long if I kept them here.
I use properties to keep most of the information since it is quick information that I can hide away if I need to.
![[Screenshot 2024-09-07 at 2.25.34 PM.png]]
### Daily Note Template
This is how I have each of my daily notes set up.
![[Screenshot 2024-09-07 at 2.44.37 PM.png]]

I have my [banners repo](https://github.com/dudethatserin/images) that has all of the banners I use in my vault. I have a templater script that chooses 1 of the banners I have at random and sets it as the image using the [Banners CSS Snippet](https://github.com/HandaArchitect/obsidian-banner-snippet) there is also [this alternative](https://github.com/Bluemoondragon07/Obsidian-amazing-snippets/blob/main/Fun%20Mini%20Snippets/CSS%20banners%2C%20icons%2C%20%26%20More.md) that works well. I use the former currently but found the latter when I was looking for the former link. I choose to use CSS Snippets because the [Obsidian Banners](https://github.com/noatpad/obsidian-banners) plugin is in beta and has been for over a year. Latest release was [2.0.5 from October 14, 2023](https://github.com/noatpad/obsidian-banners/tree/2.0.5-beta). There are A LOT of changes that happen within Obsidian in a year and while (last I checked) the banners plugin works, you have to use [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) which is another plugin and developer you have to rely on. I try to limit the number of developers I rely on. As a developer myself a CSS Snippet is A LOT easier for me to update and maintain than a whole plugin if the developer happens to abandon their project (which happens all the time).

I also have a templater script that asks you what emoji(es) you would like to add as the in the title of the banner so that I can easily see how I felt on a particular day. If I felt gross and sick I use something like 🤢 and if it is a good day I use 🙂 this way I can see overall how I felt. I also use [Obsidian Iconic](https://github.com/gfxholo/iconic) to add icons to all of my files and folders everywhere.

Going down the screenshot, I have my properties of things that I like to keep track of. The last few are ones that are the most interesting because you can see my daily notes double as Excalidraw drawings. I do this because there are some days I need to slow down my brain and handwrite what I am thinking to clear my head. Excalidraw is hard to use on iPad and I don't like it much BUT it works. It does its job and that's all I need.

Then I have this nice graph of the entire year with important dates marked out. I do this with an older version of [Hiro Mike's Timeline](https://gist.github.com/ms3056/ebb6a7e175dcfd47f414a70addbd18c7). I use an older version because I prefer the way it looks and functions. That link has instructions on how to use it. Only thing that is required is the [Templater Plugin](https://github.com/SilentVoid13/Templater).

Then I use [Efemkay's Multi-Column CSS Snippet](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/) tool to be able to have 4 columns of callouts. The first column is "Todays Tasks" which I used when I used Obsidian Tasks. I found Tasks very clunky and didn't work with my brain so I switched back to a traditional task manager so I am planning to go down to 3 columns but I wanted to share how this looked in case someone wanted to use Obsidian Tasks.
Recently Accessed Files uses dataview to pull in my last 5 files that I have accessed and put them in a list so that I can easily grab them though this may be retired soon too because I never use it now that I have started using [Obsidian Home Tab](https://github.com/olrenso/obsidian-home-tab). While it isn't maintained anymore it works. Once it stops working I may use this column again so I am sharing.
Today's affirmations are where I go in each day (or as often as I can) to write down at least 3 things I am grateful for. It keeps me grounded and keeps me sane.
Excalidraw Drawing shows the "other side" of this note so that I can see anything I have handwritten there without having to click on the 3 dot menu and "view as Excalidraw drawing". You can [watch this video by Nicole van der Hoeven](https://www.youtube.com/watch?v=zmgqMZi6QL8) to see how I got that set up and working.

After this, templater just inserts the time I created the note and puts my curser under that time (which is a header) so I can start typing immediately. It is a very simple template which you can check out in 100-Resources/Templates.

### Projects Template
![[Screenshot 2024-09-07 at 4.39.33 PM.png]]
You can see I am doing something similar here as with my daily notes where I have these set up as Excalidraw drawings as well. I handwrite MOST things in life and Excalidraw allows me to do that so I make heavy use of it.

I don't really use this template much for my projects but when I need this information, it is very useful. So I keep this anyway.

### Yearly Health Template
![[Screenshot 2024-09-07 at 4.39.50 PM.png]]
This one is definitely my most simple one. I use [this iOS Shortcut](https://www.icloud.com/shortcuts/8c2efdc73db6401d9c0d0d7b1b58bc46) (which can be replicated in Tasker for Android) to easily keep a lot each year about how I feel. I run the shortcut and it asks me *several* questions about my health and saves it to my template.

This is an example showing how the file looks after it is created (uses the same banner & emoji templater functions as my daily notes) and I have run the shortcut. First screenshot is my personal vault where I have ran the shortcut 3x to add it to.
![[Screenshot 2024-09-07 at 4.48.38 PM.png]]
This screenshot is from my demo vault where I ran it once. You can see how it looks with everything entered there.
![[Screenshot 2024-09-07 at 4.48.23 PM.png]]
#### iOS Shortcut
If you would like to copy the shortcut, I have it here.
![[Screenshot 2024-09-07 at 4.41.19 PM.png]]
![[Screenshot 2024-09-07 at 4.41.30 PM.png]]![[Screenshot 2024-09-07 at 4.41.45 PM.png]]![[Screenshot 2024-09-07 at 4.41.55 PM.png]]![[Screenshot 2024-09-07 at 4.42.06 PM.png]]![[Screenshot 2024-09-07 at 4.42.14 PM.png]]
## Other iOS Shortcuts I use
### [Obsidian Sync](https://www.icloud.com/shortcuts/50d267a19db74323b5ede149fced40bf)
This automatically opens Obsidian for 900 seconds (long enough to sync all changes I have made to obsidian on another device) and then goes to the home screen. This works with the automations tab (only on iOS & iPadOS) to automatically open Obsidian. Your device has to be unlocked otherwise this will not run.
I found this on the Obsidian Discord Server by Rebbecca originally.

## [CaptureCut Obsidian](https://www.icloud.com/shortcuts/f7d579da5f2f44018de1459344ef9afc)
Since I switch back and forth between Obsidian & Apple Notes, I have this called `Capture Cut Obsidian` as I have a similar version for Apple Notes.

What this does, is gets anything on the screen or that I share to it and adds it to my `SCRATCHPAD.md` note in my `Inbox` folder with the current date as a header so I know when I added something cause sometimes I can remember when I added something but not the specifics and other times I remember the specifics but not when I added it.
![[Pasted image 20240907183144.png]]![[Screenshot 2024-09-07 at 6.32.11 PM.png]]![[Screenshot 2024-09-07 at 6.32.33 PM.png]]
## Credits
I made this myself. I have credits for all of the CSS Snippets above and in the `.css` files themselves. Hiro Mike was very helpful when it comes to the creation of my vault same with sailKite. I met both of them in the [Obsidian Discord Server](https://discord.gg/obsidianmd).

These screenshots were taken with Mac's built-in tool. If you want to know all the tools I use on my Mac & Windows devices check my [Mac & PC Setup repo](https://github.com/DudeThatsErin/MacNPCSetup/blob/main/README.md).