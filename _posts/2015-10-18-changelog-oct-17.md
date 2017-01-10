---
layout: post
title:  "Changelog from Aug 1st to Oct 13th"
date:   2015-10-18 12:00:00
categories: changelog
comments: true
image:
  feature: month-in-development.png
---

### Der Changelog

111 commits

* Sat, 1 Aug 2015 17:07:36 -0500 Get rid of professions list in citizens list screen
* Mon, 3 Aug 2015 21:01:40 -0500 Stubbed out methods to make monsters drop gold
* Mon, 3 Aug 2015 21:16:00 -0500 Adventurers start with gold and can receive gold
* Tue, 4 Aug 2015 23:04:31 -0500 Adventurers should spawn with a potion item
* Wed, 5 Aug 2015 18:23:27 -0500 Generalized inventories to be used by all agents as a trait
* Wed, 5 Aug 2015 18:37:01 -0500 Refactored the way behaviors for agents is handled
* Wed, 5 Aug 2015 18:55:22 -0500 Added Array.prototype.includes polyfill.
* Wed, 5 Aug 2015 19:09:23 -0500 Added action so an agent can consume a potion in their inventory
* Wed, 5 Aug 2015 19:28:46 -0500 Consuming a potion heals the user.
* Wed, 5 Aug 2015 19:34:05 -0500 AGents can now spawn with multiples of items
* Thu, 6 Aug 2015 21:29:03 -0500 Agents only use potions if they need to
* Fri, 7 Aug 2015 19:50:10 -0500 Fixed logic around agents consuming potions
* Sat, 8 Aug 2015 13:26:29 -0500 Remove bakery and brewery
* Sat, 8 Aug 2015 14:03:15 -0500 Adventurers now attack lairs.
* Sat, 8 Aug 2015 14:16:11 -0500 Buildings now flash when being attacked.
* Sat, 8 Aug 2015 18:26:44 -0500 Aggressive agents attack *all* humans
* Sat, 8 Aug 2015 19:01:12 -0500 Buildings drop items when they are destroyed now
* Sun, 9 Aug 2015 14:55:59 -0500 Potions are properly transfered to lair destroyer
* Sun, 9 Aug 2015 15:01:02 -0500 Agents properly receive gold when destroying buildings
* Sun, 9 Aug 2015 15:18:30 -0500 (Hopefully) fixed follow action breaking when target in building
* Sun, 9 Aug 2015 16:18:06 -0500 Refactored the way gold is dropped by buildings/agents.
* Sun, 9 Aug 2015 16:43:48 -0500 Adventurers can hang out in taverns now
* Sun, 9 Aug 2015 16:58:59 -0500 Lair spawns one more monster when destroyed.
* Mon, 10 Aug 2015 20:50:07 -0500 Fine tune the minimap centering on click
* Tue, 11 Aug 2015 20:10:17 -0500 Fixed minimap click not centering appropriately.
* Tue, 11 Aug 2015 20:18:41 -0500 Clicking on the minimap view also moves the minimap
* Wed, 12 Aug 2015 20:45:06 -0500 Added harvestable mushrooms to the game
* Thu, 13 Aug 2015 20:06:49 -0500 Added potion sprite. Added mushrooms to minimap.
* Fri, 14 Aug 2015 18:41:05 -0500 Added new potion and coin bubbles to game
* Sat, 15 Aug 2015 19:50:10 -0500 Commented some minimap methods
* Mon, 17 Aug 2015 19:13:05 -0500 Minimap works with drag of mouse now too
* Tue, 18 Aug 2015 18:09:03 -0500 Adventurers will now rest in the tavern and heal when damaged
* Wed, 19 Aug 2015 23:29:52 -0500 Adventurers have to pay money to rest at the tavern
* Thu, 20 Aug 2015 20:28:54 -0500 Fixed adventurers inventory items being added to towncount
* Fri, 21 Aug 2015 19:15:57 -0500 Got building card at least responding again
* Sat, 22 Aug 2015 14:49:51 -0500 Agents now have healths bars. They show when attacked.
* Sat, 22 Aug 2015 14:52:46 -0500 fixed broken sprite json file
* Sat, 22 Aug 2015 14:55:37 -0500 Mousing over agents shows their health bar
* Sun, 23 Aug 2015 13:49:11 -0500 Buildings have health bars. Buildings can be repaired when damaged.
* Mon, 24 Aug 2015 20:29:50 -0500 Improved look of building window marginally
* Tue, 25 Aug 2015 18:55:56 -0500 Made building card work better with uiwindow class
* Wed, 26 Aug 2015 18:59:36 -0500 Building card now properly listens to update events for building
* Thu, 27 Aug 2015 19:26:21 -0500 Building card actually updates when building does
* Fri, 28 Aug 2015 18:18:26 -0500 Buildings display amount of occupants and tenants properly
* Sat, 29 Aug 2015 14:01:34 -0500 Commented some methods
* Sun, 30 Aug 2015 16:25:02 -0500 Show the possible storage for a building in the building card
* Mon, 31 Aug 2015 19:50:10 -0500 Added herbalist hut assets and object to game
* Tue, 1 Sep 2015 19:31:00 -0500 Herbalist is now a functioning profession.
* Wed, 2 Sep 2015 19:39:04 -0500 Citizens are now notified when buildings are attacked
* Wed, 2 Sep 2015 19:40:11 -0500 Only notify citizens if it's not a lair when its being attacked
* Thu, 3 Sep 2015 19:54:30 -0500 Created a husk of an admin menu bound to the q key
* Fri, 4 Sep 2015 15:50:10 -0500 Agents taking damage show damage numbers above their heads
* Sat, 5 Sep 2015 15:02:03 -0500 Got basic buttons/service to spawn agents in fixed spot
* Sat, 5 Sep 2015 16:39:52 -0500 Monster spawner in admin interface now spawns on selected tile
* Sun, 6 Sep 2015 18:46:04 -0500 Implemented custom cursors. Not sure how i feel about them
* Mon, 7 Sep 2015 13:18:33 -0500 Tightened up cursors. Changed colors for select box for harvest etc
* Mon, 7 Sep 2015 13:25:53 -0500 Made 3d buttons have hover state change
* Mon, 7 Sep 2015 14:03:56 -0500 Added cursor manager to change cursor globally for hover stuff.
* Mon, 7 Sep 2015 14:21:00 -0500 Fixed focusing on sprites
* Mon, 7 Sep 2015 14:29:36 -0500 Buildings show damage numbers now
* Mon, 7 Sep 2015 14:44:15 -0500 Buildings show health bar on mouseover.
* Mon, 7 Sep 2015 15:02:44 -0500 Updated some assets. Storage/carpenter shop
* Mon, 7 Sep 2015 15:08:31 -0500 Possibly stop agents from spawning in buildings
* Tue, 8 Sep 2015 21:01:06 -0500 Stubbed out building spawning buttons
* Thu, 10 Sep 2015 21:19:55 -0500 Some how janked up got building spawner working
* Fri, 11 Sep 2015 18:30:10 -0500 Added new assets including item shop
* Sat, 12 Sep 2015 11:30:10 -0500 Hitting escape cancels out of spawn services
* Sun, 13 Sep 2015 13:39:33 -0500 Made it so the first click for spawners doesn't spawn immediately.
* Sun, 13 Sep 2015 13:51:15 -0500 Skeletoned out a kill agent service
* Sun, 13 Sep 2015 13:55:42 -0500 Clicking on a tile with an agent with kill service kills the agent.
* Sun, 13 Sep 2015 14:22:40 -0500 Can destroy buildings using the kill agent service and admin menu
* Sun, 13 Sep 2015 15:36:58 -0500 Added admin buttons to harvesting/destroying resources.
* Sun, 13 Sep 2015 15:43:46 -0500 Can now destroy/harvest hills via admin menu
* Sun, 13 Sep 2015 16:25:04 -0500 Skeletoned out resource spawn select service. Fixed some bugs
* Sun, 13 Sep 2015 16:35:44 -0500 Got trees spawning via admin menu
* Sun, 13 Sep 2015 17:09:02 -0500 Can now spawn all resources through admin menu
* Sun, 13 Sep 2015 17:16:39 -0500 Add label for spawn resources buttons in admin menu
* Sun, 13 Sep 2015 17:23:18 -0500 Show harvest cursor when harvesting
* Mon, 14 Sep 2015 17:11:22 -0500 Can now unqueue stuff that's been selected to be harvested
* Tue, 15 Sep 2015 20:12:18 -0500 Added support for multi-key keybindings
* Wed, 16 Sep 2015 17:11:22 -0500 Can now spawn items from the admin menu
* Thu, 17 Sep 2015 18:22:22 -0500 Don't show sprite tooltips if menu is in front of sprite
* Fri, 18 Sep 2015 19:22:22 -0500 When dragging out farm plots it shows you preview of them
* Sat, 19 Sep 2015 18:17:50 -0500 Farm tiles that there are no seeds for are shown as red when placing
* Sun, 20 Sep 2015 19:22:22 -0500 Added method to return building's health percent
* Mon, 21 Sep 2015 19:22:22 -0500 Use gethealthpercent for building tooltip
* Tue, 22 Sep 2015 19:26:09 -0500 Buiildings that are reduced below 50 percent visible changed
* Wed, 23 Sep 2015 19:22:22 -0500 Hotfix for flee actions failing
* Thu, 24 Sep 2015 19:22:22 -0500 Added cancel harvest cursor
* Fri, 25 Sep 2015 19:22:22 -0500 Buildings that are damaged kick out the occupants
* Sat, 26 Sep 2015 19:22:22 -0500 Damaged taverns are no longer entered.
* Sun, 27 Sep 2015 17:53:14 -0500 Added building attack seelct service
* Mon, 28 Sep 2015 19:22:22 -0500 Buildings can now be queued to attack by a single dude.
* Tue, 29 Sep 2015 18:36:59 -0500 Stopped inevitable civil war from occuring when queueing up building
* Wed, 30 Sep 2015 19:22:22 -0500 Multiple citizens can attack buildings.
* Thu, 1 Oct 2015 19:22:22 -0500 Made events triggerable from the admin menu
* Fri, 2 Oct 2015 19:22:22 -0500 Cleaned up/fleshed out rest of event buttons in admin menu
* Sat, 3 Oct 2015 19:22:22 -0500 Fix admin menu not closing when esc hit
* Sun, 4 Oct 2015 17:09:28 -0500 Fixed focusing in on agents when clicked
* Sun, 4 Oct 2015 17:35:31 -0500 Make camera lerp when following agent
* Sun, 4 Oct 2015 17:46:23 -0500 Clicking on a citizen opens the citizen card again
* Mon, 5 Oct 2015 19:22:22 -0500 Skeletoned out functionality for basic thoughts for agents
* Tue, 6 Oct 2015 16:52:31 -0500 Jshint appeasement
* Wed, 7 Oct 2015 17:46:06 -0500 Hooked up thoughts to citizen card.
* Wed, 7 Oct 2015 19:22:22 -0500 Created map of all thoughts.
* Thu, 8 Oct 2015 19:22:22 -0500 Skeletoned out buys-things behavior.
* Fri, 9 Oct 2015 19:22:22 -0500 Basic gathering of relevant data for agent wanting to buy ish
* Sat, 10 Oct 2015 19:22:22 -0500 Added properties to armor/weapons
* Sun, 11 Oct 2015 19:22:22 -0500 Wanted items for agents now fetches based on desired properties
* Mon, 12 Oct 2015 19:22:22 -0500 Agents can now pick an item they want to buy
* Tue, 13 Oct 2015 18:55:39 -0500 Some comments ig uess

