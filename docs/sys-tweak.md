
## atmosphere 0.19.0+ ##

Build [switch-sys-tweak](https://github.com/p-sam/switch-sys-tweak) or alternatively use one of the links below of a pre compiled version.

| LATEST VERSION:                                                                                                         | Tested on                               | link up? |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------- |
| [latest version on GBATemp](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub.574675/post-9738297) | HOS 14.1.0 - AMS 1.3.1  			  | :fontawesome-solid-check:{ .yes } |
| [p-sam sys-tweak github artifact](https://github.com/p-sam/switch-sys-tweak/actions)                                    | Same as above **expired as of writing** | :material-close:{ .noggle } |
| [16BitWonder-Git Repo](https://github.com/16BitWonder/switch-sys-tweak)								  | Forked Version	AMS 1.0.0		  | :fontawesome-solid-check:{ .yes } |

You need to rename the *[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp`

Once you've done that place `exefs.nsp` in `SDMC:/atmosphere/contents/00FF747765616BFF`
setup this folder structure and contents on your SD card:

```													  
SDMC:/atmosphere/contents/00FF747765616BFF/flags/		  
                          │                └ boot2.flag  
                          ├ exefs.nsp					  
                          └ toolbox.json				  
```
													  
---
`SDMC:/atmosphere/contents/00FF747765616BFF/toolbox.json`
```
{
  "name": "sys-tweak",
  "tid": "00FF747765616BFF",
  "requires_reboot": true
}
```

!!! Error "boot2.flag should be a empty file! :material-alert-decagram:{ .no }"
	`SDMC:/atmosphere/contents/00FF747765616BFF/flags/boot2.flag`

!!! new "Pre Setup Archive of folder structure without sys-tweak"
	Alternatively I have the toolbox.json & boot.flag files pre setup *[here](https://github.com/sodasoba1/NSW-Custom-Game-Icons/raw/main/setup-00FF747765616BFF.zip)* 
      
      simply copy the contents to the *{++root++}* of your sd card :fontawesome-solid-sd-card:{ .mild }
	
	you will still need to download and to rename the *[sys-tweak.nsp](https://github.com/p-sam/switch-sys-tweak/actions)* to `exefs.nsp`

once you have finished your sys-tweak folder ```00FF747765616BFF``` it should like similar to this:

>`SD:/atmosphere/contents/00FF747765616BFF/`
>![SD-contents](<img/sdcontents1.png>)


### Older Version ###

**atmosphere 0.18.0**
a pre compiled version can be found on GBATEMP to get custom icons working you will need [switch-sys-tweak](https://gbatemp.net/threads/custom-game-icons-tutorial-and-sharing-hub-no-forwarders.574675/page-10#post-9366960) `NSAM` seems to work better if that crashes try the other version