With NX-GIC you can add new icons multiple ways, this method I will use a cover from the xbox store
you can do this with almost any website image with some *minor* `Caveats` a *.webp image will __NOT__ work.

Click on `Add New` and Select the *icon style* you are trying to add, in the example below it's vertical

#![add-new](<img/add-new1.png>)

on the xbox store right click the image you want to add as a cover and open in a new tab

#![add-new](<img/add-new2.png>)

with the xbox store URL you will see a long URL copy the link leaving the ending off after `?`
the link doesn't have a image extension but I'll explain the ending url `?q=90&w=177&h=265`
```
q=90 quality
w=177 width
h=265
```
leaving this off the url will give you the full sized image which will give you a better image
#![add-new](<img/add-new3.png>)

| Full link final quality | Link without `?q=90&w=177&h=265` |
|-------------------------|----------------------------------|
| ![add-new](<img/addexlq.jpg>) | ![add-new](<img/addexfull.jpg>) |

Now once you have copied the link you want to add simply click the `URL` button
and the link will automatically be pasted into the resize window simply click `OK`
#![add-new](<img/add-new4.png>)

now you will see a preview of how the icon will look, we need to find the right title ID that matches our game
so you may need to add the icon name or use a shorter name just to find the correct titleID

click `Find...`

search with your preferred method *CSV* will only look based off installed titles

*JSON* will search a much larger file and might take some time to find matches
#![add-new](<img/add-new5.png>)

once you have found the correct Title click `OK`
#![add-new](<img/add-new6.png>)

You will notice the Icon Name may update & the Title ID will now be shown in the text box
double check everything is correct and click `Add`
#![add-new](<img/add-new7.png>)

after you have Added the image it will be put into the output window ready for transfer as well as your NX-GIC repo on your system
#![add-new](<img/add-new8.png>)

Simply Click Transfer and follow the usual transferring steps
#![add-new](<img/add-new9.png>)

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



