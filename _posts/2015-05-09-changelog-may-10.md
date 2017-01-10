---
layout: post
title:  "Changelog from May 10th 2015 to July 31st 2015"
date:   2015-08-01 12:00:00
categories: changelog
comments: true
image:
  feature: month-in-development.png
---

### Der Changelog

232 commits in about 3 months.

* Sun, 10 May 2015 22:07:56 Commented some newer code
* Mon, 11 May 2015 19:04:35 Got rid of a bunch of stuff that shouldn't be in the repo
* Mon, 11 May 2015 20:14:04 First attempt at 3rd layer functionality for subContainers.
* Tue, 12 May 2015 15:26:13 Fixed sprites so they're positioned relative to subcontainers
* Tue, 12 May 2015 15:39:57 fixed camera being broken due to subcontainers
* Tue, 12 May 2015 16:06:29 Pixi example uses new tilemap api
* Tue, 12 May 2015 18:27:00 Fixed tilemap adding subcontainers in wrong order
* Tue, 12 May 2015 19:41:44 Now rendering background of map to single texture
* Wed, 13 May 2015 20:15:49 Rewrote the minimap to use a canvas element.
* Thu, 14 May 2015 12:27:16 Move/remove/cleanup some things
* Thu, 14 May 2015 12:34:52 Cleaned up MoveActionSequence
* Thu, 14 May 2015 20:32:07 Added a bunch of docstrings to agent code.
* Sat, 16 May 2015 11:07:31 Rewrote the way the game clock handles the timer
* Sat, 16 May 2015 11:19:44 Got minimap view window working again
* Sat, 16 May 2015 11:35:40 Changing the sprite's row/column also updates the x/y coords
* Sat, 16 May 2015 12:25:47 Fixed some calculations with select service
* Sat, 16 May 2015 12:52:01 Reimplemented status sprites for citizens
* Sat, 16 May 2015 13:00:43 Fixed citizens not being fetched properly cause id change
* Sat, 16 May 2015 13:13:11 Fixed timer not actually working.
* Sun, 17 May 2015 12:10:24 Fixed removeChild method for tilemap code
* Sun, 17 May 2015 12:52:15 Testing out using perlin/simplex noise to generate the map
* Sun, 17 May 2015 17:04:54 Mapgen now mix of perlin noise, clustering, clearing
* Sun, 17 May 2015 17:10:36 Make citizens stand adjacent instead of on top of harvested rsrc
* Sun, 17 May 2015 17:30:20 Fixed a bunch of old references to sprite creation. Added shadows.
* Sun, 17 May 2015 18:51:20 Hopefully fixed some stuff with sprites and buildings.
* Mon, 18 May 2015 19:00:21 Sprites now tween in between tiles
* Tue, 19 May 2015 10:53:58 Bushes now gathered by new gatherer profession
* Tue, 19 May 2015 16:17:58 Fixed sprites jumping when tweened between subcontainers
* Tue, 19 May 2015 18:03:34 Fixed tweening causing sprites to tweak on high speed
* Tue, 19 May 2015 18:17:05 Fixed profession selector for citizen card
* Tue, 19 May 2015 18:18:52 Fixed citizen cards closing when they shouldn't.
* Tue, 19 May 2015 18:30:16 Got farms placeable/growable again
* Wed, 20 May 2015 21:31:08 Subcontainers now have multiple layers.
* Wed, 20 May 2015 21:46:13 Fixed crops not appearing properly for farms.
* Wed, 20 May 2015 21:51:57 Fixed issue with trees having wrong resource count.
* Thu, 21 May 2015 12:22:10 Agents now face the resource they are harvesting
* Thu, 21 May 2015 12:57:42 Fixed trees having multiple shadows.
* Thu, 21 May 2015 13:15:40 Added buildings to minimap
* Fri, 22 May 2015 12:22:31 Working on extending the tooltips
* Fri, 22 May 2015 12:32:17 Building now updates tooltip with progress of completion
* Fri, 22 May 2015 12:48:23 Farms on minimap. Buildings list closed on escape.
* Fri, 22 May 2015 13:16:48 Broke apart dirt tiles and added them to map spritesheet
* Fri, 22 May 2015 13:56:02 Added goblin spamming event
* Fri, 22 May 2015 15:07:50 Fixed bug where sprites weren't destroyed if in the first subcontainer
* Fri, 22 May 2015 15:31:22 Made some minor improvements to the "combat" system
* Fri, 22 May 2015 16:04:59 Citizens now go to defend each other if they're attacked and nearby
* Fri, 22 May 2015 16:38:48 Fixed cleanup on game game destroy for citizens.
* Fri, 22 May 2015 21:52:27 Skeletoned out weapon class. Refactored the way items are created.
* Sat, 23 May 2015 11:42:45 Added camera buffer to all sides.
* Sat, 23 May 2015 12:00:39 Fixed some parts of ui going off screen
* Sat, 23 May 2015 15:07:02 REmoved badge on active notifications button
* Sat, 23 May 2015 16:38:48 Citizens now equip weapons/armor they start with
* Sun, 24 May 2015 13:30:22 Added inventory section to citizens panel
* Sun, 24 May 2015 13:47:23 Added basic stats to citizens panel
* Sun, 24 May 2015 14:01:42 Fixed citizen panel not being updated when citizen switches aactions
* Sun, 24 May 2015 14:11:46 Fixed citizens not eating
* Sun, 24 May 2015 17:06:29 Skeletoned out a spawn trader event.
* Sun, 24 May 2015 17:20:32 Added a market stall building.
* Sun, 24 May 2015 17:31:38 Trader now goes to the market stall when he's spawned
* Sun, 24 May 2015 17:42:30 Trader spawns a bunch of items on the ground when he spawns
* Sun, 24 May 2015 18:49:04 Fixed horrifying pathfinding bug.
* Sun, 24 May 2015 19:33:49 Trader emits 'trader-arrival' event when he gets to market.
* Sun, 24 May 2015 20:27:05 Hacked up a trade button and trade menu
* Mon, 25 May 2015 14:26:26 Improved trader screen. Added sprites for swords/armor
* Mon, 25 May 2015 14:58:01 Made sure counts for items are affected by claimed state
* Mon, 25 May 2015 15:00:24 Resources that are harvested are claimed
* Mon, 25 May 2015 17:40:51 Hackily got inventory of town displayed on trade screen
* Tue, 26 May 2015 17:51:42 Trader side of trade screen iterates through same list of items
* Wed, 27 May 2015 14:53:43 Added merchant and merchant stall assets
* Wed, 27 May 2015 16:55:53 Market switches to active sprite when merchant arrives
* Thu, 28 May 2015 18:57:18 Market occupies space where merch stands.
* Thu, 28 May 2015 19:57:08 Fixed buildings list. No longer uses resources-service
* Thu, 28 May 2015 20:22:15 Improved layout of trade menu some more using tables
* Fri, 29 May 2015 20:27:31 Improved trade menu styling a bit
* Fri, 29 May 2015 20:47:08 Trade menu updates when resource count changes
* Fri, 29 May 2015 21:24:52 Fixed wealth service calculating items/buildings incorrectly.
* Fri, 29 May 2015 22:21:36 Produced goods have values inside the resources service
* Fri, 29 May 2015 22:47:06 Added buttons for buying and selling to trade menu.
* Sat, 30 May 2015 12:42:31 Improved styling of trade menu screen a bit
* Sat, 30 May 2015 12:54:02 Jshint appeasement. Fixed circular dependency
* Sat, 30 May 2015 14:29:27 Expanded trader service to handle keeping track of gold/items/etc
* Sat, 30 May 2015 15:15:35 Handling bounds for trade. Only display button when can make trade
* Sat, 30 May 2015 15:27:41 Improved styling of gold count in trade menu
* Sat, 30 May 2015 15:34:45 Added color highlighting for diff for counts of individual resources
* Sat, 30 May 2015 16:43:19 Added basic trade button that does nothing
* Sat, 30 May 2015 22:58:18 Got rivers being generated on map
* Sun, 31 May 2015 00:16:08 Started switching out water tiles based on neighbor tiles
* Sun, 31 May 2015 00:35:17 Fixed bug with resources spawning messing with water tiles
* Sun, 31 May 2015 01:09:09 Fixed animals sometimes being spawned in water
* Sun, 31 May 2015 13:14:43 Got code to find all the islands generated on map gen
* Sun, 31 May 2015 14:02:15 Got basic bridge being generated between first island and second
* Sun, 31 May 2015 14:21:38 Widened up bridge a bit
* Sun, 31 May 2015 14:48:44 Bridges are now generated between all islands
* Sun, 31 May 2015 15:14:04 Made rivers way less massive
* Sun, 31 May 2015 15:52:18 Made bridge creating code more efficient
* Sun, 31 May 2015 16:39:53 Rivers have proper tiles for corners
* Sun, 31 May 2015 16:42:22 Map.getRandomTile properly handles finding only accessible tiles
* Sun, 31 May 2015 17:41:41 Got rid of nubs created by bridge spawning code.
* Sun, 31 May 2015 17:58:20 Jshint appeasement/cleanup
* Mon, 1 Jun 2015 17:30:43 Water on tilemap layer 1. Agents face right direction when row=1
* Mon, 1 Jun 2015 19:52:57 Water generated on first layer. Fixed 24x44 map sprites looking bad
* Mon, 1 Jun 2015 21:15:01 Fixed trees sometimes spawning where bridges were placed
* Mon, 1 Jun 2015 21:18:13 Bridges are dark blue on minimap
* Tue, 2 Jun 2015 18:42:27 Fixed some bridge edge cases. Randomized interior bridge tiles.
* Tue, 2 Jun 2015 20:36:08 Got hills being generated (without corners)
* Tue, 2 Jun 2015 21:06:21 Pulled out shared method for normalizing water/hill tiles
* Wed, 3 Jun 2015 20:45:38 Added proper corner tiles to hills.
* Thu, 4 Jun 2015 19:01:21 Added getRidOfHillNubs method to comabt shitty hillgen
* Thu, 4 Jun 2015 20:11:00 Refactored a bunch of the Resource code to try and modularize it
* Thu, 4 Jun 2015 20:18:40 Pulledout Harvestible/Desctructible classes. Jshint appease.
* Thu, 4 Jun 2015 21:30:58 Hills are now harvestable
* Fri, 5 Jun 2015 21:38:32 Hill sprite is destroyed when hill is destroyed
* Sat, 6 Jun 2015 12:34:23 When a hill is destroyed its neighbors are updated properly
* Sat, 6 Jun 2015 12:47:39 Properly handle queueing up a swath of hill to destroy at once
* Sat, 6 Jun 2015 13:02:24 Hills update corner siblings as well when destroyed
* Sat, 6 Jun 2015 13:04:58 Improved some code around destroying hill/harvestible sprites
* Sun, 7 Jun 2015 14:43:37 Hills randomly generate ore that spawns on destruction
* Sun, 7 Jun 2015 15:21:15 Got basic ore showing on hills (copper doesn't update)
* Sun, 7 Jun 2015 15:25:58 Added iron ore sprites to hills
* Sun, 7 Jun 2015 15:32:19 Hills are updated when neighbors destroyed for ore as well now
* Sun, 7 Jun 2015 16:00:26 Fixed some redundant code in citizen code
* Sun, 7 Jun 2015 16:20:57 Building reports resource gathered. Undid change to citizen queueToEat
* Mon, 8 Jun 2015 14:22:23 Highlighting resources for harvest colors in their sprite too
* Tue, 9 Jun 2015 14:13:22 Highlight whole hill area properly
* Tue, 9 Jun 2015 20:45:54 Made a method to remove hill tiles near bridges
* Wed, 10 Jun 2015 16:03:23 Stopped spawning agents in water/hills/etc
* Thu, 11 Jun 2015 15:57:16 Added check to see if islands exist after hills are placed
* Fri, 12 Jun 2015 16:24:47 Should fix random tiles at edge of map.
* Sat, 13 Jun 2015 13:34:34 Bushes drop seeds now. Changed syntax for declaring resource drops
* Sat, 13 Jun 2015 13:38:53 Fixed hill tiles being accessible
* Sun, 14 Jun 2015 13:55:18 Skeletoned out farm menu for selecting seeds for a farm plot
* Sun, 14 Jun 2015 14:16:14 Farms only plot as many tiles as there are seeds
* Sun, 14 Jun 2015 14:37:05 Seeds are used up when a farm is planted
* Sun, 14 Jun 2015 14:43:49 Crops yield food based on the seed type
* Mon, 15 Jun 2015 18:06:28 Farms drop seeds when harvested
* Mon, 15 Jun 2015 18:12:18 Items/resources have tooltips again
* Tue, 16 Jun 2015 18:20:16 Farms are way more work intensive
* Wed, 17 Jun 2015 17:03:41 Fixed goblin spawning
* Thu, 18 Jun 2015 17:53:45 Skeletoned out a profession select menu for citizens
* Thu, 18 Jun 2015 18:12:22 Citizens now have a list of professions.
* Thu, 18 Jun 2015 18:23:00 Citizens retrieve actions based on their list of professions
* Thu, 18 Jun 2015 18:25:45 Get rid of the citizen profession selector for now
* Fri, 19 Jun 2015 17:56:47 Professions are prioritized by citizens
* Sat, 20 Jun 2015 17:24:53 Make individual trees harder to cut down and drop less resources
* Sun, 21 Jun 2015 18:13:21 Made hills way harder to mine
* Mon, 22 Jun 2015 07:53:30 Inaccessible hill tiles are queued properly
* Tue, 23 Jun 2015 10:33:59 Added bubbles. Skeletoned out method for cycling through bubbles
* Wed, 24 Jun 2015 12:36:11 Bubble sprites are now properly cycled through
* Wed, 24 Jun 2015 15:19:13 Created janky basic node webkit app
* Thu, 25 Jun 2015 13:28:16 Actually including game code in the node webkit app
* Thu, 25 Jun 2015 19:20:48 Tasks have bubbles associated with them.
* Fri, 26 Jun 2015 22:46:30 Make deer far more hearty so they aren't massacred
* Sat, 27 Jun 2015 11:38:56 Make one of the starter citizens a miner
* Sat, 27 Jun 2015 12:16:58 Implemented nub tiles for hills
* Sat, 27 Jun 2015 12:36:23 Added blacksmith shop building to game
* Sat, 27 Jun 2015 13:47:14 Created graveyard/lair that spawns monsters on an interval
* Sat, 27 Jun 2015 13:54:00 Added zombies. Graveyards spawn zombies now.
* Sat, 27 Jun 2015 14:15:53 Generalized the aggressive behavior of npcs
* Sat, 27 Jun 2015 14:20:50 Moved the hunter logic from the wolf into the agent class
* Sat, 27 Jun 2015 14:35:03 Lair position is based off game seed
* Sat, 27 Jun 2015 14:52:09 Added animal lair to game.
* Sat, 27 Jun 2015 15:06:50 Lairs can spawn from a list of monsters.
* Sun, 28 Jun 2015 14:11:49 Some balancing. Fixed bubbles dissapearing every cycle.
* Mon, 29 Jun 2015 18:03:51 Working on skeletoning out the actual trade action
* Tue, 30 Jun 2015 19:51:31 Got basic trading of items when trade button is hit
* Wed, 1 Jul 2015 20:10:02 Jshint appeasement
* Thu, 2 Jul 2015 19:12:32 Items in trades are properly claimed/unclaimed
* Thu, 2 Jul 2015 19:20:36 Add build bubble to working citizens
* Thu, 2 Jul 2015 19:25:35 Citizens regain 25% health after sleeping
* Thu, 2 Jul 2015 19:40:10 Zombies now wander much farther than their spawn zone
* Fri, 3 Jul 2015 12:56:11 After a day, trader leaves town
* Fri, 3 Jul 2015 13:46:13 Added notifications panel to right side of screen.
* Fri, 3 Jul 2015 14:31:29 Trades can now be completed using gold
* Fri, 3 Jul 2015 14:43:00 Add town gold count to resource display at bottom of screen
* Fri, 3 Jul 2015 14:59:18 Added iron and copper sword to game
* Fri, 3 Jul 2015 16:45:41 Traders arrive on a weekly basis by default
* Fri, 3 Jul 2015 16:57:51 Fixed exact even gold trades not working
* Fri, 3 Jul 2015 17:11:43 Balance the market stall a little bit more
* Fri, 3 Jul 2015 17:17:57 Get rid of trader's items whne he leaves
* Fri, 3 Jul 2015 17:31:41 Improved the professions checkboxes
* Fri, 3 Jul 2015 17:49:56 Added trade all buttons to trade screen
* Sat, 4 Jul 2015 15:03:44 Spawn trader on the edge of the map
* Sat, 4 Jul 2015 15:58:55 Added a hide cursor class
* Sun, 5 Jul 2015 13:13:05 Fixed items not being removed properly when trade
* Sun, 5 Jul 2015 13:33:55 Citizens can start with multiple professions.
* Sun, 5 Jul 2015 14:07:29 Added a janked up adventurer agent to game
* Sun, 5 Jul 2015 14:19:50 Adventurer has monster-hunter behavior and kills monsters
* Sun, 5 Jul 2015 16:11:43 Citizens now enter taverns as a part of their idle tasks
* Sun, 5 Jul 2015 16:13:22 Made sure citizens are actually removed from occupants list
* Mon, 6 Jul 2015 20:26:07 Citizens properly wait in the tavern when idle
* Mon, 6 Jul 2015 20:40:43 Further generalized some of the behaviors for agents
* Mon, 6 Jul 2015 20:46:19 25% of wolves are aggressive
* Tue, 7 Jul 2015 19:40:09 Food is now determined by the properties list of items
* Wed, 8 Jul 2015 17:02:28 Taverns can now store items as well
* Thu, 9 Jul 2015 07:26:12 Commented some methods in the trader service
* Fri, 10 Jul 2015 19:17:55 Comments minor fixes
* Sat, 11 Jul 2015 14:00:28 Add adventurer sprites
* Sat, 11 Jul 2015 14:51:17 Agents following other agents are more intelligent
* Sat, 11 Jul 2015 15:31:53 Things are properly stored in buildings (again?)
* Sun, 12 Jul 2015 13:35:01 Traded items are properly removed from storage
* Sun, 12 Jul 2015 14:20:28 Storage can now be restricted to types of items
* Mon, 13 Jul 2015 06:06:12 Commented new storage method
* Tue, 14 Jul 2015 07:43:12 Added a destroy method for buildings
* Wed, 15 Jul 2015 21:01:42 Commented some building methods
* Thu, 16 Jul 2015 23:39:08 Adding a building.damage method
* Fri, 17 Jul 2015 06:31:12 Added new inn sprite and adventurer corpse sprite
* Sat, 18 Jul 2015 14:27:03 Added music to game and options menu with volume controls
* Sat, 18 Jul 2015 14:30:49 Escape/options menus can be closed by hitting escape
* Sat, 18 Jul 2015 14:39:52 Fixed bug where items not stored were being unstored
* Sun, 19 Jul 2015 12:55:03 Immigrants arrive based on fixed conditions now
* Sun, 19 Jul 2015 13:14:42 Fixed resources not clustering properly
* Sun, 19 Jul 2015 13:48:07 Fixed bushes not growing back properly.
* Sun, 19 Jul 2015 13:53:08 Fixed clearing all notifications not actually working
* Sun, 19 Jul 2015 14:12:17 Types of lairs spawned on map determined by seed
* Sun, 19 Jul 2015 14:35:28 Goods menu only lists items that can be crafted
* Sun, 19 Jul 2015 15:21:51 Working on fixing crafting tasks.
* Mon, 20 Jul 2015 21:10:43 Made craft tasks better able to find the appropriate building
* Tue, 21 Jul 2015 19:35:35 Items are spawned by craft task again.
* Wed, 22 Jul 2015 21:12:29 CraftTask ready state is determined on initialization
* Thu, 23 Jul 2015 17:07:02 Make sure craft tasks are marked as not ready if building doesn't exist
* Thu, 23 Jul 2015 17:23:26 CraftTask only ready if ALL the required resources exist
* Fri, 24 Jul 2015 23:12:25 Wrote music player that can play multiple tracks after one another
* Fri, 24 Jul 2015 23:17:41 Make sure the player loops end to end
* Sat, 25 Jul 2015 14:49:04 Craft tasks can become ready after resources appear
* Sun, 26 Jul 2015 15:51:20 Changed immigrant requirements
* Sun, 26 Jul 2015 17:32:37 If a targetted agent is in a building, the building is attacked
* Mon, 27 Jul 2015 14:31:12 Buildings actually use the floor sprite properly
* Tue, 28 Jul 2015 16:27:02 Citizens can now eat food that is marked to be stored.
* Wed, 29 Jul 2015 15:27:27 Commented some methods
* Thu, 30 Jul 2015 20:18:58 Jshint appeasement
* Fri, 31 Jul 2015 23:36:10 Fixed keybindings for citizens/agents lists.