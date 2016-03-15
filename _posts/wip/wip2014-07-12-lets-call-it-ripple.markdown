---
layout: post
title:  "Let's Call It Ripple"
date:   2014-07-12 19:33:00
categories: development
comments: true
---

I'm making a game.

Well, that's good to get off my chest.

<!-- As a part of writing this up I did a little research just to get some stats on how far I've gotten since I started development, and some of them actually surprise me.[]My first commit was on May 17th. Which means I've been working on the game for a little bit under 2 months.[]In that time I've pushed 240 commits, which in non-git terms means I've added to the codebase 240 separate times. An admittedly pretty ambiguous statement as some of those commits were little more than commenting a function, while others were very large refactors or adding new complex features.[]Let's talk about Seinfeld. By now most people are familiar with [the Seinfeld strategy for getting good at something](http://lifehacker.com/281626/jerry-seinfelds-productivity-secret). The "Don't Break The Chain" technique. Since May 28th I've written code for the game every single day. 46 days straight, which of course is my longest streak of writing code every day straight ever. And probably the longest I've worked on anything consistently over a period of time.[]Again, some of the code written for a given day was little more than going back and tweaking something or adding a comment, trivial tasks. But I don't think that takes away from the significance of the task, that is consistently doing something every day.[]I think this consistency has almost everything to do with this project not disappearing into the aether, and in fact progressing much faster and farther than I might have guess in 2 months time. -->


<figure class="half">
    <a href="{{ site.baseurl }}/images/oldscreen.png"><img src="{{ site.baseurl }}/images/oldscreen.png"></a>
    <a href="{{ site.baseurl }}/images/newerscreen.png"><img src="{{ site.baseurl }}/images/newerscreen.png"></a>
    <figcaption>Here's what the game looked like about a month ago and what it looks like now.</figcaption>
</figure>

## So what is it?

A fantasy town simulator. 

It's like Majesty but with more depth like Dwarf Fortress.

At its heart it's a simulation. The best types of simulations are made of a series of complex intertwined systems that form to create a cohesive world. A world that fosters interesting events. A world that fosters stories.

Here's "fantasy town simulator" in the format of a story:

You start a town in a fantasy world. You have citizens who have to eat and sleep. You build them houses to live in, start some rudimentary farming so they can eat. You grow and expand. You try and keep your people happy. You watch as they form relationships and personalities.

But as with any good story, there has to be conflict. Inevitably bad things will occur. Maybe orcs will invade. Maybe that shipment of medicine gets raided en route and then a sickness spreads, wiping out half your town. Maybe you survive and rebuild. Learn and adapt. Maybe no one survives and it's over. Sounds like it's time to start again.

<!-- Then maybe I'll get into a couple of development stories, that is stories that I picture as having the game able to recreate at some point. -->

## Inspiration

Let's start by mentioning some of my sources of inspiration.

By looking at the above screencap you might already have a couple guesses. And if you're in the know about games, you're probably familiar with [Dwarf Fortress](http://en.wikipedia.org/wiki/Dwarf_Fortress) and might have guessed it. Or maybe you guessed [the Sims](http://en.wikipedia.org/wiki/The_sims). These would both be good guesses and both sources of inspiration. <!-- There are more and I'll start addressing them each directly. -->

<!-- It's out of the scope of this post to go into detail about what each one of these games is but if you're interested, I implore you go do some research on each one if you're not familiar, and doubly implore you to go and try them out if you haven't already. -->

The shared component of each of these games that I love and that draws me to them is their ability to facilitate dynamic and emergent gameplay with a series of sophisticated yet coherent interacting systems. That is to say they're simulations. Really good simulations. Every time you boot up a game of Dwarf Fortress you know that there's always a chance you're going to lose. But if you know anything about Dwarf Fortress, losing is winning. No matter what leads to the inevitable fall of your group of dwarves, it will always be the consequence of some ridiculous events that unfold before your eyes, and the joy comes from experiencing this and ultimately causing every part of it through some fault of your own. Sure all your dwarves are dead or driven to lunacy, the ephemeral spectres of those who passed now haunting the hauls of your once beloved polished stone hallways. You "lost". But, you got to witness it, and you, either through action or inaction, were the instrument of their ruin. You saw that first event that set the whole spiral off: that time Urist McDingus took a drink of that poisoned water you forgot to clean up, proceeded to die, and sent his family on a grief stricken murderous rampage. In this way, you "won". 

The Sims is the same. (Though perhaps a little bit less brutal and dwarfey.) For a lot of people it's at its best when you can plop down a variety of interesting characters that you've created and watch as drama unfolds amongst your Sim children. 

Emergent gameplay's strength is in its ability to continually surprise us while still remaining coherent enough that you can always understand *why* something happened. This is an important clarification to drive home. Any one can throw down random number generators all over a game's code hoping to make it "interesting" because "Hey, it's random, right?" Randomness on its own isn't fun. That's just chaos for the sake of chaos. Sure anarchy sounds all good and romantic, but nobody really likes an anarchist. They smell and they have questionable music taste. (Don't get me wrong Crack Rock Steady is still a song that speaks to me.) No, a good simulation has rules that, while maybe not being immediately clear to the player, *are* there and the player *can* learn them. 

<!-- The best games are the ones that create a world, an environment, that facilitates interesting experiences for the player while not holding the player's hand. -->

You: "So it's going to be a simulation."

Me: "Yeah, I suppose that's right. But wait, let me toss two more influences in."

You: [Groan]

[Majesty](http://en.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim). Ah, what a wonderful game that far too few people have played. In short, it's a simulation, like the Sims and like Dwarf Fortress. But it has a couple quirks and idiosyncrasies that really define it as an inspiring work of game design. It's full title, "Majesty: The Fantasy Kingdom Sim" shines a little light on what the game's all about. Basically, you have a little fantasy town plopped down on a map. This map is full of lairs for trolls, vampires, goblins, and other baddies. These baddies start invading your town and the only way to combat them is to have heroes go and fight and slay them. But here's the catch: while you can create heroes, you can't actually directly control them, they go off and do whatever it is that they desire. You can only indirectly influence their actions by placing bounties on certain actions and trying to construct a kingdom that facilitates their proper development and success in the world (with the ultimate goal of serving your interests). So this is where the simulation and emergent component of the gameplay comes into play. Each of these heroes has a predefined personality, so a rogue will be inclined to act out of self interest: more eager to run into trouble if there's some gold in it for him, more likely to flee like a coward if the going gets tough. On the other hand you have knights who can often charge into fights they have no hope of winning just because they're feeling really knightly. You can already see the recipe for some great emergent stories. The knight who keeps getting into battles he shouldn't win but keeps winning anyway. The agony and grief when he is finally struck down at the hands of the evil vampire lord. The sniveling rogue who runs away at any sign of danger but who always survives to see the payday and ultimately becomes a force to be reckoned with by abusing the "Pay To Win" nature of the blacksmith's forged armaments.

Want more inspirations in a list form with no explanations? Great here's that: The Sims, Dwarf Fortress, Majesty, D&D, R.A. Salvatore, Banished, SimCity, Black and White


---
Things that helped me on this post:
[spellcheck for markdown files in sublime text](https://coderwall.com/p/j3tjtq)