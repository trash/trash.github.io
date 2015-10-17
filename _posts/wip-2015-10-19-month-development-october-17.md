---
layout: post
title:  "The Month(s) In Development August 1st 2015 to October 17 2015"
date:   2015-10-19 12:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

It's been almost another 3 months of development. Actually, let's call it quasi-development. My time has been bombarded recently due to the release of Metal Gear Solid V as well as Disgaea 5 a couple of ridiculously time consuming games that I couldn't resist. I might have also reactivated my subscription to WoW for a month...but we won't talk about that.

So what did I do as far as development. Well let's jump into the breakdown like usual.

#### Major Things:

* Generalized and improved AI of agents using a new "behaviors" system
* Added an admin menu that can spawn all manner of game items like monsters, buildings, resources, and more
* Started work on code that will make adventurers intelligently purchase things that you store is producing/selling

#### Smaller Things

* Health bars, health bars, health bars (I figure if I write it 3 times it's almost like there are 3 things here like normal)

Continuing the theme of last week I'm going to give a brief overview of a couple things I added and then go more in depth on another topic.

Let's get started.

## Inappropriate Behavior

One of the first things I did was make a slight improvement to the very rudimentary "AI" that's in place in the game. The logic of agents in the game previously was very hardcoded. If you were a wolf, every turn you'd go and hunt out a specific type of creature (deer) and kill them. If you were a goblin you'd just auto-lock on to the nearest one of the player's villagers on the map like some sort of ugly, green Terminator and attack them until you died or the game ended.

It provided the basic behavior that I was looking for but obviously wasn't a very extensible solution. As soon as I added something that was like a wolf but only attacked some other sort of creature I'd have to copy and paste a whole bunch of code and change some variables. Not terrible at first. But then if I need to change the basic underlying behavior for both of them, I have to change it in two places. That's problem one.

Problem two is if I wanted to have multiple things an agent could do, I'd end up with some complex convoluted logic. E.g. If there are no deer, and you're not hungry, and there are apple trees, and there's a villager named Steve, and, like, he stole your Pokemon cards during lunch that one time in 5th grade, and his mom smokes American Spirits... etc etc.

So what I ended up with is a still very rudimentary, but somewhat improved solution. Basically it starts with a list of "behaviors". For the adventurer this is:

{% highlight js %}
behavior: [
	'buys-things',
	'monster-hunter',
	'uses-potions',
	'greedy',
	'tavern-dweller',
	'rests-in-tavern'
]
{% endhighlight %}

So each one of these "behaviors" is a single unit of behavior such that given some idle time the agent has they will try and do that thing. Kind of vague still. Let's take a specific example of the `monster-hunter` behavior:

{% highlight js %}
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
{% endhighlight %}

Even if you're not a programmer, this should be pretty easy logic to parse if you look at the comments (the lines that start with `//`). Basically it looks for a monster, returns an action to attack it if there is one, otherwise we find a monster lair and go attack that if there is one. What happens if there are no monsters or lairs? Well, it returns nothing. Which means the agent then goes on through their list of "behaviors" to find the next one to see if they can do.

Which segways into the next part of the behaviors code, which is the ordering of these checks. Obviously it's probably more important that a monster hunter goes off and kills monsters than it is for him to go and chill in the tavern, right? Well that's exactly how it works. Currently these behaviors are prioritized and checked in an ordered fashion based on this logic.

Sounds pretty good, right? Well, yes and no. While it is certainly an improvement to 


### Der Changelog

[Changelog checkit]({{ site.baseurl }}/changelog/changelog-may-10)

## Subscribe

Oh and don't forget to <a href="/ripple/subscribe">subscribe</a> if you want to keep up with how the game is developing!
