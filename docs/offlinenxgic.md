Offline mode is a good way to keep your nxgic folder clean and prevents it looking at the entire icon repo everytime you load up, you can manually add updates and your own icons

Download and extract NX-GIC

[![nxgic-settings](<img/offline0.1.png>)]{Extracted nxgic|info}

Make a new Folder Called `Main`

[![nxgic-settings](<img/offline5.5.png>)]{Main|warning}

open nx-gic and select Work Offline 

`File > Work Offline`

[![nxgic-settings](<img/offline1.png>)]{Select Work Offline|info}

Now Download a release of the Game Icon Repo from [my Github](https://github.com/sodasoba1/NSW-Custom-Game-Icons/tags)

[![nxgic-settings](<img/offline2.png>)]{download the zip from the tags section|info}

Open the freshly downloaded zip and navigate into the zip

[![nxgic-settings](<img/offline3.png>)]{downloaded zip from the tags section|info}

extract or drag & drop the `Vertical` folder from Inside the zip file into the `Main` folder
inside the NX-GIC Directory

[![nxgic-settings](<img/offline4.png>)]{download the zip from the tags section|info}

Be sure the structure is correct inside `Main/Vertical/` folder

[![nxgic-settings](<img/struc.png>)]{folder structure of the /vertical folder|info}

!!! info
	refer to online guide for Setting up NX-Titles-Dumper if you run into and problems

Donwload [NX Titles List Dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) and place the .nro into the sdmn:/Switch/ folder on the SD

load nx-titles-list-dumper from hbmenu

![nxgic](<img/nxtitledump.jpg>)

press :material-alpha-a-circle:{ .btna } to dump your installed title IDs

this will place a file into `SD:/titles.csv` once it's `done` 

press :fontawesome-solid-circle-plus:{ .yes } to exit

![nxgic](<img/nxtitledump2.jpg>)

once `SD:/titles.csv` is dumped

transfer titles.csv into the same folder as NX-GIC

[![nxgic-settings](<img/offline5.6.png>)]{download the zip from the tags section|info}

open nx-gic `File > Settings ` and put the csv location into `Installed Titles List (CSV)`

[![nxgic-settings](<img/offline5.7.png>)]{I Manually add the location and click save|info}

!!! bug 
	CLOSE nx-gix after saving and re-open it

Click {==SCAN==} and if everything was done correctly you should now see all the icons.

[![nxgic-settings](<img/offline6.png>)]{click scan|info}

Now you can work offline if you wish to transfer icons it's worth checking the other guide

[![nxgic-settings](<img/offline7.png>)]{I Manually add the location and click save|info}

adding your own icons can easily be done
keeping the file name structure:

| {==mariokart-8-deluxe==}-icon001-`[0100152000022000]` |
| :----------------------------------------------:|
| {==GAME-NAME==}-iconXXX-`[titleID]`            |

vertical icons start out at 600px x 900px (2:3 ratio) and must to resized to 256px x 256px
save as jpg non-progressive and keep the filesize under 120kb otherwise they may not load