---
layout: post
title:  "The Week In Development July 13th, 2014"
date:   2014-07-20 17:00:00
categories: development
comments: true
image:
  feature: week-in-development-header.jpg
---

"The Week In Development". Sounds so legitimate and professional. Only it's not. It's basically my excuse for not coming up with a more formal or interesting blog post. So in short I'll just run through the stuff I did related to code and development for the game over the past week. I'll be trying to get these out every week hopefully alongside other posts.

This week I simultaneously felt like I coded very little but implemented some important features nonetheless. Let's run through the big ones. And talk about the hilarious life-destroying consequences of their implementation.


### Time

Finally added an in game clock. 

So the context for this change is that I somehow had a fully functioning simulation working without any real way of telling or keeping track of time. 

What I mean by this is under the hood I have everything linked to my game loop. Certain actions and tasks, e.g. chopping down a tree, walking around, sleeping, take certain amounts of "ticks" on the game clock to be finished. Normally you tie these "ticks", a very low-level concept tied to a very fast clock (normal game speed is 20 ticks/second), to a higher level abstraction using more normalized time (hours, days, years, etc.). I imagine that this is something most people probably work on pretty early in development. But I decided to just kind of shirk that need for 2 months. 

So, yeah, it turns out it's really helpful and and much easier to say "hey sleeping takes 6 hours out of a citizen's day" instead of "hmm so chopping a tree is like 600 ticks so maybe sleeping should be something like 10,000 ticks...wait how long is a tick again?".

### Death

Making the in game clock paved the way for the next development: death. I think I finally introduced the concept of citizens dying off from starvation last week or something. The thing was, it was really janky because I had no great way of gauging "when" a citizen should die because the whole fun-with-ticks bonanza in the code. After Tuesday, I can definitively say, in the world of Ripple, you die after 3 days of not eating. 

This is good news of course.

### Idling

Currently in the world of Ripple a lot of citizens spend a whole lot of time doing nothing. What this meant is that you'd just have these little people sitting on the screen not moving or doing anything most of the time. As a person who spends 10-20 hours a week staring at them doing nothing, it became agonizing very quickly.

So I thought, "Well real people don't just stand there like mindless automatons when they're bored/not doing anything". So I made them run around mindlessly. All around, all the time. It's actually just as mindless, possibly even less realistic, but mildly more entertaining to watch.

Obviously I have long term solutions in mind for solving this whole "idling epidemic" but those solutions involve making citizens always have jobs/hobbies/relationships to be spending time on and that requires a lot of work.

### Balancing. Kind of.

Saturday most of my changes involved balancing. The newly introduced 3-days-to-death starving thing wasn't really a problem because farms produced food at such a rate that the screen would fill up with food in several days time. I obviously had to remedy this by drastically reducing the amount of food farms produced.

<figure>
  <img src="{{ site.baseurl }}/images/overproducing-farm.gif">
</figure>

Another way to remedy the over abundance of food was to tackle demand as well as supply. Citizens just weren't getting hungry enough on their own. I decided to add hunger as a function of exertion. In other words, if a citizen performs a tough task like mining ore or cutting down trees, they'll become hungry more quickly than a citizen who is, say, drinking in the tavern all day. This had the added benefit of breaking up the monotony of citizen's scheduled eating habits.

Farms weren't the only target of supply-based balancing. I also balanced the amount of wood harvested from cutting down a tree and the amount of stone harvested from mining.

I also balanced the amount of sleep that citizen's needed. By default, citizens now sleep 6 hours out of the day. Long enough that it affects gameplay but not long enough that you're stuck sitting waiting for citizens to wake up before they do something else.

Apart of these tweaks to sleep, I finally gave a purpose to houses in the game. Initially, houses were just something you built but didn't actually serve a purpose. I changed sleep so that citizen's without a home in must spend twice as much time sleeping. This means that if you don't build houses, your citizens spend half the day sleeping.

### Consequences: The Tavern of Doom

The compound effects of all of these changes are actually pretty hilarious.

Let's take inventory real quick: citizens die from starvation, food is far less plentiful, working makes citizens far hungrier, citizens have to work much longer to get the same amount of resources, homeless citizens sleep half the day.

Wait let's add a feature (read: bug) in there: a citizen who becomes hungry during a task still won't stop the task until it's complete. This includes sleeping.

What this means is if a citizen goes to sleep who is starving, they will actually perish in their sleep from starvation before they wake up. This happens. All. The. Time.

"Okay, okay", you say, "just build more farms and houses. Less sleeping, more eating, and all that jazz." Okay but remember, working--so, building--tires citizens out more. So builders for especially long projects *always* die of starvation. Even if I switch every citizen in the game to the builder profession, the tavern for instance (a building high in resource costs) will never be completed. They will all die. They will all die every time. There will be no joy in the tavern tonight. Because there will be no tavern. And there will be no tavern because they're all dead.

*Ahem*. 

Obviously this requires some adjustment to the way tasks are handled to allow for interruptions for primary needs like the whole eating-so-you-don't-die thing.

You could say that fixing that is high on my list of tasks for next week. But you better believe I'm enjoying the madness brought about in this artificial world in the meantime. 



### Dat Changelog

Do you like bulleted lists? Then this section is your cup of tea. It's basically the tl;dr of this post and the wrap up for each day of the week.

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
  * Made another gif. WOW



#### Gifs of note
<figure>
  <img src="{{ site.baseurl }}/images/mindless-citizens.gif">
  <figcaption>This is madness! No this is definitely a feature and not at all a bug</figcaption>
</figure>