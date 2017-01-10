---
layout: post
title:  "Changelog from February 9th 2015 to May 9th 2015"
date:   2015-05-10 12:00:00
categories: changelog
comments: true
image:
  feature: month-in-development.png
---

### Der Changelog

3 months of work or 249 changes. Reverse chronological order this time. Enjoy.


* Fri, 8 May 2015 22:30:17 Wrote initial code to implement sub containers for rendering
* Fri, 8 May 2015 18:52:54 Added sprite events (click/hover) again
* Fri, 8 May 2015 18:35:47 Got minimap view working again.
* Thu, 7 May 2015 19:27:55 Properly handling sprites being removed from rows in destroy
* Wed, 6 May 2015 20:55:11 Fixed sprites not being rendered properly after zoom
* Wed, 6 May 2015 20:27:21 Wrote basic tests for map code
* Wed, 6 May 2015 20:12:06 Wrote test for move action sequence
* Wed, 6 May 2015 19:38:13 Renderer is separate from game loop.
* Wed, 6 May 2015 19:13:16 Sprites for agents now change rows properly
* Wed, 6 May 2015 17:12:50 Now using synchronous A* search. Seems to have fixed pathfinding.
* Tue, 5 May 2015 22:50:53 Wrote test to make sure MoveAction works.
* Tue, 5 May 2015 22:36:23 TestLevel now creates its own agents.
* Tue, 5 May 2015 22:07:54 Started work on skeletoning out a TestLevel class
* Tue, 5 May 2015 21:05:57 Trying to get the gameManager testable
* Tue, 5 May 2015 20:35:56 Added another test to action sequence code
* Tue, 5 May 2015 20:06:50 Fixed gulp test task. Added test for ActionSequence
* Tue, 5 May 2015 19:29:41 Moved *everything* around.
* Tue, 5 May 2015 13:21:09 Stubbed out needed test. ADded watch test task for gulp.
* Tue, 5 May 2015 13:08:56 Added a bunch of tests to the tilemap code
* Mon, 4 May 2015 12:33:56 Started writing some basic tests around the tilemap code
* Sun, 3 May 2015 17:13:51 Trying to fix agents not moving/animating
* Sun, 3 May 2015 15:47:10 Got game being rendered very basically (doesn't update)
* Sun, 3 May 2015 01:55:43 Got game almost kind of starting
* Sat, 2 May 2015 20:39:51 Little cleanup of the tilemap code
* Sat, 2 May 2015 20:34:47 Got example working of deer switching rows.
* Sat, 2 May 2015 19:11:09 More work to create tilemaps
* Sat, 2 May 2015 18:30:35 Starting to rip apart phaser and implement own state manager
* Sat, 2 May 2015 17:58:25 Got zoom in and zoom out working with camera
* Sat, 2 May 2015 17:36:56 Added bounds for camera
* Sat, 2 May 2015 17:23:11 Got basic 'camera' movement
* Sat, 2 May 2015 15:39:39 Made background of map grass. Added a bunch of trees
* Sat, 2 May 2015 15:25:55 Added many more deer to test page.
* Sat, 2 May 2015 13:27:01 Got deer rendered between trees properly.
* Sat, 2 May 2015 12:31:21 Made tilemap example a little bit more interesting
* Sat, 2 May 2015 12:10:03 Cleaned up sprites. Made sprite watch task.
* Fri, 1 May 2015 21:23:58 Removed file names from sprite names in sheets
* Fri, 1 May 2015 21:18:47 Started using TexturePacker to pack sprites
* Thu, 30 Apr 2015 20:29:21 Got working example of spritesheet loaded
* Thu, 30 Apr 2015 19:54:12 Made tasks for gulp more efficient. Got loader example for pixi
* Thu, 30 Apr 2015 18:55:35 Cleaning some code up before we go deep in pixi land
* Thu, 30 Apr 2015 15:52:59 Pulled pixi code into the repo. Got pixi pixel perfect.
* Thu, 30 Apr 2015 11:46:55 ADded a basic pixi example to the app at /pixi
* Wed, 29 Apr 2015 17:58:17 Selecting an agent centers the camera on them
* Wed, 29 Apr 2015 17:43:01 Unique ids are strings now so they're always truthy
* Wed, 29 Apr 2015 17:37:37 Fixed some styling with citizen card
* Wed, 29 Apr 2015 13:21:06 Cleaned up styling for buttons a bit.
* Wed, 29 Apr 2015 12:57:48 Merged the victory screen with the town overview screen
* Tue, 28 Apr 2015 14:41:38 Fixed citizen panel no longer showing up
* Tue, 28 Apr 2015 14:37:53 Made the rest of the other windows fixed
* Tue, 28 Apr 2015 13:54:01 Made the citizens/agents list window fixed on the left side of the screen
* Tue, 28 Apr 2015 13:38:42 Unified the way agents are selected.
* Mon, 27 Apr 2015 14:26:55 Made the citizen card its own window.
* Sun, 26 Apr 2015 18:49:28 Added onclick for clicking the icon in the info box
* Sun, 26 Apr 2015 18:40:56 Fixed locking of selector for agents
* Sat, 25 Apr 2015 16:49:54 Optimized the minimap by rewriting it by hand
* Sat, 25 Apr 2015 15:54:44 Fixed bug if clicking same agent twice
* Sat, 25 Apr 2015 15:40:36 Changed the way selecting the agents sprites works.
* Sat, 25 Apr 2015 14:56:49 Hovering over agents now changes the cursor
* Fri, 24 Apr 2015 21:19:27 It's not that laggy
* Fri, 24 Apr 2015 21:12:17 Restyled hover tile. Tried to implement tile marker but too laggy
* Thu, 23 Apr 2015 19:22:46 Female citizens have proper preview sprite returned by method.
* Thu, 23 Apr 2015 19:18:47 Improved styling of info panel even more. Added icon
* Wed, 22 Apr 2015 19:59:02 Changed to a different font in game. Cleaned up background.
* Wed, 22 Apr 2015 19:41:33 Updated some sprites. Added background to menu screen
* Tue, 21 Apr 2015 19:18:51 Working on fleshing out the hover tooltips a bit more
* Tue, 21 Apr 2015 19:06:01 Worked on adding shadows to resources. Looked bad
* Tue, 21 Apr 2015 18:31:57 Made tooltips use the new info box pane
* Mon, 20 Apr 2015 19:00:27 Normalized styling of top bar
* Sun, 19 Apr 2015 17:02:59 Redesigned a bunch of the ui
* Sun, 19 Apr 2015 14:25:24 Lose screen has button to go to main menu
* Sat, 18 Apr 2015 16:25:31 Commented new onTurn method. Fixed jshint in island.js
* Sat, 18 Apr 2015 16:22:28 When agents are attacked they blink red for 1 second.
* Sat, 18 Apr 2015 15:08:03 Make the minimap update less
* Fri, 17 Apr 2015 22:27:18 Stopped the game from being scaled up
* Fri, 17 Apr 2015 21:31:06 Added meat to the resource list. this needs to be refactored
* Fri, 17 Apr 2015 21:21:30 Minimap now shows the current view window
* Fri, 17 Apr 2015 20:30:28 Made the minimap fixed in corner. Properly scaled and sized too.
* Fri, 17 Apr 2015 18:24:47 Reduced oversupply of wood a bit
* Fri, 17 Apr 2015 18:08:23 Animals now must be butchered before they drop resources
* Fri, 17 Apr 2015 15:05:59 Fixed event emitter memory leak in citizens list
* Fri, 17 Apr 2015 14:59:49 Fixed map.getRandomTile going out of bounds of map
* Fri, 17 Apr 2015 14:42:27 Fixed clear tiles not working as expected on map
* Thu, 16 Apr 2015 16:54:34 Added a looping clouds sound to game
* Thu, 16 Apr 2015 16:18:05 Make sure classes that extend Item pass options correctly
* Wed, 15 Apr 2015 14:08:03 Working on getting things to spawn correctly
* Tue, 14 Apr 2015 21:33:02 Added basic loss screen
* Tue, 14 Apr 2015 21:14:26 Added check to see if game is lost in gamemanager code
* Mon, 13 Apr 2015 17:36:06 Got basic destruction of game working. Might have some bugs
* Sun, 12 Apr 2015 17:20:36 Made clearing tiles an option for the level
* Sun, 12 Apr 2015 16:45:44 Allow optionally starting with starter supplies not in crates
* Sun, 12 Apr 2015 16:42:51 Refactored the starter supplies so they're data driven.
* Sun, 12 Apr 2015 16:25:54 Spruced up the tutorial select screen a little bit
* Sun, 12 Apr 2015 15:51:48 Integrated shroomarts new resource sprites.
* Sun, 12 Apr 2015 15:27:17 Integrated new shroomarts agent sprites.
* Sun, 12 Apr 2015 14:18:28 Pulled in new shroomarts building assets
* Sun, 12 Apr 2015 13:49:16 Started working on data driven levels instead of hard coded stuf
* Sun, 12 Apr 2015 13:17:25 Items that are stored in crates are properly hidden
* Sun, 12 Apr 2015 12:29:36 Cleaned up styling of buildings list a little bit
* Sat, 11 Apr 2015 20:29:54 Added a way to predefine stats definitions
* Sat, 11 Apr 2015 20:11:27 Created a very basic victory screen
* Sat, 11 Apr 2015 19:57:57 Pulled out action buttons into submenu
* Sat, 11 Apr 2015 19:40:00 No really fixed the interval for the agents lists
* Sat, 11 Apr 2015 19:35:08 Fixed bug with new interval code for agents/citizens list
* Sat, 11 Apr 2015 19:30:32 Merged agents list with citizens list.
* Fri, 10 Apr 2015 16:21:58 Added stat for buildings being built
* Thu, 9 Apr 2015 13:18:35 Fixed broken hunter task. Hunting animals now increments a stat
* Wed, 8 Apr 2015 21:47:50 ADded a very basic stats screen
* Wed, 8 Apr 2015 21:31:54 Created a basic stats service to keep track of stats in game
* Wed, 8 Apr 2015 21:03:05 Added empty tutorial levels screen
* Wed, 8 Apr 2015 17:04:36 ADded dirt tiles to the forest spritesheet
* Tue, 7 Apr 2015 14:28:50 Drag select now displays the dimension of area selected
* Mon, 6 Apr 2015 11:46:22 Added progress bar to load screen
* Mon, 6 Apr 2015 11:39:17 Preload screen actually gives percent loaded
* Sun, 5 Apr 2015 13:26:44 Made the game log even smaller.
* Sun, 5 Apr 2015 13:18:34 Citizen tiles in minimap now have specific color
* Sat, 4 Apr 2015 16:56:20 Minimap only rerenders rows if they change
* Sat, 4 Apr 2015 11:06:08 First step in pulling apart the minimap to make more efficient
* Fri, 3 Apr 2015 18:28:49 Minimap now shows tile occupants. Updates every 250ms when shown
* Thu, 2 Apr 2015 19:25:20 Made the fixed menu at the bottom way smaller
* Thu, 2 Apr 2015 19:16:57 Replaced a bunch of sprites in places with their newer counterparts
* Thu, 2 Apr 2015 18:50:26 Updated creature spritesheets
* Thu, 2 Apr 2015 18:40:09 Imported/implemented new map tiles.
* Thu, 2 Apr 2015 17:58:08 Imported shroom arts item assets. Integrated new wheat
* Thu, 2 Apr 2015 17:36:41 Imported shroomarts farm assets
* Wed, 1 Apr 2015 18:56:49 Fixed minimap so it's not inverted/rotated the wrong way lol
* Tue, 31 Mar 2015 20:12:18 I kind of like the maps with the forests clustered in larger groups
* Tue, 31 Mar 2015 20:09:19 Added a minimap to the game. Very useful for seeing layout of map
* Tue, 31 Mar 2015 12:18:30 Clearing out decoration tiles underneath resources.
* Mon, 30 Mar 2015 10:51:01 Updated phaser and got it working
* Sun, 29 Mar 2015 17:31:16 Trees and bushes are now randomly offset on the map
* Sat, 28 Mar 2015 17:28:27 Wolves now hunt based on the traits of the agents
* Sat, 28 Mar 2015 16:51:46 Added rabbits to game.
* Sat, 28 Mar 2015 16:32:56 Made table inside agent list table be scrollable
* Sat, 28 Mar 2015 16:21:56 Added deer to the game.
* Sat, 28 Mar 2015 16:12:34 Added wolf sprite to game
* Sat, 28 Mar 2015 15:57:24 Fixed centering of 16px sprites for agents
* Sat, 28 Mar 2015 15:52:00 Fixed background not showing up on map
* Sat, 28 Mar 2015 14:53:14 Started integrating shroomarts work.
* Sat, 28 Mar 2015 12:11:40 Loaded in shroomarts assets
* Sat, 28 Mar 2015 11:36:52 Can now go to main menu from escape menu
* Sat, 28 Mar 2015 11:20:22 Added menu when you hit ` key.
* Fri, 27 Mar 2015 13:04:28 Tried implementing a pause screen.
* Fri, 27 Mar 2015 12:38:54 Made states properly hide when switched from
* Thu, 26 Mar 2015 11:39:39 Added map generation to the main menu
* Thu, 26 Mar 2015 10:36:09 Restyled main menu screen
* Wed, 25 Mar 2015 10:37:49 Removed some things
* Wed, 25 Mar 2015 10:28:13 Created a preload state and a main menu state
* Tue, 24 Mar 2015 18:39:16 Pulled out and refactored state.
* Mon, 23 Mar 2015 20:43:01 Fixed reference to agent in agents-service
* Sun, 22 Mar 2015 12:15:33 Wolves only get "credit" for a kill if they were the one who killed them
* Sun, 22 Mar 2015 11:38:48 Fixed bug where wolves would die endlessly
* Sun, 22 Mar 2015 11:30:25 Bunch of fixes. Wolves are now agents.
* Sat, 21 Mar 2015 14:15:19 More progress
* Sat, 21 Mar 2015 12:38:06 Fixed improper handling of defaults for models
* Sat, 21 Mar 2015 12:24:31 Game actually starts. Citizens are invisible?
* Sat, 21 Mar 2015 12:19:17 Making steady progress
* Sat, 21 Mar 2015 11:50:51 Now handling actually merging things like defaults/getters
* Fri, 20 Mar 2015 18:36:21 Integrated getters/setters with delimeter parsing
* Thu, 19 Mar 2015 18:14:14 More conversions to new model
* Wed, 18 Mar 2015 20:56:56 Fixing some calls based on new model get api
* Wed, 18 Mar 2015 20:49:34 Working on converting everything to new model
* Wed, 18 Mar 2015 19:47:40 Wrote a knockoff of backbone.model
* Tue, 17 Mar 2015 17:11:22 Removed duplicate agent create event being emitted
* Mon, 16 Mar 2015 18:55:37 Wolves have their own names and race now
* Sun, 15 Mar 2015 13:58:36 Added rampaging wolves to the games that go around killing slimes
* Sun, 15 Mar 2015 13:03:34 Pulled out, generalized some of the behavior attached to slimes
* Sun, 15 Mar 2015 12:56:02 Hid the debug logs for fleeing
* Sun, 15 Mar 2015 12:41:58 Jshint appeasement
* Sat, 14 Mar 2015 14:06:58 Fleeing checks boundaries of map properly
* Fri, 13 Mar 2015 20:49:23 Wrote flee code for other directions. Half functional.
* Fri, 13 Mar 2015 20:01:40 Fixed destination for fleeing being all borked
* Thu, 12 Mar 2015 19:43:56 Looks like the destinations are being routed to correctly.
* Wed, 11 Mar 2015 18:57:16 Attempting to figure out hwyu fleeing is broked
* Tue, 10 Mar 2015 18:22:07 Working on fleeing action. Doesn't seem to work so great right now
* Mon, 9 Mar 2015 19:29:14 Fixed bug where citizens build buildings from long distance
* Sun, 8 Mar 2015 13:04:14 Pulled out builder action from task file
* Sat, 7 Mar 2015 18:25:29 Goods menu now updates count instead of just sitting
* Fri, 6 Mar 2015 16:24:34 ADded some comments
* Thu, 5 Mar 2015 19:33:11 Added more slime names
* Wed, 4 Mar 2015 18:39:18 Created agents list. Fixed search in citizens/agents lists
* Tue, 3 Mar 2015 17:09:18 Made sure town overview panel is updated properly
* Mon, 2 Mar 2015 19:11:27 Improved perf of getRandomTile by > 100x
* Sun, 1 Mar 2015 18:18:35 Got basic build/working web worker
* Sat, 28 Feb 2015 12:33:26 Unified building constructors. Fixed required resource check for bldgs
* Sat, 28 Feb 2015 12:04:45 Made homes an option. Huts are now homes.
* Sat, 28 Feb 2015 11:50:29 Added hut to the game (not sure if anyone uses them).
* Fri, 27 Feb 2015 20:45:23 Removed a bunch of unused partials
* Fri, 27 Feb 2015 20:44:10 Replaced instances of building.name with building.buildingName
* Fri, 27 Feb 2015 20:41:03 Converted rest of buildings to new Building constructor format.
* Fri, 27 Feb 2015 17:27:37 Fixed building constructor. Converted StorageBuilding to new format
* Thu, 26 Feb 2015 20:20:58 In progress refacotr of building code
* Wed, 25 Feb 2015 19:30:39 Refactored the way data is bound to buildings. Jshint appeasement
* Wed, 25 Feb 2015 18:42:36 Hid unneeded columns in goods menu for items
* Tue, 24 Feb 2015 18:44:33 Improved styling of resource display.
* Tue, 24 Feb 2015 18:20:14 When wildlife dies, replacements are spawned.
* Tue, 24 Feb 2015 17:51:41 Made removeCitizen -> removeAgent
* Tue, 24 Feb 2015 17:42:39 Made gameManager have a list of agents and list of citizens
* Mon, 23 Feb 2015 18:24:10 Created a basic wildlife service to spawn a bunch of wildlife
* Sun, 22 Feb 2015 12:32:18 Added actual meat for slimes to drop when they die
* Sat, 21 Feb 2015 18:45:46 Corpses now use proper sprites based on what died
* Sat, 21 Feb 2015 13:26:38 Moved some ui stuff around to not block to pof screen so much
* Sat, 21 Feb 2015 12:53:51 Game is actually scaled up to full browser window
* Sat, 21 Feb 2015 12:14:32 Fixed in game bounds of camera
* Sat, 21 Feb 2015 11:47:24 Integrated progress bar into react/citizen-card
* Sat, 21 Feb 2015 11:35:11 Fixed a whole bunch of stuff in the citizens card
* Sat, 21 Feb 2015 10:30:10 Finished converting building tooltips to react
* Fri, 20 Feb 2015 17:53:43 Created tooltip and tooltip-trigger react components.
* Thu, 19 Feb 2015 21:27:38 Citizens list now ghetto updates on an interval
* Thu, 19 Feb 2015 21:20:59 Fixed precision of citizen happiness
* Thu, 19 Feb 2015 21:10:01 Improved search in citizens list.
* Thu, 19 Feb 2015 20:50:01 Gulp file now uses watchify to speed up compiling by 1000x
* Wed, 18 Feb 2015 18:32:45 Made sure resource display is initialized properly
* Tue, 17 Feb 2015 19:03:30 Fixed town-overview having broken wealth count. Not sure how
* Mon, 16 Feb 2015 15:41:55 Fixed buildings list not bootstrapping properly
* Mon, 16 Feb 2015 15:31:47 Fixed a couple bugs
* Mon, 16 Feb 2015 15:27:29 Goodbye angular. Hello React
* Mon, 16 Feb 2015 14:47:51 Reactified town overview panel
* Mon, 16 Feb 2015 11:58:15 Reactified notifications menu. Fixed notifications button
* Mon, 16 Feb 2015 11:39:17 Reactified item card. Prolly broken but cannot test
* Sun, 15 Feb 2015 20:14:25 Reactified building-card
* Sun, 15 Feb 2015 19:59:56 Reactified and integrated citizen card into react component
* Sun, 15 Feb 2015 19:15:05 Reactified citizens-list
* Sun, 15 Feb 2015 18:33:29 Minor cleanup
* Sun, 15 Feb 2015 18:17:48 Fixed disabled styling for building list items
* Sun, 15 Feb 2015 18:11:15 Somehow reactified the buildings list
* Sun, 15 Feb 2015 11:34:17 Pulled out fixed-menu component
* Sun, 15 Feb 2015 11:23:41 Reactified notifications-button
* Sun, 15 Feb 2015 11:06:53 Reactified goods-menu-button
* Sun, 15 Feb 2015 11:02:47 Reactified place-farm-button
* Sun, 15 Feb 2015 10:30:17 Reactified stockpile button
* Sun, 15 Feb 2015 09:45:55 Pulled out good component for goods in goods menu
* Sat, 14 Feb 2015 20:27:03 Reactified goods menu
* Sat, 14 Feb 2015 16:26:52 Reactified toggle-ui-window
* Sat, 14 Feb 2015 15:54:39 Reactified hunter button
* Sat, 14 Feb 2015 12:43:08 Reactified the harvest-wood button
* Sat, 14 Feb 2015 12:18:49 Reactified buildings-list-button directive
* Fri, 13 Feb 2015 21:05:29 Reactified gameLog directive. No idea if it works. Prolly does.
* Fri, 13 Feb 2015 20:58:03 Consolidated top bar components into one TopBar component
* Fri, 13 Feb 2015 20:52:42 Replaced clock with react component
* Fri, 13 Feb 2015 20:47:09 Replaced speed up slowdown directives with react topbar component
* Fri, 13 Feb 2015 19:42:27 Reactified the play-pause button
* Thu, 12 Feb 2015 21:02:21 Wrote first React component for game ui
* Wed, 11 Feb 2015 20:03:11 Slimes now drop wheat when they die (lol)
* Tue, 10 Feb 2015 20:05:42 Added button to select monsters for hunting.
* Tue, 10 Feb 2015 19:19:28 Simplifed citizen options
* Tue, 10 Feb 2015 18:28:52 Refactored names service so slimes can have names too
* Mon, 9 Feb 2015 20:37:52 Added comment to new slime code block
* Mon, 9 Feb 2015 18:36:39 Created a basic hunter profession that causes hunter to hunt target
* Sun, 8 Feb 2015 21:08:59 Fixed some minor bugs
