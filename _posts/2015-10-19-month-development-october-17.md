---
layout: post
title:  "Admin-ing For Gold"
date:   2015-10-19 12:00:01
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

##### The Month(s) In Development August 1st 2015 to October 17 2015

It's been almost another 3 months of development. Actually, let's call it quasi-development. My time has been bombarded recently due to the release of Metal Gear Solid V as well as Disgaea 5 a couple of ridiculously time consuming games that I couldn't resist. I might have also reactivated my subscription to WoW for a month...but we won't talk about that.

So what did I do as far as development. Well let's jump into the breakdown like usual.

#### Major Things:

* Generalized and improved AI of agents using a new "behaviors" system
* Added an admin menu that can spawn all manner of game items like monsters, buildings, resources, and more
* Started work on code that will make adventurers intelligently purchase things that your town is producing/selling

#### Smaller Things

* Health bars, health bars, health bars (I figure if I write it 3 times it's almost like there are 3 things here like normal)

Continuing the theme of last week I'm going to give a brief overview of a couple things I added and then go more in depth on another topic.

Let's get started.

## Admining For Gold

Let's start light with the admin menu, a feature that wasn't terribly hard to implement and can can be shown off with GIFs.

Basically you can think of the admin menu as a sort of tool for me to test things. So I can trigger any event or spawn any item or monster on the map instantly. That and I can use it to spawn a horde of zombies and watch them destroy a village in seconds for my own sadistic amusement.

#### Spawning A Zombie Horde From The Admin Menu
<figure>
  <a href="http://i.imgur.com/ogYl51q.gif">
    <img src="http://i.imgur.com/ogYl51q.gif"/>
  </a>
</figure>

#### Spawning Trees From The Admin Menu
<figure>
  <a href="http://i.imgur.com/oLyPOPN.gif">
    <img src="http://i.imgur.com/oLyPOPN.gif"/>
  </a>
</figure>
<small>Bonus points if you noticed the cursor changing between the first and second gif.</small>

## Inappropriate Behavior

One of the first things I did was make a slight improvement to the very rudimentary "AI" that's in place in the game. The logic of agents in the game previously was very hardcoded. If you were a wolf, every turn you'd go and hunt out a specific type of creature (deer) and kill them. If you were a goblin you'd just auto-lock on to the nearest one of the player's villagers on the map and, like some sort of ugly, green Terminator, attack them until you died or the game ended.

It provided the basic behavior that I was looking for but obviously wasn't a very extensible solution. As soon as I added something that was *like* a wolf but only attacked some *other* sort of creature I'd have to copy and paste a whole bunch of code and change some variables. Not terrible at first admittedly. But then if I need to change the basic underlying behavior that's shared between goblin and wolf, I have to change it in two places. That's problem one.

Problem two is if I wanted to have multiple things an agent could do in tandem like "hunt for deer" and "steal gold from the player's town", I'd end up with some complex convoluted logic. E.g. If there are no deer, and you're not hungry, and there are apple trees, and there's a villager named Steve, and, like, he stole your Pokemon cards during lunch that one time in 5th grade, and his mom smokes American Spirits... etc etc. It blows up quickly.

So what I ended up with is a still very rudimentary, but somewhat improved solution. Basically it starts with a list of "behaviors". For the adventurer this is:

```js
behavior: [
	'buys-things',
	'monster-hunter',
	'uses-potions',
	'greedy',
	'tavern-dweller',
	'rests-in-tavern'
]
```

So each one of these "behaviors" is a single unit of behavior. And every turn an agent doesn't have anything to do they'll pick one of these behaviors from the list and try to carry it out. Let's take a specific example of the `monster-hunter` behavior:

```js
'monster-hunter': function () {
	// Find a monster
	var agentToAttack = this.get('gameManager').randomAgent(this.id, {
		traits: ['monster']
	});
	// Attack the monster if there is one
	if (agentToAttack) {
		return new AttackTillDeadAction(this, agentToAttack);
	}
	// Otherwise
	else {
		// Check for a lair to destroy
		var nearestLair = buildings.getNearestLair(this.get('tile'));
		// Go and attack it if there is one
		if (nearestLair) {
			return new AttackBuildingTillDestroyedAction(this, nearestLair);
		}
	}
}
```

Even if you're not a programmer, this should be pretty easy logic to parse if you look at the comments (the lines that start with `//`). Basically the agent looks for a monster, goes to attack it if it finds one, otherwise they look for a monster lair and go attack that if there is one. What happens if there are no monsters *or* lairs? Well, it returns nothing. Which means the agent then continues on through their list of "behaviors" to find the next one that they *can* do.

Which segways into the next part of the behaviors code, which is the ordering of these checks. Obviously it's probably more important that a monster hunter goes off and kills monsters than it is for him to go and chill in the tavern, right? Well that's exactly how it works. Currently these behaviors are prioritized and checked in an ordered fashion based on this assumption that some are more important than others.

Sounds pretty good, right? Well, yes and no. While it is certainly an improvement to the original code, it's still not as granular or extensible as I'd like. While behaviors break up the logic somewhat into smaller, modular portions, they're still aren't small enough or modular enough that they can be fit together and interact with each other easily or nicely.

Not only that but the hard-coded, fixed prioritization of behaviors ("hunt monsters before going to the tavern") leads to very predictable actions. What if the adventurer is kind of lazy and sometimes *chooses* to go to the tavern *even with* the imminent threat of a monster invasion? To me, that sounds more interesting than some taciturn, robotic, do-gooder. 

With that in mind, I've thought about something more advanced like a formal behavior tree that would allow these sorts of behaviors to be broken up and chained in more complex, interesting, and random ways. My current code around actions and tasks is very similar to a behavior tree, it just lacks the formal structure to tie everything together. After reading an article on Gamasutra [about behavior trees in Project Zomboid](http://www.gamasutra.com/blogs/ChrisSimpson/20140717/221339/Behavior_trees_for_AI_How_they_work.php) it actually doesn't seem like it will be that large of refactor. That added with the fact that there's already a pretty [solid looking library](https://github.com/renatopp/behavior3js) for behavior trees in javascript, means I'm going to start experimenting with them in the near future.

## What's Next?

So what's next? Well the next major focus for my efforts is going to be producing a living, breathing (or at least shambling, half-alive) economy in game. I've laid down a little bit of the groundwork for these efforts: i.e. adventurers spawn with a list of items they like, and a pocket full of gold but there's still a lot to be done.

The end goal is to have random visitors show up at the town and be able to buy things that your villagers produce. The things that the visitors purchase will be based on their personal desires and wealth, i.e. adventurers will prefer weapons and armor, and travelers might just buy some food and clothing. I think the idea of tailoring your town's economy to the types of visitors you receive would be a really fun mechanic. That and the work required to flesh it out will lay down further groundwork for creating the feeling of an active fantasy world that I'm really looking to capture with this game.

(If the above sounds familiar it's because I'm a huge fan of [Recettear](http://store.steampowered.com/app/70400/), a game where you run your own item shop set in a typical JRPG world. Highly recommended if that sounds like fun.)

I've got a vacation coming up so I'm looking forward to spending some time in some coffee shops in western Mass working on this stuff. Till next time!

### Der Changelog

[Changelog checkit]({{ site.baseurl }}/changelog/changelog-oct-17)

## Subscribe

As always, don't forget to <a href="/subscribe">subscribe</a> if you want to keep up with how the game is developing!
