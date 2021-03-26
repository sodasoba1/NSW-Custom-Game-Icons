# *NX-Custom-Game-Icons* #
#### This repo is mainly for  [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) @hotshotz79 ####


#### Tutorial may be edited and Altered when nx-gic is updated ####

:page_with_curl: to use this repo correctly you will need to preapare your switch first, this entire guide is for *atmosphere*
>I've never tested under sxos I'm unsure if it works for sxos.
***
Prerequisite items recommended for this tutorial:

 * Nintendo Switch
   * [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere) -CFW
   * [ftpd](https://github.com/mtheall/ftpd/releases/) -nro/homebrew
   * [NXThemesInstaller](https://github.com/exelix11/SwitchThemeInjector/releases/) -nro/homebrew
   * [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/) -cfw sysmodule/homebrew
   * [Vertical/Horizontal Theme](https://github.com/hotshotz79/NX-Custom-Game-Icons) -NXTheme/homebrew theme file(s)
   * [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) -nro/homebrew (optional/recommended)
 * PC
   * [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) -Icon Repo & Transfer tool
     * FTP
	 >:left_speech_bubble:winSCP is bundled with NXGIC
	 >
	 >![titledump](<.screenshots/nx-gic-rel.png>)
   * Notepad++ with CsvQuery (optional)
   
***

I recommend using the ftp method over mtp as i personally find ftp to be faster, especially when you are bulk transferring custom icons, so that's the method I will be outlining in this tutorial.

Firstly grab [ftpd.nro](https://github.com/mtheall/ftpd/releases/) & [NXThemesInstaller.nro](https://github.com/exelix11/SwitchThemeInjector/releases/download/v-4.6/NXThemesInstaller.nro) and place the nro(s) into `SD:/switch/` both of these are available on the _homebrew appstore!_

![titledump](<.screenshots/appstore.jpg>)

***

>:exclamation:*(optional)* make titleID & icon matching easier grab [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) and place the NRO into `SD:/switch/`
>
>this program will dump all your titleIDs & Title names into a file ```titles.csv``` in the ```root``` of your SD card
>
>![ftpd](<.screenshots/nxtitledump.jpg>)
>
>![titledump](<.screenshots/titledump.jpg>)
>
>:exclamation:you can open this file in notepad but I recommend *notepad++* with the *CsvQuery plugin* that way you can sort the csv alphabetically
>
>![csv1](<.screenshots/sortcsv1.png>)![csv2](<.screenshots/sortcsv2.png>)

***

to get custom icons working you will need [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/) a pre compiled version can be found on [gbatemp](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/) with further information on this sysmodule.
>:left_speech_bubble:Currently *`00ff747765616bff_0-16-x_fix`* works with firmware 11 & [Atmosphere 0.18.1](https://github.com/Atmosphere-NX/Atmosphere) 

once you have the precompiled sys-tweak place the contents of the archive into 
```SD:/atmosphere/contents/```
the folder ```00FF747765616BFF``` should transfer over & look like similar to this:

![SD-contents](<.screenshots/sdcontents1.png>)

for horizontal or vertical themes grab the preferred theme from [Hotshotz79 custom game icon theme repo](https://github.com/hotshotz79/NX-Custom-Game-Icons)

__vertical__ or __horizontal__

i recommend grabbing all 3 types for either theme

* all - all software screen
* lock - lockscreen
* home - homescreen

***

make a folder on the root of your SD card called ```themes``` if it doesn't already exist

place the 3 ```themename.nxtheme``` in this folder.

![SD-contents](<.screenshots/sdcontents2.png>)

now launch NXThemes Installer from hbmenu

![SD-contents](<.screenshots/nxthemeinst.jpg>)

follow the setup instructions, you may need to extract the home menu before being able to install themes
click ```sdmc:/atmosphere/``` if you have multipleCFW installed

![NXThemes](<.screenshots/nxtheme.jpg>)

Select the theme(s) you want to install

![NXThemes](<.screenshots/nxtheme2.jpg>)

once you've installed the theme(s) you will need to reboot.

![NXThemes](<.screenshots/nxtheme3.jpg>)

congratulations you have now installed the theme(s) now we can start selecting custom icons
if you haven't already downloaded [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) do that now and we will begin the next step.

***

When you first launch the program you will need to ```scan``` so you can pull the icon repos, there is also an offline method but I won't be going into that here.

![nxgic](<.screenshots/nx-gic.png>)
>:left_speech_bubble:this part may take a while as it's grabbing 2500+ icons

once the scan is finished choose the style based on which theme you installed by using the drop down menu

![nxgic](<.screenshots/nx-gic2.png>)
>:left_speech_bubble: There are 3 options to choose from Default, Horizontal & Vertical
>
>*for this tutorial I'll be installing 1 2 switch icon for the Horizontal theme.*

select the number folder `0-9`(:one:) and double click the `1-2 switch icon`(:two:) you should now see the output section now has the icon queued up.
![nxgic](<.screenshots/nx-gic3.png>)
>:exclamation:*(optional)* you can double check you have the correct TitleID by comparing the output section of NX-GIC with the titles.csv file pulled from your switch if you followed my optional recomendations and installed [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases).
>
>you can edit titleID in the output section just by clicking the titleID and replacing the old titleID with your new titleID.
>
>:left_speech_bubble:The majority of my repo is based on US TID
>
>![nxgic-tidedit](<.screenshots/tid-edit.png>)
>
>:left_speech_bubble:in the above image I have replaced my sonic2 homebrew TitleID from `0520A8A066160000` to `05C8E9A645B8A000`

when you are happy with your chosen icon(s) click `transfer`(:three:)
>
>:left_speech_bubble:As I stated I'll be doing the FTP method

![nxgic](<.screenshots/nx-gic4.png>)

open FTPD on your switch from the hbmenu and input the switch ip shown in ftpd into the FTP selection in nx-gic
![ftpd](<.screenshots/nxftpd.jpg>)

![nxgic](<.screenshots/ftpd1.jpg>)
>:left_speech_bubble:port number isn't required unless it's different from `5000` which is the default port for ftpd

![nxgic](<.screenshots/nx-gic5.png>)

click ```upload``` and you'll see the switch recieve the files, they're automatically transferred to the correct folders based off the titleID
in `SD:/atmosphere/contents/[titleid]`

![nxgic](<.screenshots/ftpd2.jpg>)

The majority of my repo is based on usa titleID, homebrew forwarder titleIDs will probably differ so double check homebrew.

once you've finished transferring you can close ftpd 

![HorizontalTheme](<.screenshots/notice.jpg>)

and check out all your new icons in `all software`
![finished](<.screenshots/done.jpg>)

>## :left_speech_bubble:feel free to request icons from me via GBATemp ##

---
you can also extract layout.json and use it with other themes using switch theme injector on the pc or exelix online injector
![finished](<.screenshots/horizontal-home.jpg>)

![finished](<.screenshots/vertical-home.jpg>)
---

   *[DEFAULT ICONS](https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/tree/main/Default)
   
   *[HORIZONTAL ICONS](https://github.com/sodasoba1/NX-Custom-Game-Icons-Horizontal/tree/main/Horizontal)
   
   *[VERTICAL ICONS](https://github.com/sodasoba1/NSW-Custom-Game-Icons/tree/main/Vertical)


Credits & Thanks
----------------

cucholix @ GBATemp for sharing the process to making these work

[p-sam](https://github.com/p-sam) for the AWESOME work on switch-sys-tweak

[hotshotz79](https://github.com/hotshotz79) for nx-gic both vert & horizontal themes and reaching out and considering me as a tester for his app

[exelix](https://github.com/exelix11) for the switch themes injector

[mtheall](https://github.com/mtheall) for ftpd

[HamletDuFromage](https://github.com/HamletDuFromage) for [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) which was a fullfilled request I made on GBATemp

all the atmosphere team for an awesome CFW [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere)

If I've missed you I'm sorry & feel free to get in touch.
