---
layout: post
title:  "Changelog from Oct 14th to Feb 6th"
date:   2016-02-08 12:00:00
categories: changelog
comments: true
image:
  feature: month-in-development-header.png
---

### Der Changelog

195 commits wowzerz

* 2015-10-14 Init b3 test page
* 2015-10-15 Created b3 waitaction
* 2015-10-16 Got some tree stuff working
* 2015-10-17 Jacked up the b3 page with the pixi test stuff
* 2015-10-18 Reimplemented logic for pixi test using reallll basic behavior tree
* 2015-10-19 Wrote own Composite action that picks random action from list
* 2015-10-20 Finally got stupid composite/whatever b3 working
* 2015-10-21 made a janked up wolf. everythig is laggy now
* 2015-10-22 Tree eats shit with too many agents????
* 2015-10-23 Deer now use b3 behavior trees. real glitchy
* 2015-10-24 Pulling in b3 code manually.
* 2015-10-25 Kind of got the wander action working
* 2015-10-26 Flee action actually flees. SUPER buggy
* 2015-10-27 Fine tuning the flee/wander stuff for deer
* 2015-10-28 Deer now actually move at proper speed again
* 2015-10-29 Random tile function now enforces manhattan distance (no diagonal)
* 2015-10-30 Stubbed out some stuff for b3 action for wolf hunting deer
* 2015-10-31 Name all anon functions in citizen.js
* 2015-11-01 jshint appeasement
* 2015-11-02 More jshint appeasement.
* 2015-11-03 Finished jshint appeasement
* 2015-11-04 Got wolves actually hunting deers properly(ish)
* 2015-11-05 Pulled out b3 actions for hunting into separate files
* 2015-11-06 Added a testLog singleton that can be toggled to reduce log output
* 2015-11-07 Created RandomAction composite.
* 2015-11-08 Commented out tests to get tests running.
* 2015-11-09 Got the Repeater decorator working properly
* 2015-11-10 Rewrote RunFromWolf action to make better use of behavior tree
* 2015-11-11 Broke up run from wolf action into separate files
* 2015-11-12 Rewrote wolf hunting behavior to use behavior tree structs better
* 2015-11-13 Split up hunt prey action into multiple files
* 2015-11-14 Changed all setPosition calls to setTile
* 2015-11-15 Added a getById method to agentsService
* 2015-11-16 Wolf is no longer hungry after killing a deer
* 2015-11-17 Added an agent checks service (might just lump into agentsService)
* 2015-11-18 Refactored gameManager.getRandomAgent to make more sense
* 2015-11-19 Goblins now use behavior tree.
* 2015-11-20 Refactored AgentPrototype.agentWithTraitIsNearby to use existing methods
* 2015-11-21 Adventurer now uses behavior tree.
* 2015-11-22 Adventurer now hunts monsters again
* 2015-11-23 Adventurer now attacks monster lairs again
* 2015-11-24 Update readme image
* 2015-11-25 Adventurers now hunt out gold on the map again
* 2015-11-26 Adventurer hangs out in tavern again
* 2015-11-27 Adventurer now stays in the tavern like he's supposed to
* 2015-11-28 First instance of getting adventurer to sleep in tavern.
* 2015-11-29 Adventurer properly waits for 8 hours and then heals.
* 2015-11-30 Stubbed out BuyItem behavior for adventurer
* 2015-12-01 Goblin uses behavior tree
* 2015-12-02 Made citizens use behavior trees and be murdering idiots
* 2015-12-03 Got first draft of semi-functional sleeping behavior for citizens
* 2015-12-04 Refactored find nearest resource function to have search
* 2015-12-05 Citizens now will go and eat food items
* 2015-12-06 Cleanup
* 2015-12-07 Holy crap citizens do their jobs again. And with so little code.
* 2015-12-08 Add some more unique keys for b3 actions
* 2015-12-09 Optimize getAgentsFromOptions
* 2015-12-10 Added cache to getAgentsFromOptions calls.
* 2015-12-11 Probably fixed some slowdown with item spawn code
* 2015-12-12 jshint appeasement
* 2015-12-13 Pull out adventurer behavior tree into new file
* 2015-12-14 Stubbed out behavior for goblins to start stealing
* 2015-12-15 Items now show whether they're claimed or not.
* 2015-12-16 Added admin menu button to toggle claimed status of items
* 2015-12-17 Clicking objects in the game outputs them to the console
* 2015-12-18 Deer now counter attack wolves (lol)
* 2015-12-19 Everyone else defends themselves too
* 2015-12-20 Added method to search for any game object by id
* 2015-12-21 Items are hidden when stored in buildings/crates again
* 2015-12-22 Only create hauler tasks for claimed items
* 2015-12-23 Show what buildings can store in their building card
* 2015-12-24 Goblins now come to steal food and gold.
* 2015-12-24 Made update methods for agents uniform again
* 2015-12-24 Working on outputting agents current actions via behavior tree
* 2015-12-24 Show behavior tree actions in hover over state for agents
* 2015-12-25 Info box adjusts to the content inside
* 2015-12-25 Use the name/description/title for actions as well
* 2015-12-25 Optimization to change to info box
* 2015-12-25 Stop multiple agent.die calls from erroring
* 2015-12-26 Added basic names for buildings
* 2015-12-27 Huts and houses are no longer named
* 2015-12-27 Added herbalist building names
* 2015-12-27 Created test level to test out really small map
* 2015-12-27 Set min speed for game camera to 10
* 2015-12-27 Made map and monsters more configurable for tests
* 2015-12-27 Made spawning monsters on test levels more configurable
* 2015-12-27 Stop adjacents from moving to targets that they are already at
* 2015-12-27 Fixed some issues with tiles returning empty siblings
* 2015-12-28 Removed some of the boilerplate around test levels
* 2015-12-29 Goblins steal items (!!!)
* 2015-12-30 Separate GetExitTile into its own file
* 2015-12-30 Can now spawn buildings via options for test levels
* 2015-12-30 Can now spawn buildings with items inside
* 2015-12-30 Items spawned in storage are claimed.
* 2015-12-30 Got rid of unecessary CheckWolfAction
* 2015-12-30 Goblins attack buildings if they have nothing else to do
* 2015-12-31 Remove extra checkifdead call
* 2016-01-01 Tried to make gamelog more efficient. failed
* 2016-01-02 Working on improving interface between behavior tree and tasks
* 2016-01-03 Rewrite builder task to use behavior tree
* 2016-01-03 Throttle info box expansion update
* 2016-01-04 Split up builder task actions into separate files
* 2016-01-05 Rewrote harvester task using behavior tree
* 2016-01-06 Pulled out some files, jshint appeasement
* 2016-01-06 Converting over the task code to focus on behavior trees
* 2016-01-06 Converted builder task over to new task code
* 2016-01-06 Fixed issue with GatherResources task causes items to lose their tiles
* 2016-01-06 Build tasks are now properly suspended when resources run out
* 2016-01-06 Added test to test villager hunger.
* 2016-01-06 Got craft task working again.
* 2016-01-06 Craft tasks are suspended and unsuspended properly
* 2016-01-07 Fixed caching of agent search not working
* 2016-01-07 Converted farming task over to behavior tree
* 2016-01-07 Can now start level with a farm already spawned
* 2016-01-07 Improved way crop data is fetched
* 2016-01-07 Fixed farmer task being broken.
* 2016-01-07 jshint appeasement
* 2016-01-08 Added bars for needs of citizens to the citizen panel
* 2016-01-09 Villagers now sleep in their homes again
* 2016-01-09 Separated some task code into separate files
* 2016-01-09 Started working on behavior tree for trader
* 2016-01-09 Fleshed out trader behavior tree a bit more
* 2016-01-10 Added es6, changed a bunch of funcs over to => in agent code
* 2016-01-11 Changed citizen funcs to use =>
* 2016-01-12 Trader now leaves town when he's done again
* 2016-01-12 Cleaned up trader code
* 2016-01-12 STarted working on a mock agent history based on b3
* 2016-01-13 Updated UI with new crappy history
* 2016-01-14 Fleshing out history more.
* 2016-01-15 Fix builder task with descriptions etc
* 2016-01-16 Goods list uses images for requirements
* 2016-01-17 Setup test level for adventurer buying items from shop
* 2016-01-17 Adventurer can now buy things
* 2016-01-17 Fixed inventory check not working
* 2016-01-17 RAndom cleanup. stubbed out spot for adventurer to search for items
* 2016-01-17 Adventurer will now go pick up items they desire if unclaimed
* 2016-01-17 Made info in building card around items contained more expressive
* 2016-01-18 Reduce amount of wildlife. Stop deer from fleeing infinitely
* 2016-01-18 REfactored citizen panel to be used for all agents
* 2016-01-18 Added health stat to agent card
* 2016-01-18 Working on having agents search for items to equip
* 2016-01-18 Citizens now actually hunt out and pick up better gear.
* 2016-01-18 Agents now actually equip items that are better.
* 2016-01-19 Fixed villager hivemind due to shared blackboard
* 2016-01-20 ADded a check to make sure there aren't any more hiveminds
* 2016-01-21 Permanently fixed the whole blackboard hivemind issue
* 2016-01-22 Added another test. Fixed some react warnings
* 2016-01-23 jshint appeasement
* 2016-01-23 Refactor game levels a bit
* 2016-01-24 Made it so wealth events can be triggered
* 2016-01-25 Fixed goblins not properly attacking agents.
* 2016-01-26 Agents exit buildigns when they're destroyed again
* 2016-01-26 Made farm menu like bulding list
* 2016-01-26 Fixed case where farms couldn't be placed with less than seeds count
* 2016-01-26 Farm menu now handles active state properly
* 2016-01-26 Added tooltip for farm items similar to buildings list
* 2016-01-27 villagers now defend each other again
* 2016-01-27 Added explicit text for buttons in fixed menu
* 2016-01-27 Moved list of resources and villagers etc to left side of screen
* 2016-01-27 Improved resources service. Improved resource counts on left
* 2016-01-27 Clean up fixed menu a little bit
* 2016-01-27 Simplified town overview a bit
* 2016-01-28 Made default map bigger. Made minimap scale better
* 2016-01-29 Made camera moved with wasd
* 2016-01-30 Get rid of inane Harvestible class
* 2016-01-30 Switched to eslint
* 2016-01-30 eslint cleanup
* 2016-01-30 Fixed hills not being minable
* 2016-01-31 Balance tweaks
* 2016-01-31 Citizens now have names beneath them
* 2016-01-31 Properly centered names for villagers
* 2016-02-01 Created a SaveGameManager. Started work on serializing items.
* 2016-02-01 Working on more serialization. Improved drops/butcher lists
* 2016-02-01 Little eslint cleanup.
* 2016-02-01 Finished up serializing agents
* 2016-02-02 Got save game manager properly storing and retrieving saves
* 2016-02-02 Store last unique id in local storage to stop collisions
* 2016-02-02 Created load game menu
* 2016-02-02 Saves are now deletable
* 2016-02-02 Saves now have timestamps and are sorted
* 2016-02-02 Got basic agents loading with their names
* 2016-02-02 Got agents being loaded at their proper position
* 2016-02-03 Fix bug with cycle being created on savegame load
* 2016-02-03 Better handling of loading/saving status
* 2016-02-03 Got health and a bunch of other things loading from save properly
* 2016-02-03 Initial serialization of map data
* 2016-02-03 ADd button to load game menu to download save
* 2016-02-04 Rename Map -> GameMap cause es6. Options for map constructor
* 2016-02-05 Basic loading of map data from save
* 2016-02-06 Got resources being laoded from save
* 2016-02-06 Fix bug with citizens getting tasks
* 2016-02-06 Fixed agents not having sprites
* 2016-02-06 Got buildings being loaded
* 2016-02-06 Buildings spawned from admin menu on right tile
* 2016-02-06 Buildings can be loaded with contained items on load game