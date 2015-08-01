---
layout: post
title:  "The Month(s) In Development May 10th 2015 to July 31st 2015"
date:   2015-08-01 12:00:00
categories: development
comments: true
image:
  feature: month-in-development-header.png
---

Another 3 months of working on the game, another 200+ commits of code pushed.

So what did I do with all that time?

#### Major Things:

* Finished the conversion to PixiJS and all the rendering optimizations that went along with it
* Improved map generation
* Added visiting merchant and trading mechanic
* Added more monsters and an adventurer who helps slay monsters

#### Smaller Things

* Citizens can have multiple professions
* Added basic equipment to the game
* Got crafting professions (mostly) working again

Oh yeah and I updated the site again. Before there was relatively no introduction to what the game was about. So if you happened to wander to the site of your own accord you'd probably have no idea what you're looking at and would bounce off pretty hard. Now the landing page actually gives a brief intro the game and separates the blog posts into a separate section.

Let's get started.

## Should have PIXI'd a better engine to begin with

So if you'll recall I ended the [last post]({{ site.baseurl }}/development/month-development-february-09/) talking about how I was in the process of converting the underlying rendering code from using Phaser to using PIXI directly. And I can tell you it went great. My method of only rendering what needed to be rendered into sub containers worked really well. That paired with some optimizations such as rendering a large number of static/unchanging sprites into a single very large sprite means that I can get 60 fps with no problem. Even when running the game at incredibly fast speeds (i.e. all your villagers are sprinting around the screen and you have no idea what is going on).

So the light at the end of the tunnel was in fact the metaphorical sun of "achievable performance gains" and not the metaphorical train of "being forced to rewrite the entire game to run in Unity or something".

Yay.

## "Wow this map isn't crap"

To the discerning reader, the maps may have seemed a little bland and repetitive. And being a discerning reader, their observation with be very...discerned and correct and stuff. Because the generated maps *were* pretty bad.

##### Ahhhhh my eyes! Oh the monotony and humanity!

<figure>
  <a href="{{ site.baseurl }}/images/2015-05-09/ui-after.png">
    <img src="{{ site.baseurl }}/images/2015-05-09/ui-after.png"/>
  </a>
</figure>

If you look at the minimap in the lower right hand corner, which displays the entire map, you can see that it doesn't really look like any natural formation of land that you'd encounter on the planet.

The reason for this is because my initial quick and dirty solution to map generation was to just random pick spots on the map and then generate a block of resources. That's it. So you'd end up with lots of overlapping square patterns made up of trees, rocks, or bushes. Which was great for how little time it took me to code up. It got something playable and testable in roughly 0 time. But I needed to improve upon it.

Now, the topic of generating 2D maps for games is a [fairly](http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/demo.html) well [covered](http://gamedev.stackexchange.com/questions/31241/random-map-generation) topic so I [won't](http://gamedevelopment.tutsplus.com/tutorials/create-a-procedurally-generated-dungeon-cave-system--gamedev-10099) cover it [here](http://stackoverflow.com/questions/2520131/looking-for-a-good-world-map-generation-algorithm). But I can summarize my algorithm from a very high level perspective.

1. Generate a flat base sprite based on the biome. I.e. a huge swathe of green for the forest biome.

2. Generate water on top of this.

3. "Normalize" the water. What I mean by "normalize" here is to basically make the water and grass tiles mesh well.

4. Randomize the biome tiles. I.e. we don't want solid green for every tile, we want to have a random assortment of tiles to break things up.

5. "Bridge" islands that were created during the water step. Because the way water is generated randomly, there a portions of land that can become inaccessible (water cannot be traversed by any agent). This step takes care of this by spawning bridges of land over portions of water to make sure that all pieces of land are connected to at least one other portion of land. <small>Based on a basic graph theory proof this means that all land is connected.</small>

6. Generate hills on the map. (There's also some normalization similar to water that has to happen here.)

7. Generate resources. This generates all the trees, rocks, and bushes on the map.

So let's break that down a little bit. The main interesting things are 1) how do we lay out the water on the map 2) what does "normalizing" the tiles mean 3) how do we generate bridges and 4) how do we generate resources/decide where they go.

### Was ist das Wasser?

#### Notice the corners of the water tiles overlapping where the grass should be visible
<figure>
  <a href="{{ site.baseurl }}/images/2015-08-01/water-bad.png">
    <img src="{{ site.baseurl }}/images/2015-08-01/water-bad.png"/>
  </a>
</figure>

## Third Subject Header

### Der Changelog

249 commits this time around. Like last time I'm going to create a separate post to list them all.

[Changelog]({{ site.baseurl }}/changelog/changelog-february-09)

## Subscribe

Oh and don't forget to <a href="/ripple/subscribe">subscribe</a> if you want to keep up with how the game is developing!
