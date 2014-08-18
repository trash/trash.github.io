---
layout: post
title:  "The Week(s) In Development July 20th and July 27th and August 3rd"
date:   2014-08-17 17:00:00
categories: development
comments: true
image:
  feature: week-in-development-header.jpg
---

Woo it's been a while since I did one of these. In fact, I actually said I would try to do these on a weekly basis and then immediately after posting the first one took a hiatus for 2 weeks from posting anything.

I was in Europe for 2 weeks which was fantastic, and while this would have been a really good excuse to stop working on the project for a bit, I decided to keep up the streak of working on the game every day. As of today I'm at 82 days straight of writing code for this game every day.

So anyway, because of the timing of when I left I have 3 weeks of changes stacked up. I'm still kind of jet lagged and don't want to spend too much time on this post so I'll just try to cover the biggest changes and then leave you with the changelog to mull over.

### Time

Look at that, I'm starting with the same topic as "last week's" post.

The in game clock was a great addition but it lacked *control*. So I went ahead and controls to pause the game as well as speed it up and slow it down. Obviously a tremendous boon for testing.

### Tooltips

Tooltips go under the radar for a lot of gamers I'm sure but they're an oh-so-important consideration when it comes to a good UI. Especially a hefty simulation with a lot of moving parts that may be foreign or unobvious to a new player. Tooltips provide an easy, un-intrusive way for the player to glean insight into the various parts of the game so they can understand how it works. 

"Blah blah thanks for lesson in game design, Stefan".

Right now the tooltips I added are very basic, both in form and in content. They're very short blurbs and they only show up at the bottom of the screen (kind of like Majesty). But the work I've done so far should facilitate making nicer looking, more useful tooltips in the future so people aren't stuck scratching their head wondering what a "Necromantic Dire Badger" is.

### Aesthetics

I'm actually animating sprites now. Before sprites would just plop around the screen unmoving. Like chess pieces. Or like Dwarf Fortress. Turns out it was absurdly easy to implement swapping out the sprites based on the movement of individual citizens to make them look a lot more alive on the screen.

<figure>
  <img src="{{ site.baseurl }}/images/citizens-movement.gif">
</figure>

On top of that I added female sprites. No longer a perpetual fraternity! And the female citizens aren't all named Chet! (They were at one point mostly called Chet.)

Citizens actually can go inside of buildings now too. Before, if a citizen had a home to sleep in they would kind of walk up to the side of it and sleep next to it. You know, like the sheer presence of a structure to call their own was enough for them to get a good night sleep. Not anymore! Now they enter their homes. By teleporting through the left side. I'll probably make them use doors at some point but I can't say it's a high priority.

### Farming

Farms in their initial implementation were pretty uninteresting so yesterday I sat down and reworked them. Now an individual tile of a farm has multiple stages of growth. Each stage of growth has a separate sprite to visually cue the player into the progress of the farm. On top of that, each stage of growth requires a farmer to tend to it. This means farms are more visually interesting as well as more difficult to maintain in terms of work, requiring more farmers and more farms to feed citizens.

<figure>
  <img src="{{ site.baseurl }}/images/crop-stages.gif">
</figure>

### Der Changelog

This list is rather long as this is almost a month's worth of changes. Enjoy.

* Sunday, July 27th
  * Comments
* Monday, July 28th
  * Moved resources count up with the clock to the top
  * Moved play/pause/time-controls up to top, log to bottom right
  * Game log messages can be auto-dismissed
  * Messages have timestamps, clock returns timestamp data
  * Can pause game with spacebar and change game speed 1-3 buttons
  * Added a sprite to the citizen card that highlights the citizen’s sprite when you hover over it
* Tuesday, July 29th
  * Comments
* Wednesday, July 30th
  * Moved intializing citizens out of the controller into gameManager code
* Thursday, July 31st
  * Simplified spawning citizens a little
* Friday, August 1st
  * Comments/cleanup
* Saturday, August 2nd
  * Clicking a citizen now filters citizen list down to just that citizen
* Sunday, August 3rd
  * Improvements to log messages
  * Pulled out tooltips for citizens into a reusable tooltip service
  * Tooltips for: crops, stone, wood
* Monday, August 4th
  * Tooltips for houses
* Tuesday, August 5th
  * comments
* Wednesday, August 6th
  * Tooltip for storage building
* Thursday, August 7th
  * Tooltips for farms
  * Minor crop refactor
* Friday, August 8th
  * Tooltips for rocks/trees
* Saturday, August 9th
  * Tooltips for corpses
* Sunday, August 10th
  * Created female citizens
  * UI counter for citizens
  * Females now have female names that aren’t Chet
  * Basic entering building action for citizens
* Monday, August 11th
  * Working on creating a general GoToBuildingAction
* Tuesday, August 12th
  * Got basic animating of sprites
  * Sprite animation for citizens now based on direction of movement
  * Refactor of how actions are initialized
  * Fixed teleporting bug for citizens patching home
  * Female sprite images for citizen cards
* Wednesday, August 13th
  * Skeleton of building card
  * Citizens now path to tavern if they’re idle (and it exists)
* Thursday, August 14th
  * Comments
* Friday, August 15th
  * More comments
* Saturday, August 16th
  * Farms now grow wheat
  * Farms have 3 stages of growth with separate sprites for each stage
  * Skeletoned out a baker profession and bakery building





