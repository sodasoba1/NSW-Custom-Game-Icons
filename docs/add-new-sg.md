You can add images into NX-GIC via SteamGridDB be sure to add the [API KEY](sg-api.md)

Click on `Add New` and select `Online`

#![add-new](<img/add-newsg1.png>)

in the `Find:` textbox input the title you are searching for
#![add-new](<img/add-newsg2.png>)

once a search is complete you should be able to find the game from the drop down menu
#![add-new](<img/add-newsg3.png>)

!!! info
	if you don't get a result try a variation by shortening the game

After you have chosen the game select the icon size you want to add

#![add-new](<img/add-newsg4.png>)

now click `Pull` and if any icons are available they will show.

#![add-new](<img/add-newsg5.png>)

choose the icon you want and click on `Add`

#![add-new](<img/add-newsg6.png>)

Search for the Title ID by clicking `Find...`

CSV will look for titleIDs from the installed titles off the switch

JSON checks a online title database and will take significantly longer

you can also check slluxx's [titledblookup](https://titledblookup.stackblitz.io/)

#![add-new](<img/add-newsg7.png>)

when a result it found via searching simply choose the matching game and click `OK`

#![add-new](<img/add-newsg8.png>)

you will see the Icon Name & Title ID are in the textboxes and click `Add`
#![add-new](<img/add-newsg9.png>)

the new icon will be put into the output windows ready for transfer
#![add-new](<img/add-newsg11.png>)

#Transferring :material-transfer:
---

when you are happy with your chosen icon(s) click `transfer`


!!! warning "sys-ftpd-light should be enabled on your switch"

hopfully you have already setup the IP of your switch as previously shown, click the ftp method

[![nxgic](<img/nx-gic5.png>)]{If you clear the queue all the icons you have added to the output will delete after uploading|large|right|warning}

click ```upload``` and you'll see the switch recieve the files, they're automatically transferred to the correct folders based off the titleID
in `SD:/atmosphere/contents/[titleid]/icon.jpg`

[![nxgic](<img/nx-gic6.png>)]{If you clear the queue all the icons you have added to the output will delete after uploading|large|right|warning}


once you've finished transferring you will see success in green

!!!Warning "You will need to reboot for icons to refresh"

