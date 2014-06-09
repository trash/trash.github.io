---
layout: post
title:  "Useful Git Stats"
date:   2014-06-08 21:28:00
categories: code updates
---

So today I finished another weekend of coding on the game and was wondering "Well, how much did I really commit?"

Sometimes it can be hard to gauge how much work you've done. A large refactor may add no lines of code but may prove invaluable in future endeavors on the codebase. Well, this post isn't about me trying to figure out or argue the best metric for gauging "progress" on a codebase so much as me mentioning a neat ```git``` command I found to give a quick glance of your recent progress.

<code class="block">$ git diff --stat</code>

So let's say your last commit hash before the weekend was on Thursday (I call Friday part of the weekend) and it's ```923d2417e170```. You'd do:

<code class="block">$ git diff --stat 923d2417e170</code>

My output was ```21 files changed, 403 insertions(+), 92 deletions(-)```. Not bad considering I spent most of Sunday getting this blog up and running.

Now if someone could just write a script that takes a date, like ```git diff --stat 2014-06-05```. Now, take it a step further and introduce a cool natural language processing library like [Chrono][chrono-site] so you can have a command like ```git diff --stat last monday```.

Well, I probably shouldn't get too carried away if I want to finish this game in my lifetime.

[chrono-site]: http://wanasit.github.io/pages/chrono/