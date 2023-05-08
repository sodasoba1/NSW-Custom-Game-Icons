Setting Up NX-GIC :material-book-open-page-variant-outline:
---
if you haven't already download [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer).

When you first launch the program you will need to ```scan``` so you can pull the icon repos
!!!info "there is also an offline method but I won't be going into that here."

![nxgic](<img/nx-gic.png>)
!!! Error "PLEASE NOTE"
	the icon repo is over 250mb in zip format with over 3100 files extracting can be slow
	
	I have moved Horizontal & Square icons to a seperate repo to save downloading and extracting nx-gic
	
	the process is still a little slow

Once complete we will set the switch ip for ftp transfers 
*within NX-CIG*

`File > Settings`

![ip](<img/settings.jpg>)

put your switch ip into the `Switch IP Address` textbox

`UserName` / `Password` credentials 

`SteamGridDB API Key`

[![ip](<img/ip.jpg>)]{Details how to find and setup can be found in the Prerequisites section|info}


!!! bug "1.4.0 bug: NOW CLOSE NX-GIC AFTER SAVING"
		once you have saved all the details be sure to `Close` NX-GIC
		and re-open the application before you continue
		
		this will fix the no login credentials found when you first try to open a FTP connection

##Installing NX Title List Dumper :fontawesome-solid-file-csv:
---

with `sys-ftpd-light` running on the switch lets install NX Title List Dumper from nx-gic

`Title IDs > Install NX Title List Dumper (NRO)`

![nxgic-tid](<img/nx-gic-tid.jpg>)

Follow the instructions on the popup.

[![nxgic](<img/popup1.jpg>)]{If you have followed the steps to adding the IP it will show up on this screen|large|error}

Our Switch IP Should Be here.
hit `yes` and the process will begin

![yes](<img/nx-gic-tid2.jpg>)

hit `yes` you will get a popup 

!!!Warning "Don't click anything yet"
	leave this pop up open and move to the switch and follow the steps for NX Titles List Dumper

![yes-popup](<img/nx-gic-tid3.jpg>)



###Using NX Titles List Dumper :fontawesome-solid-file-csv:
---

Once the nro is transferred  load nx-titles-list-dumper from hbmenu

![nxgic](<img/nxtitledump.jpg>)

![nxgic](<img/nxtitledump2.jpg>)

press :material-alpha-a-circle:{ .btna } to dump your installed title IDs

this will place a file into `SD:/titles.csv` once it's `done` 

press :fontawesome-solid-circle-plus:{ .yes } to exit

once `SD:/titles.csv` is dumped you can click `OK`

![yes-popup](<img/nx-gic-tid3.jpg>)

and hit `ok` in NX-GIC

![ftpd](<img/ok.jpg>)

If everything is sucessful you will see the completed

![cvs-complete](<img/done2.jpg>)

!!! Warning "transfer failure?!"
	if the ftp transfer of ***`titles.csv`*** fails (mine unfortunately did)

	place `titles.csv` :fontawesome-solid-file-csv: ___from___ the [`root`]{SDMC:/|success} of your SD card into the same folder as `NX-Game Icon Customizer.exe` 

	![ftpd](<img/yes3.jpg>)

# Auto NX-GIC :material-auto-fix:
---

Auto nx-gic can be used automatically select icons based off the installed titleIDs on your switch via `titles.csv`
from the NX Titles List Dumper homebrew

![nxgic](<img/auto-nx-gic.jpg>)

Click on `Auto GIC` to enable it 

then from the drop down select the `style` to match your installed theme

in this example I've chosen *vertical*

now nx-gic will match all of the icons found in titles.csv to icons on the repo

click on `Add All to Output` to add the matching icons to the upload queue

!!! Warning "Missing icons?"
	you may notice some icons aren't found or matched this can be due to 1 of 2 reasons
		
	1. The Icon Doesn't exist.
	2. The title ID you have is different from the title ID on the repo (US/EUR/JPN).

  	homebrew forwarders are usually not matched so you will have to manually change the TID in the output section
  
 you can also add icons individually auto-gic pics the first icon found.
 
!!!info "my repo might have multiple variants for certain games, it might have older variations of a TID for homebrew between different icons"

## Showing Icons Based off TitleID :material-list-status:
---
 you can show icons matching installed TIDs by clicking

 `Title IDs > show Icons for Installed Games only`

  [![nxgic](<img/gic-showins.jpg>)]{Setting this option will show icons that match what's installed on the switch based off the dumped titles.csv file|large|info}

## View A List of installed Games :material-format-list-checkbox:
---
 you may also individually look through each icon folder and use the CSV list to match icons
 by clicking 
 
 `title IDs > Show List of Installed Games (CSV)`
 [![nxgic](<img/showcsv.jpg>)]{Use the CSVlist to compare titles with icons|info}

#Editing your Output before tranferring :material-image-edit:
---

It's possible to edit your output before begining to transfer files to the switch

![nxgic-tidedit](<img/tid.jpg>)

you can edit titleID in the output section just by copying [++ctrl+c++]{copy} the titleID in the CSVlist and pasting [++ctrl+v++]{paste} the over titleID in output with your new titleID.

if your output has a game with a title you're unsure of like a japanese title in the example above

you can click on the {==:material-view-sequential-outline:==}`view` button and the icon will open and show you the image in the queue

:octicons-pencil-24: You can set a `custom title` / `Author` & `Version` which is excellent for Fan translations

editing in NX-GIC will make a config.ini file and place it in the same folder as the custom icon
```
[override_nacp]
name=my custom title name game
author=someone
display_version=X.X.X
```
you can see Yo-Kai Watch is renamed from japanese (妖怪ウォッチ) in the example below

[![yokai](<img/yokai.jpg>)]{Yo-Kai Watch Renamed from the japanese title 妖怪ウォッチ}

[![vTheme](<img/notice.jpg>)]{'妖怪ウォッチ' is renamed to 'Yo-Kai Watch' on the homescreen also|info}

This isn't a permanent "rename" it works the exact same way the icon takeover does.

!!!info "The majority of my repo is based on US TID"
	you can also use this blazing fast TID/Game search database
	[[https://titledblookup.stackblitz.io/](https://titledblookup.stackblitz.io/)]{Fast TitleID database lookup written by slluxx}
 
#Transferring :material-transfer:
---

when you are happy with your chosen icon(s) click `transfer`


!!! warning "sys-ftpd-light should be enabled on your switch"

hopfully you have already setup the IP of your switch as previously shown, click the ftp method

[![nxgic](<img/nx-gic5.png>)]{If you clear the queue all the icons you have added to the output will delete after uploading|large|right|warning}

click ```upload``` and you'll see the switch recieve the files, they're automatically transferred to the correct folders based off the titleID
in `SDMC:/atmosphere/contents/[titleid]/icon.jpg`

[![nxgic](<img/nx-gic6.png>)]{If you clear the queue all the icons you have added to the output will delete after uploading|large|right|warning}


once you've finished transferring you will see success in green

!!!Warning "You will need to reboot for icons to refresh"

##Recommended transfer method :material-order-bool-descending-variant:
---

I recommend using the ftp method over mtp as i personally find ftp to be a lot faster, especially when you are bulk transferring custom icons, that's the method I have always used.