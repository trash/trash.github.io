---
layout: post
title:  "Useful Git Stats Part 2"
date:   2015-02-08 14:00:00
categories: code
---

So [last time]({{ site.baseurl }}/code/useful-git-stats/) I posted about a way to find out how much code you've written since a given period of time. That ends up printing something like:

```21 files changed, 403 insertions(+), 92 deletions(-)```.

But today I was writing up a blog post recapping development over a long period of time and wanted to figure out how many commits I had pushed since my last post. Now I could have done this by counting through 8 pages of commits on github or scroll through the output of `git log` but I figured there'd be a better way.

After a quick search I found the command `git shortlog` which prints out a list of the all the contributors for the current repo with a list of their commits. Combine this with the `--since` flag which parses date strings like "2014-09-22T00:00:00-00:00" as well as human readable strings like "one week", and you have a pretty awesome way to see how many commits you've pushed to a repo in a given period of time.

So to get the number of commits I pushed in the last week I'd do:

```$ git shortlog --since="last week"```

Which for my game repo outputted:

<img class="not-even-baked"  src="{{ site.baseurl }}/images/useful-git-stats-2-1.png"> 

You can shorten this even more by passing the -s flag if you just care about the number and don't need the list of commits outputted afterwards. I.e. `git shortlog -s --since="last week"` which would then just output: ```17 Stefan Valentin```