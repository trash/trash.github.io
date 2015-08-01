---
layout: post
title:  "The Month(s) In Development May 10th 2015 to July 31st 2015"
date:   2015-08-01 12:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

Another 3 months of development has passed since I last did a blog post. I pushed 249 commits to the codebase in that amount of time. Quite a few changes. A solid mix between a) work on the engine and improving performance as well b) work on art and the UI. Time to try to condense the changes down into something readable and perhaps even *interesting*. <small>(Cue gasp from the handful of people reading this.)</small>

### Major things:

* Converted the entire UI to use ReactJS.
* Dropped the use of the Phaser library, rewrote the interaction with the renderer (PixiJS) by hand.
* Got art from a real artist (!)
* Restyled the entire UI.
* Wrote tests for basic parts of the game engine.

### Smaller Things

* Added a real menu.
* Replaced the pathfinding algorithm.
* Created a minimap.

Oh and if this isn't your first blog post, you might have noticed I threw out the old blog theme in favor of this one. I love this theme as it is really minimal and favors readability far more than the previous theme.

Let's get started.

## Who You, UI?

Let's start on the visual side of things. So two major things happened to the game interface. First, I overhauled the styling and layout of the UI to minimalize it and clean it up overall. And second, I dropped my existing UI framework, AngularJS, in favor of ReactJS.

### Haul's Overt UI Overhaul

This one is much easier to see with comparison photos:

##### Before

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/ui-before.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/ui-before.png"/>
  </a>
</figure>

##### After

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/ui-after.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/ui-after.png"/>
  </a>
</figure>

Ignoring the art which I'll get to a little later in this post, the standouts for this group of changes are: the overall reduced space taken up by the UI, better grouping based on function, the addition a main menu, and the addition of a minimap.

### The Main Course

After you work on a game for long enough you start to ignore quirks both major and minor about the process. For instance when I used to start the game it would plop right into the game as soon as the page loaded. No main menu; no nothing.

I had decided long ago to remedy this situation but finally got around to it about a month or so ago. It's very simple but it gets the job done for now.

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/main-menu.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/main-menu.png"/>
  </a>
</figure>

### The Minimap

The minimap, another feature implemented simply enough, has proved both nifty and very useful.

Each tile is represented on the minimap by a color corresponding to what's currently on it. If the tile is green it has a tree, red it has berries, darker grey there's a rock, black is an empty tile, and blue and light grey are citizens and monsters respectively.

It's really nice to get an at-a-glance overview of what's going on across the map (which can be quite large now). That and it's been particularly useful for me when tweaking the map generation because I get an instananeous overview of the result of the code.

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/minimap.gif">
    <img src="{{ site.baseurl }}/images/2015-05-09/minimap.gif"/>
  </a>
</figure>

You can also see in the above gif a white rectangle moving around. That's the current viewing window. You can't see the main game in the gif, but I'm moving the camera around and the white box is moving in unison to indicate what's being looked at on the map. All pretty standard stuff if you've ever played basically any RTS in the past 2 decades.

### "Goodbye angular. Hello React"

As a front end developer, professionally I'm cursed by a need to stay hip to the newest development trends. One of those trends has been the mass exodus of developers moving from the last hot new framework for front end development, AngularJS, to the newest hot new framework, ReactJS.

Did that sentence sound really boring? That's because it is really boring. The "tl;dr" of the change is that the whole interface is a lot easier to update and more performant overall.


## Programmer Art is Satan

To clarify, that title is supposed to be negative. Which I guess is kind of ambiguous or confusing if you're really into Satan.

Programmer art in general sucks. In fact my programmer art not only sucked but was probably kind of illegal. Take a peek at my current building spritesheet which includes some of my old assets mixed in with some newer ones:

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/buildings.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/buildings.png"/>
  </a>
</figure>

So you should notice a couple things in the above picture.

1. The decided difference in quality between the first three buildings sprites (old programmer art) and the four that follow (new non programmer art).
2. "Is...is that one of the houses from Pokemon?"

Ignoring the legal implications of the above photo, I started working with an artist, who goes by the moniker <a href="https://twitter.com/shroomarts" target="_blank">Shroomarts</a>, who's been kind enough to lend his wonderful talents with sprite art to my project. <a href="http://shroomarts.blogspot.com/" target="_blank">Check out his blog for more of his work over here.</a>

##### A mock up by Shroomarts

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/shroomarts-mock.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/shroomarts-mock.png"/>
  </a>
</figure>

Having some actual art gives a lot of character to the project and gives me a lot of motivation to move forward. There's a lot to be said for having a clear vision to strive for.

## You're Really Testing Me With These Titles

As with any new project where I'm trying to make as much progress as quickly as possible, I've been avoiding tests. Avoiding them for almost a year now which is a pretty good streak.

If you're not familiar with the idea of <a href="http://en.wikipedia.org/wiki/Unit_testing" target="_blank">testing code</a>, it's basically the process by which you take a block of code and run it against some sort of input and test whether it gives you the output you expect.

A trivial example might be a test for an `addition` function that takes in two terms and returns the sum of them. So you'd pass `addition` the arguments `1` and `1` and expect it to return `2`. If it returned any other number than `2` it failed the test and that code doesn't work properly.

Tests are incredibly useful for establishing a level of assurance in the correctness of one's code. Let me give you a specific example from writing tests for this game.

### Putting The "POS" In "Position"

So in its current implementation, the map in-game is a 2 dimensional grid. You got rows and you got columns. When a monster moves from one tile to the next they're changing either their row or their column by one.

So a move down one tile from the top left corner could be viewed as this:

`[0, 0] -> [0, 1]`

So I have a method called `setPosition(column, row)` that each agent calls when they move. So the above move would just be the call `setPosition(0, 1)`.

So what's the point I'm trying to get to? This is all really simple, right? Maybe **too** simple...

I started writing tests around this code and found out that I had made a very small mistake that essentially made everything about the game, at the very *lowest* levels wrong. I had switched the `row` argument with the `column` argument for EVERY single call to `setPosition`.

That means every single time a monster was supposed to move down, they moved right. Every time they went to move left, they actually moved up.

Now the hilarious thing about this specific bug is, since I had made this switch for EVERY call to `setPosition`, you might never notice it. Everything *kind of* still made sense. Everyone was in the topsy turvy world where right was down and left was up. So everyone would still kind of *look* like they were behaving properly because it was all consistent. But it was still causing all sorts of weird, hard to explain bugs in the game.

"Whoa whoa run that back", you might say in a Waka Flocka Flame voice. "What does that have to do with testing?"

Well, since it was the type of mistake you might never really notice by playing the game, when I wrote a test around the code, it was immediately highlighted. It has to do with testing because without testing, this bug would have probably continued to exist. Like it has for probably the better part of a year.

## He Renders Me, He Renders Me Not

Throughout the majority of the life of this project I've made use of a wonderful library for HTML5 game development called <a target="_blank" href="http://phaser.io/">Phaser</a>. If you're looking to get started quickly with a simple game, it offers a fantastic API and you can get some great looking things going in no time at all.

That being said, I switched from Phaser because it couldn't support the sheer size of the game I'm trying to build. Phaser itself makes use of another wonderful library called <a target="_blank" href="http://www.pixijs.com/">PixiJS</a>. Pixi is a 2D WebGL renderer that prides itself on its speed. So I looked at the performance problems I was having with Phaser, and then looked at Pixi's examples, such as <a target="_blank" href="http://www.goodboydigital.com/pixijs/bunnymark/">this one where it renders tens of thousands of bouncing rabbit sprites</a>, and decided I could probably eek out a ton more performance by writing the calls to the renderer myself.


### Light At The End Of The Tunnel....Maybe

So far I've been pretty successful. In about a week I ripped out Phaser from all the code and rewrote the rendering portions of the game to use Pixi directly. I've been able to increase the FPS to a clear 60 under normal playing conditions. I've made great strides, but I've been having a bit of trouble of keeping that high framerate for very large maps, a problem that I am actively working on a solution for.

The solution itself involves splitting the map into a bunch of renderable sub containers that are then only rendered based on the position of the camera. I.e. if you're looking at the top left corner of the map, WebGL probably shouldn't be spending time drawing all the sprites in the lower right hand corner of the map because they're not in view.

All throughout this process I've kept in mind that if I cannot eek out the performance that I need while still having large map sizes, I may have to look further into using an entirely different platform (nevermind engine). Bearing that in mind, I'm trying to blast through these performance optimizations very quickly. If it turns out that I cannot get the performance I need with my current platform, I'd rather start investigating alternatives sooner rather than later.


## "But What About The Gaaaaameplay"?

You may have noticed the majority of these changes have been foundational with very little focus on actual gameplay. It's a mixture of two things as I see it.

One: I actually have had some issues (like rendering) that need to be resolved now before I proceed any further. They're issues of the sort such that if I ignore them for too long I may have large swathes of code that need to be rewritten in the future. Not a great prospect.

And two: gameplay is hard. Specifically making a game *fun* is really, *really* hard. It's hilarious because I think about some of the stuff I've been working on recently like pathfinding and rendering. These things may have seemed arcane or overly algorithmic and challenging before --- and they are or, can be, for sure --- but what's truly difficult is getting that secret formula to make a game *click* and just be fun. "*Just* be fun."


## So, What's Next

Hopefully I'll be busting out these optimizations and **hopefully** I'll get the performance I've been looking for with a large map in-game. If all that goes according to plan I should be going straight into some new features for the game. New features will revolve around making the existing citizen AI a little bit more interesting to give each citizen some more personality. And also maybe some more death and mayhem. So you can simultaneously become more attached the citizens wandering around the map and more heartbroken as they're destroyed by monsters.

### It's A Celebration

In other news I'm a little over 2 weeks away from hitting 1 year straight of writing Javascript every day. That streak started when I began this project so that means this project will be turning 1 in the near future. Maybe I'll throw a party. Where I sit in a dark room toiling away writing code. Like I do every night. Like I've done every night for a year straight working on this game. Wait-- what's a party?

### Der Changelog

249 commits this time around. Like last time I'm going to create a separate post to list them all.

[Changelog]({{ site.baseurl }}/changelog/changelog-february-09)

## Subscribe

Oh and don't forget to <a href="/ripple/subscribe">subscribe</a> if you want to keep up with how the game is developing!
