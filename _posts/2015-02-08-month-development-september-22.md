---
layout: post
title:  "The Month(s) In Development September 22nd 2014 to February 8th 2015"
date:   2015-02-08 17:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

So I just did a quick check on how long it's been since I last posted a blog post about game development. In terms of time it's been over 4 months. According to [git shortlog]({{ site.baseurl }}/code/useful-git-stats-2/) I've commited 278 times to the repository in that time. Holy crow.

So what did I do? Or a better question might be, what did I do that can be condensed into a format that someone would actually want to read. (If you'd like to see the changes in a format that not even I want to read, go ahead and scroll down the changelog.) Well, I think it can be broken down into a lot of refactoring and some small features as well as some pretty big ones.

### Lots of Refactoring

<figure>
  <img src="{{ site.baseurl }}/images/cat-refactor.gif">
</figure>

I didn't really get this gif until I thought about what I actually did a couple months ago with this codebase. The thing I did was Browserify. So browserify is this hot new(ish) way to declare dependencies in front end code. We use it at my day job and I've started using it for all of my projects. So what does this mean in non-developer terms? It means any time you want to use a piece of code you need to specifically state that you're using it at the top of file (this isn't an entirely accurate description but works for my purposes).

"Ok", you say, "what's the big deal?" Well the big deal with converting an existing codebase to browserify is to do it correctly you have to change ALL of your code to its way of doing things. So you start off like the cat in the gif just sticking one paw into the tub testing it out: "I'll just change this file over to Browserify. No big deal." And then you find out that that file requires another file that you also changed to Browserify and that requires this other file and..and..and you're in the tub. Proverbially. Or maybe literally. I dunno maybe you code in the tub. That's not even beginning to mention when you encounter a circular dependency. Oh joy.

This discussion of Browserify could be a topic for an entirely different blog post but I'll just end by saying it took a lot of time but the codebase is much better for it.

### Small Features

I'll call these features small features because they don't change that much about the game right now.

1) Created a random world generator.

<figure>
  <img src="{{ site.baseurl }}/images/worldgen-example1.png">
</figure>

Based on some code from this [great post by Amit Patel](http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/) I created a page for generating a world. It sounds like a big feature but in practice is pretty small because I haven't worked it into the game in any real fashion. The plan is to make it so that you use the code to generate a single world and then you click a place on the map to start your town. Very similar to how Dwarf Fortress does it [with the embark screen](http://dwarffortresswiki.org/images/b/b0/FortressLocation_fd2f10.png).

2) Created a random events system
I created a generalized solution for creating events that can occur on an interval of time. When I say *can* occur I mean that each event has certain conditions that determine the chance of it occuring. Right now the only one I have is the immigrant arrival event that triggers every day. The chances of immigrants arriving is directly impacted by the overall success of your town.

3) Created a town overview panel

So how do you tell how your town is doing? Why from the town overview panel of course.

<figure>
  <img src="{{ site.baseurl }}/images/town-overview1.png">
</figure>

Right now it's not that fleshed out but the idea is similar to other games in this space, it will give you an insight into the overall state of your town. Maybe later on I'll add nice graphs and things like how Banished does. 

4) Wealth system

You might have noticed the "Town Wealth" value in the town overview panel. Wealth is derived from the value of all resources and goods owned by your town. There's a lot of things I could use this value for. In Dwarf Fortress its used in determining the frequency with which your fortress will be raided by outside forces. I will probably use it for something similar in Ripple. I also have other plans including an overall unlock system similar to Rogue Legacy based on how much wealth your town acquires before it is sacked/implodes on itself.

5) A functional camera

This wasn't much on my part as Phaser already has built in support for a camera in game. I just hooked up some bindings and made sure the camera was included in calculations on my end. Zooming in is implemented but is quite buggy.

<figure>
  <img src="{{ site.baseurl }}/images/super-zoom-citizen.png">
</figure>

I can see into his soul.

### Big Features

1) Generalized Citizen behavior to an Agent class

This one is kind of technical but basically a bunch of the citizen's behavior was tied directly to their class. I went ahead and generalized that code so that other creatures can be created and use the same code. This one is big because as I just mentioned it means I can create other agents like creatures with very little code. In fact I added a Slime monster to the game.

2) Basic Combat

The slime leads us to our next major feature I began work on recently which is combat. None of it is finalized and I haven't fully planned out how I want everything to work but I've implemented a very basic attack/defense system as well as attack actions for citizens/monsters.

<figure>
  <img src="{{ site.baseurl }}/images/slime-murder.png">
</figure>

Here we can see a slime chasing citizens around and even a skeleton from one of his previous victims. Woo I get the shivers just from the sheer horror of it. Really realistic stuff, folks.

3) Rewrote the game loop

Apart of the combat I introduced a speed stat to agents. The way speed works is that the faster an agent is, the more times they get to act every group of turns. So if agent A has a speed stat of 5 and agent B has a speed stat of 10, A will get to move 2 times every time that B gets to move once. As I mentioned, speed affects *all* actions. So not only does A get to move twice as fast as B but A also gets to attack twice as fast as B.

So what about the game loop? Well it turns out my initial game loop was written in haste and very naively. I have since then moved to a [fixed step time loop](http://gameprogrammingpatterns.com/game-loop.html#play-catch-up). This limited performance and when I moved to a system where every 10 turns an agent might only move once, this proved to be unacceptable. So yeah that's fixed now and the game performs much better.

4) Rewrote the code for queueing actions for agents

### Der Changelog

Since there are 278 changes since the last time I posted (!!!) I'm just going to start making a separate post for these.

[Changelog]({{ site.baseurl }}/changelog/2015-02-08)
