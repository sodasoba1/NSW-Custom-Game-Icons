# How to make your own icons

This Guide was written originally on [GBATemp](https://gbatemp.net/threads/how-to-obtain-assets-to-make-custom-game-covers.624354/)
I'm adding this here for prosperity.
---


This write up is something to help people make their own

game covers using freely available assets from the net and everywhere and anywhere.



this guide is mainly going to involve switch games but it can easily apply to ANY game within reason

you can grab the biggest assets and images with ease, here is a small example:



![HUGE FILE SIZES](<img/big.png>)



technically you do not  have to keep assets once you are done,

but believe me when I say if you catch a game early enough you may find assets

that you may never see again without some luck using the [wayback machine](https://archive.org/web/).



![HUGE FILE SIZES](<img/size.png>)



Still don't believe me?

#Here's a quick test for you:
The Game is RXN: RXN -Raijin- or RXN -雷神-

this game was delisted the developer was Gulti and the publisher was KAYAC Inc

with EastAsiaSoft releasing a limited physical version in the asian market

![RXN1](<img/rxn2.png>)

try and find the logo that's `727` x `623` & transparent using regular search engine results.
![RXN1](<img/rxn.png>)
---
# Tutorial 1
in this example I'm going to explain how you can use a games website to grab assets for making a cover.



I've written this guide using a chromium based browser so things may slightly differ

but I hope this is a catch all quick and dirty tutorial.



when you visit the site of choice in your browser click the menu icon ++context-menu++

select {==more tools==} > {==Developer tools==} alternatively use the keyboard shortcut by pressing [++ctrl+shift+i++]{Open DevTools}



![dev1](<img/devtools.png>)



in the developer window Click on {==Network==} then click on {==Img==} and reload the webpage [++f5++]{RELOAD} or [++ctrl+r++]{RELOAD}



![dev2](<img/devtools2.png>)


when you the page reloads you will see a load of various images choose the images you want to use and save them
in this example I grabbed the brick texture tile and {==Save image as...==}



![dev3](<img/devtools3.png>)



you can also get images from :material-newspaper-variant-outline: press kits which usually contain promotional material which can vary between developers, 

some contain {==:fontawesome-solid-file-pdf: PDFs==} and {==:fontawesome-solid-panorama: wallpapers==} 

others may include full sized individual assets or {==:fontawesome-regular-file-image: PSDs==} with adjustable layers.

Not all developers have press kits and some use a templated press kit site or require you to signup



![presskit](<img/presskit.png>)



so using the press kit & the tiles background from the game site you can see I have made a very quick and alternative cover

`600px` x `900px`



![fin1](<img/final.png>)



I tend to save versions rather directly mess with included psds
![fin1](<img/final2.png>)

this was the final result of the quick edit made.



this is just a very basic method, sometimes you may have to make your own assets

this is why the largest images you can find are better for cutting out etc.

---

# Tutorial 2
If you are just after a vertical cover you might have luck using the <font size="5">:fontawesome-brands-xbox:{.yes}</font> xbox website

in the example below you can see the cover we are going to grab but it's quite small on the website 
I'll show you how to get the bigger image

![ms1](<img/ms1.png>)

:fontawesome-solid-computer-mouse: ++right-button++ the image and {==Open Image in new tab==}

after you open the new image you will notice the URL is very long

in this example I'll be remove the everything after the `?`

![ms2](<img/ms2.png>)

{--?q=90&w=177&h=265--} this is basically the *quality, width & height*

after removing that text press enter and voila the full size image

![ms3](<img/ms3.png>)



:fontawesome-solid-computer-mouse: ++right-button++ and {==save the image==}



![ms4](<img/ms4.png>)



simply rename the file `<yourchoice>.jpg` in this example i used `xbox.jpg`

!!! Warn "PLEASE NOTE"
		it's important to include `.jpg` otherwise the image will have a long extension  like the one in the image above 
		
		
and there is the full sized image from website `720px` x `1080px` at the best quality it hosts

which is perfectly {==2:3 ratio==}


![ms5](<img/ms5.png>)

--------

the same can be done with  <font size="5"><span style="color:#2E6DB4">:fontawesome-brands-playstation:</span></font> playstation's store front but I tend to use it less



so similar to tutorial 1 above I'm using {==developer tools==} again



click the context menu icon (3 lines) ++context-menu++

select {==More tools==} > {==Developer tools==} or press [++ctrl+shift+i++]{DevTools}



![dev](<img/devtools.png>)



but unlike the first example you will need to {==Open image in new tab==}



![ps1](<img/ps1.png>)



as with the xbox site, playstation also use resizing via the URL simply remove the text after `?` again

![ps2](<img/ps2.png>)



even if the image shows as a jpg in the url for me they save as webp but most new image programs open them such as gimp or even paint

![ps3](<img/ps3.png>)

alternatively you could grab the whole URL leaving out `?` and make a hyperlink in a html file and {==save target as==}

--------


other sites such as SteamDB you can grab the portrait image



simply click {==:material-information-outline: information==} and under *library_assets* you can usually find logo's here also.

![steamdb](<img/steamdb.png>)

[SteamgridDB](https://www.steamgriddb.com/) also has the same api access and you can view the original assets by clicking on any game and
pressing the {==View Original Steam Assets==} button near the top



obviously steamgridDB is a very awesome site for game covers but they don't include every game and you may find they don't have a listing but you can help them by making artwork and request a listing [Request a Game](https://www.steamgriddb.com/request-game)

I have done this in the past for [Azure Striker Gunvolt 3 (2022)](https://www.steamgriddb.com/game/5327787)

---


# Tutorial 3 : Thinking outside the box

Sometimes if you think outside of the box you might find images that just aren't super easy to find.

searching for images from just one search engine isn't always going to get images.



I tend to start with duckduckgo (ddg) because it has shortcuts using <span style="color:#E37151">{==:fontawesome-solid-exclamation:bangs==}</span>

!!! Note "What are <span style="color:#E37151">bangs</span>?"
	[Bangs are shortcuts that quickly take you to search results on other sites.](https://duckduckgo.com/bangs) :material-link-variant:
	
	I believe brave search uses the same <span style="color:#E37151">!bang</span> system



For example I'm looking for "*Xenoblade Chronicles 3*" and aren't getting good results

I may try to search **<span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span>** by using a <span style="color:#E37151">!bang</span> search from duckduckgo

"{==<span style="color:#E37151">!g</span> *Xenoblade Chronicles 3*==}" would search <span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span>.com

"<span style="color:#E37151">!b</span> *Xenoblade Chronicles 3*" would search <span style="color:#0C8484">bing.com</span>

"<span style="color:#E37151">!gj</span> *Xenoblade Chronicles 3*" would search <span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span>.co.jp *japan*

it's a neat method for speeding up searches

---

if you check <span style="color:#888888">:fontawesome-brands-wikipedia-w:ikipedia</span> you can find external references in the notes which may include useful sites with differing assets and sometimes the Japanese name or other region names, for instance:

Known in Japan as Xenoblade 3 (Japanese: **ゼノブレイド3**, **Hepburn: Zenobureido Surī**)

or you can use a translator  <font size="5">:material-translate:</font> website such as <span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span> translate or DeepL.



because ddg is my main search engine "{==<span style="color:#E37151">!gj</span> ゼノブレイド3==}" would search <span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span> jp.

this doesn't guarantee anything but it improves the chances.

---

often nintendo jp has way better websites with excellent assets over other nintendo

sites but you may find different regions have different assets for a particular game



![njp](<img/jpvus.png>)

as you can see the US site has a bigger version of the background



if a website has a mobile version it may use different assets, you can easily switch to the mobile version by changing the site canvas using the device toggle switch in developer tools


click the context menu icon ++context-menu++

select more {==tools==} > {==Developer tools==} or press ++ctrl+shift+i++

then once the DevTools window is open 

Click the {==Toggle device toolbar==} icon or press ++ctrl+shift+m++

![tlb](<img/devicetogglezoom.png>)



once you toggle reload ( ++f5++ or ++ctrl+r++ ) the page and you may notice different assets have loaded



![steamdb](<img/devicetoggle.png>)

if you click the Dimensions Dropdown list and select a tablet device to emulate you may get another set of different icons

this is down to the web developer/website if they have done this and isn't always done, it's usually a single asset set for each canvas.



sometimes you can find assets or  promotional material on

- Developers sites 
- Publishers websites
- Twitter (Can sometimes Yeild images from developers or artists)
- Artstation (might have portolio work from very talanted artists working on the game)
- 4gamer can have large assets (Japanese gaming site)
- If you are looking for older games you can try looking for press kit archives, thanks to *ChaoticPumpkin* for bringing it up



try changing aspect ratios adding {==press kit (プレスキット)==}, {==key art (キーアート)==} or the game directors name or lead artists...



**<span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span>** hides some settings for searching images but {==advanced search==} is better

[**:material-image-search-outline: <span style="color:#4285F4">g</span><span style="color:#DB4437">o</span><span style="color:#F4B400">o</span><span style="color:#4285F4">g</span><span style="color:#0F9D58">l</span><span style="color:#DB4437">e</span>** Advanced image search](https://www.google.com/advanced_image_search){ .md-button }



tineye is ok for reverse image searching especially if you find a heavily watermaked image but you don't always get results



think outside the box to make the box cover you want



--------

# Tutorial 4 (bonus round)


Now lets use everything we have learned and make a cover that will work with a vertical switch theme



![steamdb](<img/xeno.png>)


I'm going to use the 600px wide promotional art, because I tend to use steamgriddb quite a bit

I've gotten into the habit of making `600x900` images and the `2:3` ratio is the exact size my verical theme uses

so I made a 600 x 900 image and dropped / imported the promotional image into my canvas and adjusted it to my liking.

![steamdb](<img/xeno2.png>)

well would you look at that nice and simple but the switch won't be able to open this so we have to do some tweaks

Saving the image as a `jpg` making sure it's `not saved progressive` or `optimized`, I'm making sure `not to save the proportions`

as `we need a 256x256` image



![steamdb](<img/xeno3.png>)

as you can see the jpg is 88.2K with the switch you need to keep the image `below 128K` so the `target I aim for is 120k`

believe it or not {==removing the metadata==} can save *valuable space* and keep the image at a *higher quality.*


if you need the {==TitleID==} you can use [TitleDB lookup by slluxx](https://titledblookup.stackblitz.io) or tinfoil.io



--------



Here are just some very quick covers i made using some of the techniques above

how about the new zelda game?

![steamdb](<img/cover000.png>)

what about a japanese version?

![steamdb](<img/cover002.png>)


oh I've not seen the cart yet have you? it might look like this:



![steamdb](<img/switch-cart2.png>) ![steamdb](<img/switch-cart3.png>) ![steamdb](<img/switch-cart4.png>)

maybe they will release a special edition gold cart?

perhaps atmosphere will come out on cart?

![steamdb](<img/switch-cart.png>)

there is no limit to what can be done...