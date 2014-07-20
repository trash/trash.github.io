---
layout: post
title:  "The Week In Development July 13th, 2014"
date:   2014-07-20 17:00:00
categories: development
comments: true
image:
  feature: week-in-development-header.png
---

"The Week In Development". Sounds so legitimate and professional. Only it's not. It's basically my excuse for not coming up with a more formal or interesting blog post so I'll just run through the stuff I did related to code and development for the past week. I'll be trying to get these out every week hopefully alongside other posts.

This week I simultaneously felt like I coded very little but implemented some important features nonetheless. Let's run through the big ones.


### Time

Finally added an in game clock. 

So the context for this change is that I somehow had a fully functioning simulation working without any real way of telling or keeping track of time. 

What I mean by this is under the hood I have everything linked to my game loop. Certain actions and tasks, e.g. chopping down a tree, walking around, sleeping, take certain amounts of "ticks" on the game clock to be finished. Normally you tie these "ticks", a very low-level concept tied to a very fast clock (normal game speed is 20 ticks/second), to a higher level abstraction using more normalized time (hours, days, years, etc.). And I imagine that this is something most people probably work on pretty early in development. But I decided to just kind of shirk that need for 2 months. 

So, yeah, it turns out it's really helpful and and much easier to say "hey sleeping takes 6 hours out of a citizen's day" instead of "hmm so chopping a tree is like 600 ticks so maybe sleeping should be something like 10,000 ticks...wait how long is a tick again?".

### Death

Making the in game clock paved the way for the next development: death. I think I finally introduced the concept of citizens dying off from starvation last week or something but it was really janky because I had no great way of gauging "when" a citizen should die because the whole fun-with-ticks bonanza in the code. I can very definitively say in the world of Ripple, you die after 3 days of not eating. 

This is good news of course. I'll come back to this because it combined with some other changes produced quite a bit of luls (read: bugs) later on.

### Idling

Currently in the world of Ripple a lot of citizens spend a whole lot of time doing nothing. What this meant is that you'd just have these little people sitting on the screen not moving or doing anything most of the time. As a person who spends 10-20 hours a week staring at them doing nothing it became agonizing very quickly.

So I thought, well real people don't just stand there like mindless automatons when they're boring/not doing anything. So I made them run around mindlessly. All around, all the time. It's actually just as mindless but mildly more entertaining to watch.

Obviously I have long term solutions in mind for solving this whole "idling epidemic" but those solutions in involve making citizens always have jobs/hobbies/relationships to be spending time on and that requires a lot of work.

### Balancing. Kind of.

Saturday most of my changes involved balancing. The 3 day to death starving thing wasn't really a problem because farms produced food at such a rate that the screen would fill up with food in several days time.

<figure>
	<img src="{{ site.baseurl }}/images/overproducing-farm.gif">
</figure>



### Dat Changelog

* Sunday, July 13th
  * Got the stockpile working with drag select
* Monday, July 14th
  * Got the farm placement working with drag select (not very good)
* Tuesday, July 15th
  * Added an in game clock
  * Converted eating and sleeping over to the new time schedule
  * Citizens die if they don’t eat after 3 days
  * Citizens have sleep/hunger statuses that are updated
* Wednesday, July 16th
  * Idle citizens now wander about the map
* Thursday, July 17th
  * Nothing really.
  * Wrote design docs for the next stage of development
* Friday, July 18th
  * Not much. documentation
* Saturday July 19th
  * Homeless citizens have to sleep twice as long to feel rested
  * Farms now produce experience and have a skill/level associated with them
  * Balance changes so farms produce way less food
  * Working at a task makes a citizen more hungry
  * Resources no longer produce a ton of wood/stone
  * made a gif WOW
* Sunday, July 20th
  * Added a tavern (doesn’t do anything). Actually it’s impossible to build because citizens always starve before being able to build it



#### Gifs of note
<figure>
	<img src="{{ site.baseurl }}/images/mindless-citizens.gif">
	<figcaption>Really need to make up a better idling mechanic other than "run around in circles".</figcaption>
</figure>