

[Sys-Tweak is A collection of miscellaneous mitms.](https://github.com/p-sam/switch-sys-tweak) 
--
The use we need it for is intercepting the displayed game icon,
essentially it swaps out the icon shown for a installed title with an icon in our atmosphere cfw


` SDMC:/atmosphere/contents/TITLEID/icon.jpg `

## :fontawesome-solid-rocket: atmosphere 0.19.0+ ##

Build [switch-sys-tweak](https://github.com/p-sam/switch-sys-tweak) or alternatively use one of the links below of a pre compiled version.

| LATEST VERSION:                                                                                                         | Tested on                               | link up? |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------- |
| [[latest version on GBATemp](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub.574675/post-9738297)]{UP|success} | HOS 16.0.0 - AMS 1.5.2  			  | :fontawesome-solid-check:{ .yes } |
| [[p-sam sys-tweak github artifact](https://github.com/p-sam/switch-sys-tweak/actions)]{UP|success}                                    | [Same as above] | :fontawesome-solid-check:{ .yes } |
| [[16BitWonder-Git Repo](https://github.com/16BitWonder/switch-sys-tweak)]{Older Version|warning}								  | Forked Version	AMS 1.0.0		  | :fontawesome-solid-check:{ .yes } |

:fontawesome-solid-folder-tree: Sys-Tweak setup: 

You need to rename the [*[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp`]{github.com/p-sam/|right|rounded|bounce|success} 

Once you've done that place `exefs.nsp` in [`SDMC:/atmosphere/contents/00FF747765616BFF`]{SD Folder location|info}
setup this folder structure and contents on your SD card:

```													  
SDMC:/atmosphere/contents/00FF747765616BFF/flags/		  
                          │                └ boot2.flag  
                          ├ exefs.nsp					  
                          └ toolbox.json				  
```
													  
---
toolbox.json is a settings file so sys-tweak can be switched off and on in the homebrew menu via a homebrew toolbox
 deepsea toolbox
[`SDMC:/atmosphere/contents/00FF747765616BFF/toolbox.json`]{json location on the SD Card|info}
```
{
  "name": "sys-tweak",
  "tid": "00FF747765616BFF",
  "requires_reboot": true
}
```

boot2.flag should be a empty file! [:material-alert-decagram:{ .no }]{rename a blank txt file|right|error}
	[`SDMC:/atmosphere/contents/00FF747765616BFF/flags/boot2.flag`]{empty text file|error}
---
!!! new "Pre Setup Archive of folder structure without sys-tweak"
	Alternatively I have the toolbox.json & boot.flag files pre setup [*[here](https://github.com/sodasoba1/NSW-Custom-Game-Icons/raw/main/setup-00FF747765616BFF.zip)*]{Download|success} 
      
      simply copy the contents to the [*{++root++}* of your sd card :fontawesome-solid-sd-card:{ .mild }]{SDMC:/|info|right}
	
	you will still need to download and to rename the *[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp`

once you have finished your sys-tweak folder [`00FF747765616BFF`]{SD:/atmosphere/contents/00FF747765616BFF/|bottom} it should like similar to this:

[![SD-contents](<img/sdcontents1.png>)]{SD:/atmosphere/contents/00FF747765616BFF/|right}

--- 

### Older Version ###

**atmosphere 0.18.0**
a pre compiled version can be found on GBATEMP to get custom icons working you will need [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/page-10#post-9366960) `NSAM` seems to work better if that crashes try the other version