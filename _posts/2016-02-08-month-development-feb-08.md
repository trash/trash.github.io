---
layout: post
title:  "AI Don't Know What You're Talking About"
date:   2016-02-08 12:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

##### The Month(s) In Development October 14th 2015 to February 6th 2016

Four months as it turns out is very long in development time. And a lot has happened.

In my [last blog post](/ripple/development/month-development-october-17/) I talked about improvements I had made to the AI to be a little bit more extensible. A part of that, I made mention of [behavior trees](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)), something to the tune of "these changes are a partial fix and I should probably just use behavior trees". [DJ Khaled voice] "So what did we do? We rewrote the entirety of the AI to use behavior trees." Honestly, a massive, massive refactor. A huge portion of the old code is no longer being used at all. And the game couldn't be any better for it.

#### Major Things:

* AI Rewrite
* Created test levels
* Save/Load game functionality

#### Smaller Things

* Clicking on game objects outputs them to console
* Buildings have names like "The Regal Mare"
* Now using es6 (yayyy javascript)

Let's jump right in.


## AI Don't Know What You're Talking About

The day after I wrote the last blog post I committed the first change to work my way towards having the game AI use behavior trees (BTs). After quickly googling for BT solutions written in JavaScript I found a library called [b3](https://github.com/behavior3/behavior3js). I'm not sure it's actually supported anymore (the last commit was in July 2015), but I've been using it to great effect, making my own little tweaks as I go.

After some initial mental hurdles of understanding how BTs work, made much easier by [this great blog post by the lead dev of Project Zomboid](http://www.gamasutra.com/blogs/ChrisSimpson/20140717/221339/Behavior_trees_for_AI_How_they_work.php), I had some basic functioning AI. To be clear, I make it seem like it was a short, simple process but it really wasn't. I mean check out these commit messages from the first couple weeks:

`2015-10-21 made a janked up wolf. everythig is laggy now`

`2015-10-22 Tree eats shit with too many agents????`

`2015-10-23 Deer now use b3 behavior trees. real glitchy`

`2015-10-25 Kind of got the wander action working`

`2015-10-26 Flee action actually flees. SUPER buggy`

Ah yes the swears in the solo dev commit log. That's how you know your efforts are going well.

### So What's The Big AI-dea Anyway???

You might be wondering: "So why switch to behavior trees?" What did I actually get out of spending a couple months refactoring a huge portion of the codebase to use them. There's 2 big ways BTs have been awesome: 1) they're expressive and concise and 2) they're very reusable.

#### AI Just Can't Express Myself

A big problem with the previous AI system is you would look at a piece of code and at a glance you couldn't really tell what the agents would actually do when running the code. For instance, you'd look at the code around having a wolf hunt a deer and, without having a big obvious class name around the code like `WolfGonHuntThemDeers`, you might be left asking yourself, "Wait. What does this actually do?"

Let's take a look at a specific code example for the code around having wolves hunt deer and see how BTs improved it:

##### Before BTs
<figure>
  <a href="{{ site.baseurl }}/images/2016-02-08/before-bts.png">
  <img src="{{ site.baseurl }}/images/2016-02-08/before-bts.png">
  </a>
</figure>

##### After BTs
<figure>
  <a href="{{ site.baseurl }}/images/2016-02-08/after-bts.png">
  <img src="{{ site.baseurl }}/images/2016-02-08/after-bts.png">
  </a>
</figure>

Notice how everything gets shorn down to a nice readable block in the second example? The second example you can basically read in english: "Hunting prey is the sequence of checking if you're hungry, attacking the prey till they die, and setting yourself not to be hungry anymore". Compare this to the gnarly, nested logic of the first example that doesn't use BTs. This expressiveness is a huge boon when you start to introduce more interesting and complicated behaviors like goblins stealing your stuff. (We'll get to that in a second.)

#### Reus-AI-ble Code

The previous code examples are also great for pointing out the second boon of BTs: reusability.

In the first piece of code we have a bunch of nested checks and all the code is tied together pretty tightly. If I wanted to check if an agent was hungry in another context, and do something else afterwards I'd basically have to copy and paste this code and change stuff inside that first `if` block. That's not great. Especially when you consider maybe there's a *bunch* of situations where I want to start by checking if someone is hungry. Nevermind if I have to chain these checks together i.e. check if they're hungry, then check if they're tired, and on and on etc.

With BTs you just have a nice little one liner `CheckIfHungry` that encapsulates the check and allows you to follow it up with whatever you want to do next. I don't need to rewrite anything other than that one line. And the wonderful thing is that `CheckIfHungry` could be a series of complicated checks. In fact, `AttackTargetTillDead` is one such action encapsulating a bunch of complicated checks. That one line takes care of all the logic necessary to check if an agent is dead, find where they're located, path to them, and attack them. One line you can plug anywhere in your code. It's honestly amazing.

### BTs Are Gobs Of Fun

Ah, goblins. Gobbos. The green skinned vermin of the fantasy realm. And what kind of fantasy realm would it be without a hated enemy who tries to sneak in to your town and steal your things?

##### Testing The Skulking Green Skinned Filth
<figure>
  <a href="http://i.imgur.com/SfbCzq8.gif">
  <img src="http://i.imgur.com/SfbCzq8.gif">
  </a>
</figure>

Behavior trees were instrumental in fleshing out the goblins a little bit more. Though it may be a little hard to tell due to the speed of the gif, goblin's now take items and wander off the map. Before BTs this would have been a matter of hard coding a series of checks and tying them together into the desired filth-behavior. After BTs, it can all be condensed down into this concise, readable BT action:

<figure>
  <a href="{{ site.baseurl }}/images/2016-02-08/steal-code.png">
  <img src="{{ site.baseurl }}/images/2016-02-08/steal-code.png">
  </a>
</figure>

<small>Translation reading line by line: "If you have a stolen item, leave the map. Otherwise find an item to steal, go to it, and steal it. (This gets repeated till they leave the map.)"</small>

Not only that, but now if I want to make other monsters steal things as well, it's as simple as adding one line (`GoStealItem`) to their corresponding behavior tree.

## Test Level Up

Another thing I spent some time on during the past 4 months was implementing small "test" levels. Essentially these are very small levels that are designed to hone in on a unit of functionality in the game and test to make sure it works. So when I was working on having goblins steal items, I created a very small map (20x20), with some goblins, and some items for them to steal. (If you look back at the gif you'll notice the black background is showing because those the literal edges of the world are visible in one frame due to the map only being 20 tiles by 20 tiles.)

Before I used to have to test everything working at once which made focusing on one specific change, and making sure it worked, difficult to do. The less variables at play, the easier it is to identify that something is working correctly (or is horribly, horribly broken).

One good example of test levels being used to focus in on a feature (or bug in this case) was when I discovered an obscure bug where all villagers were performing the same task at the same time. What do I mean by this? Well let me show you (and continue my streak of flooding blog posts with gifs):

<figure>
  <a href="http://i.imgur.com/K5qEnM2.gif">
  <img src="http://i.imgur.com/K5qEnM2.gif">
  </a>
</figure>

You might not immediately see what's wrong but what's happening is all three villagers are following each other to pick up one piece of wood and take it to the building that's being constructed. What they're *supposed* to do is each pick up a *separate* piece of wood and *separately* bring it back to the building. Seems much more efficient, yeah?

After creating this small test case, I could repeat and inspect the code of the game while this behavior happened and track down the root cause of it. What was the cause? Oh, I had just inadvertently created a hivemind for all villagers. "Wait. What?" Yeah, as I said earlier, starting to use behavior trees hasn't been entirely without its speed bumps.

A little context first. Behavior tree implementations usually include some sort of construct to add a "memory" to the behavior tree. So instead of just iterating through the entire tree each turn you can leave off where you left off the last turn. E.g. if I need to find the nearest house and walk to it I shouldn't have to search for the house each turn. I should search for it once, save it to my the tree's "memory" and then reference it each time I'm walking.

What happened here was that the memory for *all* villagers was *shared*. That means one of the villagers would search for a piece of a wood for the building and then the next villager, performing the same task, would be like "oh I already picked a piece of wood" because the first villager had done that "thinking" for them. They'd all do the same thing every single turn because of this. Part hilarious, part creepy. In retrospect, it might be a cool feature for an [ant race](http://dwarffortresswiki.org/index.php/DF2014:Antman) whose members all collectively share one memory/mind. (Would definitely have to have one of the random names for ant men be [Paul Rudd](https://www.youtube.com/watch?v=maAFcEU6atk).)

## xxSaveMeFromMyselfxx666

Last but certainly not least, in the past week I've also added the ability to save and load games. Super funny that this game has been in development for 600+ days and I just added save/load functionality. I never really needed it before but now I'm getting to the point where gameplay is starting to take shape and persistence is an important factor.

## What's Next?

On the topic of next things, I'm going to be a little more transparent with my development going forward by making my [Trello board](https://trello.com/b/nflkl8Nn/ripple) public. What is my Trello board? This is my board where I organize what my current development priorities are. You can see what I've recently finished, what's slated to be worked on next, and what I'm currently actually working on.

I'm also thinking of updating the blog and as a part of that I'm going to look at building the site to have my Trello board visible right on the homepage. I think it'll be pretty neat.

Gameplay-wise my focus is on two things: 1) making the game kill you more/present a bigger challenge and 2) start working on having visitors to your town who buy things from you.

Number 1. is pretty straightforward. I'm going to accomplish this by making the game ramp up challenges as you grow your town. Right now it's pretty lax and the events aren't often enough to provide enough of a challenge or much entertainment.

In a nutshell, number 2. is about having visitors come to your town. These won't be villagers apart of your town but rather passerbys. They'll each have their own desires and their main purpose initially will be to provide customers for your town store. So early game you might get some peasant types who are only interested in food and simple wares but later on you might get adventurers with their pockets full from the spoils of adventure looking to buy weapons and armor. They'll provide an avenue for wealth generation and I think make an interesting mechanic for players who want to focus on the economic side of running a fantasy town.

Number 2. is a bigger, broader goal and I'm only planning on scratching the surface. In a month we'll see where I'm at.

### Der Changelog

[As usual if you want to see the individual commits of code I pushed to the repo, check out the changlog.]({{ site.baseurl }}/changelog/changelog-oct-17)

## Subscribe

Don't forget to <a href="/ripple/subscribe">subscribe</a> to stay up to date! I promise next time will include goblin massacres. (Don't subscribe if you don't hate goblins. This is a strictly anti-gobbo blog.)
