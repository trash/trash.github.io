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

Four months as it turns out is a very long in development time. And a lot has happened.

In my [last blog post](/ripple/development/month-development-october-17/) I talked about improvements I had made to the AI to be a little bit more extensible. And then made mention of [behavior trees](https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)), something to the tune of "these changes are a partial fix and I should probably just use behavior trees". [DJ Khaled voice] "So what did we do? We rewrote the entirety of the AI to use behavior trees." Honestly, a massive, massive refactor. A huge portion of the old code is straight up dead. And the game couldn't be any better for it.

#### Major Things:

* AI Rewrite
* Created test levels
* Save/Load game functionality

#### Smaller Things

* Clicking on game objects outputs them to console
* Buildings have names like "The Regal Mare"
* Now using es6

Let's jump right in.


## AI Don't Know What You're Talking About

The day after I wrote the last blog post I committed the first change to work my way towards having the in game AI use behavior trees (BTs). I did a quick amount of googling to see if there were any existing libraries for BTs in JavaScript and found this library called [b3](https://github.com/behavior3/behavior3js). I'm not sure it's actually supported anymore (the last commit was in July 2015), but I've been using it to great effect, making my own little tweaks as I go.

After some initial mental hurdles of understanding how BTs work, made much easier by [this great blog post by the lead dev of Project Zomboid](www.gamasutra.com/blogs/ChrisSimpson/20140717/221339/Behavior_trees_for_AI_How_they_work.php), I had some basic functioning AI. To be clear, I make it seem like it was a short, simple process but it really wasn't. I mean check out these commit messages from the first couple weeks:

`2015-10-21 made a janked up wolf. everythig is laggy now`

`2015-10-22 Tree eats shit with too many agents????`

`2015-10-23 Deer now use b3 behavior trees. real glitchy`

`2015-10-25 Kind of got the wander action working`

`2015-10-26 Flee action actually flees. SUPER buggy`

Ah yes the swears in the solo dev commit log. That's how you know your efforts are going well.

### So What's The Big AI-dea Anyway???

You might be wondering: "So why switch to behavior trees?" What did I actually get out of spending a couple months refactoring a huge portion of the codebase to use them. There's 2 big ways BTs have been awesome: 1) they're expressive and concise and 2) they're very reusable.

#### AI Just Can't Express Myself

So a big problem with my previous AI system is you would look at a piece of code and at a glance you couldn't really tell what the agents would actually do when running the code. You'd look at the code around having a wolf hunt a deer and, without having a big obvious class name around the code like `WolfGonHuntThemDeers`, you might be left asking yoursel, "Wait. What does this actually do?" You might say, "Well, you wrote all the code yourself, how could you not know what it does?". Sadly, when you work on a single codebase for over a year, even things you wrote yourself start to fade from your mind.

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

Notice how everything gets shorn down to a nice readable block in the second example? The second example you can basically read in english: "Hunting prey is the sequence of checking if you're hungry, attacking the prey till they die, and setting yourself not to be hungry anymore". This expressiveness is a huge boon when you start to introduce more interesting and complicated behaviors like goblins stealing your stuff. (We'll get to that in a second.)

#### Reus-AI-ble Code

The previous code examples are also great for pointing out the second boon of BTs: reusability.

In the first piece of code we have a bunch of nested checks and all the code is tied together pretty tightly. If I wanted to check if an agent was hungry in another context (outside of checking if a wolf is hungry and needs to go hunt deer), and do something else afterwards I'd basically have to copy and paste this code and change stuff inside that first `if` block. That's not great. Especially when you consider maybe there's a bunch of situations where I want to start by checking if someone is hungry. Nevermind if I have to check if they're hungry, then check if they're tired, and on and on etc.

With BTs you just have a nice little one liner `CheckIfHungry` that encapsulates the check and allows you to follow it up with whatever you want to do next. I don't need to rewrite anything other than that one line. And the wonderful thing is that `CheckIfHungry` could be a series of complicated checks. In fact, `AttackTargetTillDead` is one such action. That one line takes care of all the logic necessary to check if an agent is dead, find where they're located, path to them, and attack them. All in one line you can plug anywhere in your code. It's honestly amazing.

### BTs Are Gobs Of Fun

Ah, goblins. Gobbos. The green skinned vermin of the fantasy realm. And what kind of fantasy realm would it be without a hated enemy who tries to sneak in to your town and steal your things?

##### Testing The Skulking Green Skinned Filth
<figure>
  <a href="http://i.imgur.com/SfbCzq8.gif">
  <img src="http://i.imgur.com/SfbCzq8.gif">
  </a>
</figure>

### Der Changelog

[Changelog checkit]({{ site.baseurl }}/changelog/changelog-oct-17)

## Subscribe

As always, don't forget to <a href="/ripple/subscribe">subscribe</a> if you want to keep up with how the game is developing!
