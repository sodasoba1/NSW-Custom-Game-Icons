### *NX-Custom-Game-Icons* ### 
## This repo is mainly for  [@hotshotz79 NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) ##


#### Tutorial needs further editing and clearing up ####

to use this repo correctly you will need to preapare your switch first, this entire guide is for atmosphere I've never tested under sxos.

I recommend using [ftpd](https://github.com/mtheall/ftpd/releases/) on the switch & winscp(or a ftp program of your choice)
ftpd is available on homebrew appstore!

to get custom icons to load you will need [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/) a pre compiled version can be found on gba temp
as of writing this *00ff747765616bff_0-16-x_fix* works with firmware11 & [Atmosphere 0.18.1](https://github.com/Atmosphere-NX/Atmosphere) 

once you have the precompiled sys-tweak place the contents of the archive into 
```SD:/atmosphere/contents/```
the folder ```00FF747765616BFF``` transfer over & look like similar to this:

![SD-contents](<screenshots/sdcontents1.png>)

now you will need to install [NXThemesInstaller.nro](https://github.com/exelix11/SwitchThemeInjector/releases/download/v-4.6/NXThemesInstaller.nro)

for horizontal or vertical themes grab the preferred theme from https://github.com/hotshotz79/NX-Custom-Game-Icons

__vertical or horizontal__

i recommend grabbing all 3 types [ all | lock | home ]
***

make a folder on your SD card root called ```themes``` and place the 3 ```themename.nxtheme``` in this folder.

![SD-contents](<screenshots/sdcontents2.png>)

launch NXThemes Installer, follow the setup steps you may need to extract the home menu before being able to install themes
click ```sdmc:/atmosphere/``` if you have multipleCFW installed & choose the theme you want to install
![NXThemes](<screenshots/nxtheme.jpg>)
![NXThemes](<screenshots/nxtheme2.jpg>)
![NXThemes](<screenshots/nxtheme3.jpg>)	
once you've installed the theme(s) you will need to reboot.

congratulations you have now installed the theme(s) now we can start selecting custom icons
grab [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) and we will begin the next step

***

when you first launch the program you will need to ```scan``` so you can pull the icon repos
>this part may take a while as it's grabbing 2500+ icons

![nxgic](<screenshots/nx-gic.png>)

now choose the style based on which theme you installed by using the drop down menu
![nxgic](<screenshots/nx-gic2.png>)
check your output window and make sure everything is right make sure you havent added the same icon multiple times, if you have simply delete it from the output winsdow by clicking the red box.

for this example I'll be installing 1 2 switch Horizontal Icon
![nxgic](<screenshots/nx-gic3.png>)

when you are happy with your selected icons click transfer
>As stated I'll be doing the ftp method.
![nxgic](<screenshots/nx-gic4.png>)

open FTPD on your switch and input the switch ip into the FTP selection in nx-gic
![nxgic](<screenshots/ftpd1.jpg>)

click ```upload``` and you'll see the switch recieve the files, they're automatically transferred to the correct folder based off the titleID (majority of my repo is based on usa titleID)
![nxgic](<screenshots/ftpd2.jpg>)

![nxgic](<screenshots/nx-gic5.png>)



> make things easier grab [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) which is a title ID & game name dumper
this program will dump all your titleIDs & game name inst ```titles.csv``` on the ```root``` of your SD card
you can open this file in notepad but I recommend _notepad++_ with the _CsvQuery plugin_ that way you can sort the csv alphabetically
![csv1](<screenshots/sortcsv1.png>)![csv2](<screenshots/sortcsv2.png>)


---

   *[DEFAULT ICONS](https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/tree/main/Default)
   
   *[HORIZONTAL ICONS](https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/tree/main/Horizontal)
   
   *[VERTICAL ICONS](https://github.com/sodasoba1/NSW-Custom-Game-Icons/tree/main/Vertical)

|![](https://placehold.it/100x10/ff6600/000?text=+)| PLEASE NOTE |![](https://placehold.it/100x10/ff6600/000?text=+)|

Horizontal icons are resized to 256x256 from 422x256 but when the horizontal theme is applied the icons show correctly
>this same method also applies to the vertical icons

<img src="https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/raw/main/Horizontal/C/cuphead-icon003-%5B0100A5C00D162000%5D.jpg" width="128" height="128"> changes to <img src="https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/raw/main/Horizontal/C/cuphead-icon003-%5B0100A5C00D162000%5D.jpg" height="128" width="211">

![HorizontalTheme](<screenshots/notice.jpg>)

Credits & Thanks
----------------

cucholix @ GBATemp for sharing the process to making these work

[p-sam](https://github.com/p-sam) for the AWESOME work on switch-sys-tweak

[hotshotz79](https://github.com/hotshotz79) for nx-gic both vert & horizontal themes and reaching out and considering me as a tester for his app

[exelix](https://github.com/exelix11) for the switch themes injector

[HamletDuFromage](https://github.com/HamletDuFromage) for [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) which was a fullfilled request I made on GBATemp

all the atmosphere team for an awesome CFW [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere)
