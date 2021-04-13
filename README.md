![Header](<.screenshots/header.jpg>)
### Written for nx-gic v1.3.0 ###

:memo: to use this repo correctly you will need to preapare your switch first :memo:

:heavy_check_mark: this entire guide and process only works on atmosphere

:x: sxos will not work :x:

***

**Prerequisite** items recommended for this tutorial:

 * Nintendo Switch :video_game:
   * :one: [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere) -CFW 
   * :two: [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/) -cfw sysmodule/homebrew 
   * :three: [ftpd](https://github.com/mtheall/ftpd/releases/) -nro/homebrew 
   * :four: [NXThemesInstaller](https://github.com/exelix11/SwitchThemeInjector/releases/) -nro/homebrew 
   * :five: [Vertical/Horizontal Theme](https://github.com/hotshotz79/NX-Custom-Game-Icons) -NXTheme/homebrew theme file(s)
		* :arrow_right_hook: [my vertical themes](https://github.com/sodasoba1/nx-vertical-themes) -optional
   * :six: [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) -nro/homebrew (*Pulled with nc-gix 1.3.0*)
 * PC :computer:
   * :one: [NX-GIC](https://github.com/hotshotz79/NX-Game-Icon-Customizer) -Icon Repo & Transfer tool
     * :arrow_right_hook: FTP
	 >![titledump](<.screenshots/nx-gic-rel.png>)
	 >
	 >:left_speech_bubble:winSCP is bundled with NXGIC

   
***

I recommend using the ftp method over mtp as i personally find ftp to be faster, especially when you are bulk transferring custom icons, so that's the method I will be outlining in this tutorial.

Firstly grab [ftpd.nro](https://github.com/mtheall/ftpd/releases/) & [NXThemesInstaller.nro](https://github.com/exelix11/SwitchThemeInjector/releases/download/v-4.6/NXThemesInstaller.nro) and place the nro(s) into `SD:/switch/` both of these are available on the _homebrew appstore!_

![AppStore](<.screenshots/appstore.jpg>)

**atmosphere 0.19.0 a lot changed follow these steps**
Grab [switch-sys-tweak](https://github.com/p-sam/switch-sys-tweak/actions) - the latest build is usually in `AMS X.XX.X git pull`
You need to rename the *[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp` and set up a *[toolbox.json](/setup-00FF747765616BFF.zip)* with the following contents:

`SD:/atmosphere/contents/00FF747765616BFF/toolbox.json`

```
{
  "name": "sys-tweak",
  "tid": "00FF747765616BFF",
  "requires_reboot": true
}
```
>`SD:/atmosphere/contents/00FF747765616BFF/flags/boot2.flag` -empty file

Once you've done that create this folder and contents on your SD card:
```
atmosphere/
    ˪ contents/
       ˪ 00FF747765616BFF/
              ˪ flags/
                  ˪ boot2.flag
       ˪ exefs.nsp
       ˪ toolbox.json
```

I have the toolbox.json & boot.flag pre setup *[here](/setup-00FF747765616BFF.zip)* just copy the contents to the `root` of your sd card `SD:/`
you will still need to download and to rename the *[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp`

***

**atmosphere 0.18.0**
a pre compiled version can be found on GBATEMP to get custom icons working you will need [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/page-10#post-9366960) `NSAM` seems to work better if that crashes try the other version

once you have the precompiled sys-tweak place the contents of the archive into 
```SD:/atmosphere/contents/```
the folder ```00FF747765616BFF``` should transfer over & look like similar to this:

![SD-contents](<.screenshots/sdcontents1.png>)
>
>`SD:/atmosphere/contents/00FF747765616BFF`


***

Grab a horizontal or vertical theme from [Hotshotz79 Custom Game Icons repo](https://github.com/hotshotz79/NX-Custom-Game-Icons) 
 > :arrow_right_hook: or you can use mine [my vertical themes](https://github.com/sodasoba1/nx-vertical-themes)

__vertical__ or __horizontal__

* all - all software screen
* lock - lockscreen
* home - homescreen

>:left_speech_bubble: I recommend grabbing all 3 types for either theme
***

make a folder on the `root` of your SD card called ```themes``` if it doesn't already exist

place the 3 ```.nxtheme``` in this folder.

![SD-contents](<.screenshots/sdcontents2.png>)
>
>`SD:/themes`

now launch NXThemes Installer from hbmenu

![SD-contents](<.screenshots/nxthemeinst.jpg>)

follow the setup instructions, *you may need to extract the home menu before being able to install themes*

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
>:left_speech_bubble: this part will take a while as it's grabbing 2800+ icons

Now lets setup the switch ip for ftp transfers 
>`File > Settings`
>
> ![ip](<.screenshots/settings.jpg>)

put your switch ip into the box

> ![ip](<.screenshots/ip.jpg>)
>
>:left_speech_bubble:If you are unsure what your switch IP is open up FTPD on your switch, this is also the next step.

open FTPD on your switch from the hbmenu and input the switch ip shown in ftpd into the FTP selection in nx-gic
![ftpd](<.screenshots/nxftpd.jpg>)

![nxgic](<.screenshots/ftpd1.jpg>)
>:left_speech_bubble: port number isn't required but must be set to `5000` which is the default port for ftpd


with ftpd running in nx-gic goto 

>`Title IDs > Install NX Title List Dumper (NRO)`
>
>![nxgic-tid](<.screenshots/nx-gic-tid.jpg>)

Follow the instructions on the popup.

![nxgic](<.screenshots/popup1.jpg>)
>:left_speech_bubble: Our Switch IP Should Be here.
hit `yes` and the process will begin

>
>if you want to install manually hit `no` and you'll be taken to [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) download the and place the .nro into `SD:/switch/`

![yes](<.screenshots/yes.jpg>)

hit `yes` you will get a popup 

>![yes-popup](<.screenshots/yes2.jpg>)
>
>:left_speech_bubble: I will Details these steps below

once the nro is transferred  load nx-titles-list-dumper from hbmenu

![nxgic](<.screenshots/nxtitledump.jpg>)

>nx-titles-list-dumper
>
>![nxgic](<.screenshots/nxtitledump2.jpg>)
>
>press `[A]` to dump your installed title IDs
>
>into `SD:/titles.csv` once it's `done` 
>
>press `[+]` to exit

once `SD:/titles.csv` is dumped, open ftpd from the hbmenu again

![ftpd](<.screenshots/nxftpd.jpg>)

and hit `ok` in NX-GIC

![ftpd](<.screenshots/ok.jpg>)

>:no_entry: :arrow_down_small: *NOTICE* :arrow_down_small: :no_entry:
>
>if the ftp transfer of `titles.csv` fails (mine unfortunately does)
>place `titles.csv` from the `root` of your SD card into the same folder as `NX-Game Icon Customizer.exe` 
>
>![ftpd](<.screenshots/yes3.jpg>)
>
>:no_entry: :arrow_up_small: NOTICE :arrow_up_small: :no_entry:

![cvs-complete](<.screenshots/done2.jpg>)

***
![nxgic](<.screenshots/auto-nx-gic.jpg>)

Click on `Auto GIC` then from the drop down select the `style` to match your installed theme

in this example I've chosen *vertical*

now nx-gic will match all of the icons found in titles.csv to icons on the repo
click on `Add All to Output` to add the matching icons to the upload queue

>you may notice some icons aren't found or matched this can be due to 1 of 2 reasons
>	
>*	1. The Icon Doesn't exist.
>	2. The title ID you have is different from the title ID on the repo.
>  *	:arrow_right_hook: homebrew forwarders are usually not matched so you will have to manually change the TID in the output section
  
 you can also add icons individually auto-gic I believe picks the first icon found.
 
 my repo might have multiple variants for certain games, it might have variations of TID for homebrew between different icons
 
 you can show icons for just matching IDs by clicking 
 
 >`Title IDs > show Icons for Installed Games only`
 >
 >![nxgic](<.screenshots/gic-showins.jpg>)
 
 you may also individually look through each icon folder and use the CSV list to match icons
 by clicking 
 
 >`title IDs > Show List of Installed Games (CSV)`
 >
 >![nxgic](<.screenshots/showcsv.jpg>)

You can also edit your output before transferring files to the switch
>![nxgic-tidedit](<.screenshots/tid.jpg>)
>
>you can edit titleID in the output section just by copying `CTRL+C` the titleID in the CSVlist and pasting`CTRL+V` the over titleID in output with your new titleID.
>
>:left_speech_bubble:The majority of my repo is based on US TID
>
>if like my output you have a a game with a title you're unsure of, in this example it's Yo-Kai Watch
>you can click on the `view` button and the icon will open and show you the image in the queue
>
>You can set a custom title / Author & Version if you wish.8
 
***

when you are happy with your chosen icon(s) click `transfer`

>FTPD should be open on your switch
>
>![ftpd](<.screenshots/nxftpd.jpg>)

![nxgic](<.screenshots/nx-gic5.png>)

click ```upload``` and you'll see the switch recieve the files, they're automatically transferred to the correct folders based off the titleID
in `SD:/atmosphere/contents/[titleid]/icon.jpg`

![nxgic](<.screenshots/ftpd2.jpg>)

once you've finished transferring you can close ftpd 

>You may need to reboot for icons to refresh

Here are the results of what we have just done

As you can see Yo-Kai Watch is renamed

![yokai](<.screenshots/yokai.jpg>)

![vTheme](<.screenshots/notice.jpg>)

and check out all your new icons in `all software`

![finished](<.screenshots/done.jpg>)

>Title renaming will not sort games in the order by title this is a cosmetic change only.

>## :incoming_envelope: feel free to request icons from me via GBATemp :incoming_envelope:##
> :link:[SodaSoba @ GBATemp](https://gbatemp.net/members/sodasoba.449962/)

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

:link: [cucholix](https://gbatemp.net/members/cucholix.411991/) @ GBATemp for sharing the process to making these work

:link: [p-sam](https://github.com/p-sam) for the *AWESOME* work on switch-sys-tweak

:link: [hotshotz79](https://github.com/hotshotz79) for nx-gic both vert & horizontal themes and reaching out and considering me as a tester for his app

:link: [exelix](https://github.com/exelix11) for the switch themes injector

:link: [mtheall](https://github.com/mtheall) for ftpd

:link: [HamletDuFromage](https://github.com/HamletDuFromage) for [nx-titles-list-dumper](https://github.com/HamletDuFromage/nx-titles-list-dumper/releases) which was a fullfilled request I made on GBATemp

all the atmosphere team for an awesome CFW :link: [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere)

If I've missed you I'm sorry & feel free to get in touch. :incoming_envelope:
