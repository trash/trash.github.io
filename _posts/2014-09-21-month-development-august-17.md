---
layout: post
title:  "The Month In Development August 17th - September 21st"
date:   2014-09-21 17:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

Something something it's been a while.

I think I'm going to shoot for monthly updates from now on. There are two reason for reducing the frequency. 1) It leaves more time for me to actually work on the game. And 2) doing updates less frequently means there are more changes built up to report on.

Anyway, I made some pretty big changes as always and am getting closer and closer to a playable game every day.

### Items and Goods

A good chunk of the month was spent laying the groundwork for adding new items and professions to craft those items into the game. In that regard, the new items added include bread, beer, and crates. Which doesn't sound like a whole lot but each of these items required a different profession to craft. Bread is created by bakers (prolly going to change this to just be cooks), beer is created by brewers, and crates are created by carpenters. So along with these items being created, each of these professions and the associated tasks were created.

It went well and now it shouldn't be much harder than adding a simple json object to a list and BAM we'll have lots of new items that can be crafted by the citizens.

So we have items and we have people who craft them and know how to do that but *when* do they craft these items? As with a lot of other games in this space, the player is left up to setting up the supply chain required to produce the necessities for your people. What I mean by this is, even though your people might really need beer ([like me](http://localhost:4000/ripple/images/sohigh1.png)) they won't just go and create it unless you tell them to do so.

I imagine there are several ways in which the player can control how much of each resource are being created by your people, but I went the route of Banished/Gnomoria. The way it works is instead of manually queueing up these tasks for each citizen, you just specify a total amount desired for a given resource for the entire town. So let's say we want to maintain a stock of 100 units of beer at all times. Well we go into this menu and set the desired beer count to 100. The effect of this is, given the required resource to craft beer, your citizens will always craft just enough to stay at that count. This frees the player up to make macro decisions about the economy of the town and not worry about the minutiae of each crafter involved. 

### Cratos, God of Store

So crates are pretty sweet. I mean when you guys are out and about and you see a crate, you prolly take off your cool sunglasses and say "damn" and stuff. I wish I was cool and had sunglass. **Ahem**. Anyway yeah crates are useful in Ripple. Items currently take up one tile on the map no matter what they are. That means when you start the game and you aren't in the favor of the crate gods, your game looks like this.

<figure>
  <img src="{{ site.baseurl }}/images/item-pile.png">
</figure>

And then with crates up in that biz.

<figure>
  <img src="{{ site.baseurl }}/images/item-pile-crate-ownage.png">
</figure>

Majestic.

### Just Starting Out

Those pictures you were looking at are actually what I currently have as the "start" of the game. The game proved way too difficult if you didn't start the game with some resources to help you out. To solve that, now you start with a whole bunch of resources spawned in the center of the map.

Along with this, I worked on spawning buildings at the start of the game. This is especially nice for testing things involving buildings because I don't have to go through the effort of building them first. The added benefit is it lays the groundwork for save games. I.e. when you save a game I just save some info like what buildings you had and then when I load the save game I just iterate through that list and spawn all the buildings you had before.

### Miscellaneous Stuff

Trees grow back now. And by grow I mean they just show back up after a period of time. I have plans to make trees more interesting like farms with different visual stages of growth.

Farmers actually work together. Before, because of some internal jank with collective task handling, essentially only one farmer could do work at a time. So you'd have a congo line of farmers with only one of them doing work while the others kind of just followed along. I imagine the guys following along just taking credit for all the work from the one guy actually doing his job, "Hey nice work there. Great job team."

### The House That Bearsmasher Built


So I started working on names recently. Specifically generating more names and more interesting names. I took the route of prefix-suffix surname generation like Daggerfall/Arena did. So you have a list of words like 'ash', 'bear', and 'green' which get added to things like 'ford', 'house', 'ham' to get 'Ashford' and 'Greenham'. I added 'smasher' to the suffix list because who doesn't love names like "Bearsmasher" or "Ravensmasher".

### Music

Speaking of Bearsmasher I've been looking into getting music into the game. One of the things I found suggested in various places was this wonderful tool that generates random music procedurally called [Abundant Music](http://abundant-music.com/). It's really freaking fantastic and I used it to create this song I'm for now calling "Bearsmasher's Death Knell". It's pretty hilarious especially when you consider that it was entirely written by an algorithm.

<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168764573&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

### Der Changelog

A month's worth of changes, here we go.

* Sunday, August 17th
  * Got very basic building card when building is clicked
* Monday, August 18th
  * Added a little bit more to the building card
* Tuesday, August 19th
  * Added ability to spawn building already completed
  * Created mechanism to start game with buildings completed on map
* Wednesday, August 20th
  * Improved styling of building card a bit
* Thursday, August 21st
  * Added/cleaned up a couple comments
* Friday, August 22nd
  * Modified starting buildings
* Saturday, August 23rd
  * Now you can close the building card
* Sunday, August 24th
  * Added crate sprite
  * Created a new UIWindow class for creating ui windows.
  * Skeletoning out some of the goods menu
* Monday, August 25th
  * Got basic skeleton of structure for goods menu in place
* Tuesday, August 26th
  * ADded comments for new ui window code
* Wednesday, August 27th
  * Working on fleshing out the BakerTask code
* Thursday, August 28th
  * Created a generalized solution for resource requirements for tasks
  * Working on creating working baker tasks
* Friday, August 29th
  * Fixed bug with citizen not getting instance
* Saturday, August 30th
  * Refactored the way tasks and task instances are considered complete
* Sunday, August 31st
  * Bread is now actually created at the end of the baker task.
  * Citizens now eat bread
  * Added code to automatically queue up the creation of bread
* Monday, September 1st
  * ADded some comments to new resource methods
* Tuesday, September 2nd
  * Commented the baker task
* Wednesday, September 3rd
  * ADded bakery sprite. lol storage building sprite with big B
* Thursday, September 4th
  * Working on skeletoning out brewery stuff for brewers
* Friday, September 5th
  * Laid out a little bit more infrastructure for brewers
* Saturday, September 6th
  * Made layout for goods menu tabbed. More automated goods menu code
  * Added sprite for beer. Looks like it's kind of working.
  * Fixed bug where beer wasn't "Edible"
* Sunday, September 7th
  * Added new CraftTask to have Brewer/BakerTasks extend from
  * jshint fixes
  * Trees can grow back now. Set up a useful timer on the game clock
* Monday, September 8th
  * Commented the game clock code
* Tuesday, September 9th
  * Added carpenters, carpenter shop, and crates to game
* Wednesday, September 10th
  * Made crates able to store things
  * Working on adding a item card window for info on items that are clicked
  * Added basic html for item card to list items for crate
* Thursday, September 11th
  * Item card now properly updates. Crate only lists items that are store…
  * Got basic crappy hover item for moving items
* Friday, September 12th
  * Got basic implementation of hover item showing proper sprite
* Saturday, September 13th
  * Pulled out duplicated code in item instances into parent Item class
  * Pulled out static json extending inside items constructors into Item
  * Some comments
  * Properly highlighting invalid tiles for item placement
  * Items can be moved around. Crates can be moved around without game breaking
* Sunday, September 14th
  * Fixed bug with moving items because they were flagged as stored when not
* Monday, September 15th
  * Crates can't be moved unless they're full. Fixed goods menu opening bug
  * Fixed farmers not working together on tasks. Refactoring storage object code
* Tuesday, September 16th
  * Added comments to new storage methods
* Wednesday, September 17th
  * Fixed 2 bugs. 1) Too many resources being marked for storage 2) bad queuing
* Thursday, September 18th
  * Moving a crate actually moves the items inside too
* Friday, September 19th
  * Added names service for generating names
* Saturday, September 20th
  * Added a bunch more names to the names service
  * More names
  * Refactored the names service a little bit
* Sunday, September 21st
  * Renamed Crop to Wheat class. Made crops service to mirror other goods
  * Crates can now be spawned succesfully with items inside
  * All the starting resources start in crates now
  * Added a method to the map for clearing an area of starting trees/rocks/etc.





