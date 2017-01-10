---
layout: post
title:  "Don't Code In The Tub"
date:   2015-02-08 17:00:00
categories: development
comments: true
image:
  feature: month-in-development.png
---

##### The Month(s) In Development September 22nd 2014 to February 8th 2015

It's been 4 months since my last blog post and quite a bit has happened. According to [git shortlog]({{ site.baseurl }}/code/useful-git-stats-2/) I've commited 278 times to the repository in that time. Holy crow.

So what did I do? Or a better question might be: "what did I do that can be condensed into a format that someone would actually want to read?" (If you'd like to see the changes in a format that not even I want to read, go ahead and scroll down the changelog.) Well, I think it can be broken down into a lot of refactoring and some small features as well as some pretty big ones.

Let's get started.

### Lots of Refactoring

<figure>
   <a href="{{ site.baseurl }}/images/cat-refactor.gif">
    <img src="{{ site.baseurl }}/images/cat-refactor.gif"/>
  </a>
</figure>

I didn't really get this gif until I started to think about the huge amount of refactoring I did a couple months ago. The refactoring started when I decided to implement Browserify. So Browserify is this hot new(ish) way to declare dependencies in front end code. We use it at my day job and I've started using it for all of my projects. So what does this mean in non-developer terms? It means any time you want to use a piece of code you need to specifically state that you're using it at the top of file (this isn't an entirely accurate description but works for my purposes).

"Ok", you say, "what's the big deal?" Well the big deal with converting an existing codebase to Browserify is to do it correctly you have to change ALL of your code to its way of doing things. So you start off like the cat in the gif just sticking one paw into the tub, testing out the water: "I'll just change this file over to Browserify. No big deal." And then you find out that that file requires another file that you *also* changed to Browserify, and that file requires this other file and..and..and you're like the cat; you've fallen in the tub. Proverbially. Or maybe literally. I dunno maybe you code in the tub.

This discussion of refactoring and introducing Browserify to an existing codebase could be a topic for an entirely different blog post but I'll just end by saying it took a lot of time but the codebase is much better for it.

### Small Features

I'll call these features "small features" because they don't change that much about the game right now but will have a larger affect on gameplay later on.

#### 1) Created a random world generator.

<figure>
  <a href="{{ site.baseurl }}/images/worldgen-example1.png">
    <img src="{{ site.baseurl }}/images/worldgen-example1.png"/>
  </a>
</figure>

Based on some code from this [great post by Amit Patel](http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/) I created a page for generating a world map. It sounds like a big feature but in practice is pretty small because I haven't worked it into the game in any real fashion. The plan is to make it so that you use the code to generate a single world and then you click a place on the map to start your town. Very similar to how Dwarf Fortress does it [with the embark screen](http://dwarffortresswiki.org/images/b/b0/FortressLocation_fd2f10.png).

#### 2) Created a random events system

I created a generalized solution for creating events that can occur on an interval of time. What this means is you can create a random event that has the possibility of occuring every day for instance. Then, every day a dice roll will occur that has a chance of triggering the event.

Right now the only event I have is the immigrant arrival event that triggers every day. This means every day there is the chance that new citizens will join your town. The chances of immigrants arriving is directly impacted by the overall success of your town.

#### 3) Created a town overview panel

So how do you tell how your town is doing? Why from the town overview panel of course.

<figure>
  <a href="{{ site.baseurl }}/images/town-overview1.png">
    <img src="{{ site.baseurl }}/images/town-overview1.png"/>
  </a>
</figure>

Right now it's not that fleshed out but the idea is similar to other games in this space, it will give you an insight into the overall state of your town. Maybe later on I'll add nice graphs and things similar to Banished's menus.

#### 4) Wealth system

You might have noticed the "Town Wealth" value in the town overview panel. Wealth is derived from the value of all resources and goods owned by your town. There's a lot of things I could use this value for. In Dwarf Fortress it's used in determining the frequency with which your fortress will be raided by outside forces. I.e. your town is doing super succesful sounds like it's time for a necromancer to invade with an army of undead. I will probably use it for something similar in Ripple. I also have other plans that involve the wealth system, including an unlock system similar to Rogue Legacy based on how much wealth your town acquires before it is sacked/implodes on itself. This will give added incentive to continue playing the game even after "losing".

#### 5) A functional camera

This didn't require much work on my part as Phaser already has built in support for a camera in game. I just hooked up some bindings and made sure the camera was included in calculations on my end. Zooming in is implemented but is quite buggy.

<figure>
  <a href="{{ site.baseurl }}/images/super-zoom-citizen.png">
    <img src="{{ site.baseurl }}/images/super-zoom-citizen.png"/>
  </a>
  <figcaption>With the power of camera zoom, I can see into his soul.</figcaption>
</figure>

### Big Features

#### 1) Generalized citizen behavior for use in other NPCs

This one is kind of technical but basically a bunch of the citizen's behavior was tied directly to their class. I went ahead and generalized that code so that other creatures can be created and use the same code. This one is big because as I just mentioned it means I can create other agents like creatures with very little code. In fact I added a slime monster to the game.

#### 2) Basic Combat

The slime leads us to our next major feature which is combat. None of it is finalized, and I haven't fully planned out how I want everything to work, but I've implemented a very basic attack/defense system as well as attack actions for citizens/monsters.

<figure>
  <a href="{{ site.baseurl }}/images/slime-murder.png">
    <img src="{{ site.baseurl }}/images/slime-murder.png"/>
  </a>
</figure>

Here we can see a slime chasing citizens around and even a skeleton from one of his previous victims. Woo I get the shivers just from the sheer horror of it. Really realistic stuff, folks.

#### 3) Rewrote the game loop

As a part of the combat, I introduced a speed stat to agents. The way speed works is that the faster an agent is, the more times they get to act in a given amount of turns. So if agent A has a speed stat of 5 and agent B has a speed stat of 10, A will get to move 2 times every time that B gets to move once. As I mentioned, speed affects *all* actions. So not only does A get to *move* twice as fast as B, but A also gets to *attack* twice as fast as B.

So what about the game loop? Well it turns out my initial game loop was written in haste and was very naive. I have since then moved to a [fixed-step time loop](http://gameprogrammingpatterns.com/game-loop.html#play-catch-up). The original loop limited performance and when I introduced the speed system, where every 10 turns an agent might only move once, this proved to be unacceptable. Once I moved to the fixed-step time loop, functioned and performed a lot more smoothly.

#### 4) Rewrote the code for queueing actions for agents

One of the big problems with increasing the complexity for citizens was that the core update method for citizens had this chunk of really confusing code with a lot of [gotchas](http://en.wikipedia.org/wiki/Gotcha_%28programming%29). The source of the confusion was my, again, hastily coded solution to prioritizing actions for citizens.

My original solution to prioritizing actions for citizens was to have a list of "priority" actions and then a list of "regular" actions. This was implemented so that things like eating would always be done in priority over normal non-life-threatening actions. I fixed this when I realized I could just flatten down these lists into a single list that maintained ordering based on priority.

Why is this a major feature? Well, this reduces the overhead for introducing new behaviors and new types of behaviors for agents in the game.

### What's Next

First up on the agenda is work on a new hunting mechanic. With the recent addition of non-citizen npcs I want to start introducing more fauna into the surrounding world. And of course after introducing new animals into the world I have to figure out ways that you can kill them. Hunting.

I also just reached out to an artist who's sprite work I really like. I hope to start working him in the near future to start defining a real visual style for the game as well as replacing some of my shoddy [programmer art](http://en.wikipedia.org/wiki/Programmer_art)). I'm really, really excited for that as well.

Sometime next week I'll try (hah) and do another blog post about the hunting mechanic and hopefully by then I'll have some more news on the art front.

### Der Changelog

Since there are 278 changes since the last time I posted (!!!) I'm just going to start making a separate post for these.

[Changelog]({{ site.baseurl }}/changelog/2015-02-08)
