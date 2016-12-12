---
layout: post
title:  "Return of the Jed-AI"
date:   2016-12-11 12:00:01
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

I bet you were wondering what I've been doing since I haven't posted in 8 months. I bet you were also thinking that I couldn't possibly keep up the streak of terrible punny titles. Well, you thought wrong. Hold on-- that response doesn't make sense for both things. Whatever let's just talk about what I've been doing.

### Huge Stuff

* Converted all JavaScript code to TypeScript. Build system uses Webpack now. In english: the code is easier to write and less prone to bugs.
* Conversion of the core game code to the Entity Component System pattern...which turned into a rewrite of the entire game/engine. As they say on [/r/dwarffortress](https://www.reddit.com/r/dwarffortress/comments/5hl5ky/your_daily_reminder_that_elves_are_scum/): "it was inevitable."
* Rewrote the mapgen code, some of the oldest code (2+ years?), to make it more extensible and intelligible.
* Things are actually rendered and animated properly for the first time since the project began. Before when you would speed up the game the animations would bug out.

- Rewrote behavior trees to make them more transparent. You can actually tell why your villagers are doing what they're doing now without having to dive into the code.

Obviously since it's been 2/3 of a year since I last wrote an update there have been a ton of changes but that list is pared down to the biggest ones. I could spend several blog posts touching on each point and decision but I'll just talk about the most monumental changes which almost exclusively revolve around an entire rewrite of the engine.

## Game Development Is Hard

Before I jump into the technical stuff, I'd like to address the fact that game development is hard. In fact it might actually be insane. Game development is crazy because what it comes down to is designing Fun. And what is Fun? That's often an unanswerable question. And I don't just mean unanswerable because it's subjective; like some people like shooting space nazis in Call of Duty (or whatever they're doing in that series now) and other people like to act out complex Game of Thrones scenarios in Crusader Kings II. I mean Fun can really be ineffable. "Why do you like Mario?" "I dunno...I like pixelated Italian men jumping in green...tubes?"

A lot of the best games are the result of people prototyping out small little mechanics or systems, playing around with them, and then saying "Hey, this is fun." They might do a little more homework and ruminate on "what" about the game is fun or "why" the thing they're playing is fun but I think oftentimes people just count their blessings and move on knowing they're on to something good. They're on to something *fun*.

The second part of the insanity of game development is the work that's required. Even a "simple" platformer can take years to develop. And I'm not saying it takes years 'cause it's some dude working on it a couple hours a week. It takes years because there are *multiple years of effort* required to produce the final product of The Game. It's effort that is often new and novel every time. I mean, of course it's novel; why make games if you aren't doing something new? It's effort that's spread across a variety of mediums. If you're in charge of the game you're in charge of music, atmosphere, art, style, and... oh yeah code. CODE.

See code is the one thing I'd say I *get*. And that is to say I'm learning and making mistakes every day. I mean I code professionally which *helps*... but the programming required for a game is a whole 'nother beast from what I do as a software engineer working on the web. I don't think I was under the delusion that that *wasn't* the case but this rewrite that I've undertaken and finally, possibly, essentially completed is the culmination of 2+ years of writing game code when I didn't know the first thing about writing game code. The beautiful thing is I had enough experience as a developer to have the awareness to know I was doing things wrong a lot of the time (<small>"You should be using ECS not objects" or "Large untyped codebases are a mess" or "Start small"</small>). But I made those mistakes anyway. Partially because I was stubborn and it was more fun to keep going than to backtrack. And partially because I knew I had to learn myself why these were the right things to do.

And you know what? It's been great. Was writing a game engine from the ground up a bad idea? Almost certainly. And was it a bad idea having the first game I work on be a very systems-heavy one that's hard to balance and even harder to program? Oh hell yeah. Terrible idea. Dumb as hell. But would I have been happy making Yet-Another-Platformer in Unity or GameMaker? Absolutely not. I wouldn't have learned nearly as much as I have. And I certainly wouldn't be working on *my* game and *my* vision.

## Rewriting History

Well after that long winded piece of introspection, let's talk about the rewrite. First, a brief timeline:

1. April 14: Introduce Webpack thus laying the foundation for converting the codebase from JavaScript to TypeScript which would start soon after.
2. May 29: TypeScript conversion mostly complete.
3. Aug 27. Started rewriting large parts of engine to follow the Entity Component System pattern.
3. Sep 24: Created an entire new code repository thus starting the codebase from scratch.
4. Oct 9: Took a hiatus from development.
5. Dec 8: Returned from hiatus.

So first things off the bat we can see I started the conversion to TypeScript (TS) just about 2 months after my last blog post. And we can see that it took me about a month and half to finish converting most of the code. At a high level, moving the code over to TS has made the codebase a lot easier to work with. This means I'm making less mistakes that set me back in development and introducing less bugs to the game. In short, it set me back a month in development time but all the rest of my efforts have been sped up as a result.

A good 3 months passed before I made the huge decision to scrap the original codebase and start fresh. This was a thought I was mulling over in my head for a while but something that seemed too crazy to pull the trigger on up until this point. My reasons for a rewrite were technical, mostly revolving around numerous poor architectural decisions I made early on. These architectural mistakes continuously hindered development causing simple features to become herculean efforts. It was a [real mess](https://youtu.be/w-McIdVuY88?t=28s).

Starting from scratch seemed like a drastic step so I prudently initially tried to address the main architectural issue: my heavy reliance on object-oriented design for the core game entities. Without delving into the realm of pedantry, this issue essentially meant that every time I tried to add something new to the game like a blacksmith's shop or a travelling trader, I'd have to spend a whole bunch of time rewriting existing code to make it work. <small>And in the process break a few things on the way.</small> The solution to this was to introduce the [Entity Component System (ECS)](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system) pattern. Again, glossing over the details, but this effectively solved my problems. Adding a sword that poisons every third goblin to the game would have been stupidly annoying to implement before ECS and now would most likely be a day or two of work.

Introducing ECS was such an intensive refactor that I ended up touching almost every major piece of code in the game. What I realized was that there were a lot of features that were either A) unecessary or B) half-baked and not functioning properly. Instead of spending a month picking out and removing things that didn't need to be in the game, I decided to start from 0 and start adding the things that were really missing.

While this may sound like I'm rehashing work I've already done there's two upshots. One: progress has been faster than it's ever been due to the rewrite. And two: every feature that's readded gives me a chance to rework it and refine it.

What's left is a codebase where every piece of code has a purpose and every feature functions fully. Think well oiled machine vs some David-Cronenberg-esque, patchwork monster. Beyond this, my development has been a lot more focused. I'm spending more time on adding features that *need* to exist today as opposed to spending time fixing features that were dubiously added because they *might* be needed tomorrow. 

## What's Next

The next month is going to be rather hectic with holidays but I predict a lot of downtime working on game code. As always if you're interested you can check in on what I'm doing over on my [Trello Board](https://trello.com/b/nflkl8Nn/ripple) which lists everything I'm actively working on.

Big picture I'm still in the process of porting over the major functionality that was in the game before the rewrite. I've also decided to hone in the feature-set a bit and to leave out of a lot of the more in-depth simulation-y bits. The end goal is to get something like a functional [Majesty](http://store.steampowered.com/app/25990/) clone working in the near future. When that's working and fun, then I can start tacking on and refining the more Dwarf-Fortress-y systems I had before.

I'm also going to try and get in the habit of writing more bite-size blog posts instead of these monolithic once-or-twice-a-year updates. One of the changes I made most recently improved the transparency of the AI in a really big way. It's an interesting feature and required some interesting problem solving. <small>Yay tree traversal algorithms.</small> Because of this I'm going to set a reminder to write a blog post about it in a week or two. So [stay tuned for that](/subscribe).

As always hit the subscribe link in the footer if you want to stay up to date on the game. I promise I won't spam you. <small>Looks like I'm averaging 3 or 4 blog posts a year so you're probably good.</small>