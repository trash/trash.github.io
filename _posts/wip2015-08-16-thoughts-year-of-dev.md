---
layout: post
title:  "Thoughts On A Year+ Of Game Development"
date:   2015-08-16 21:28:00
categories: development
---

A couple of months ago I did a [informal AMA thing](https://www.reddit.com/r/gamedev/comments/37i77h/ive_been_writing_mostly_game_code_for_365_days/) on the /r/gamedev subreddit

A bit over a year ago I started working on [Ripple](khalilravanna.github.io/) every day. I've made a lot of progress in that time (that'd be hilariously depressing if I hadn't) and learned several things along the way. Since I already have a series of blog posts talking about my progress on the game itself I thought it'd be a good idea to sit down and have a retrospective of sorts and take inventory on some of those lessons I've learned.

### Games Take A Really Long Time To Develop

Ok, maybe this isn't something I learned. I always knew that a lot of games take a long time to develop. And it's not as if I thought that I was going to be the one exception of the rule. And as a developer, I already know that any time estimate I try to give one a feature should be blown up by at least 2x-10x before it's a reasonable estimate. So what am I trying to say? Well, I figured off hand that this game would take me probably 2 years to develop. According to Github I've been at it every day for 445 days or a bit less than a year and 3 months. Do I think I'm going to be done in 9 months? Hells no. Do I think I'll have something playable? Yes. I mean it is playable. Playable and fun? Hah. Ah, you're serious? Maybe.

I think the real lesson here is that games take a LOT of time. Not just on the calendar, because that's a very hard measurement to comprehend. "It'll take a year? That's not so bad." What doesn't translate at first though is that it's a year of all your free time being consumed. One year of always seeming impossibly far away from what you really want, what you really envisioned.

### We've Come A Long Way

But that's the important thing to remember: while the finish line may seem very far, it's important to always try and keep track of how far you've come. Whether it be keeping track of the days since you've started work (okay), the lines of code you've written (eh), the features you've completed (much better), or the stories you can tell (even better)-- it's important to not lose sight of you're progress on that big calendar or progress bar to 1.0.

My blog posts have really helped me keep track of how far I've come and the headspace I was in when working on certain features. It's hilarious to me to look at the original prototype of the game that was legitimately rendered on the DOM using colored squares. And to see how much trouble I originally had to trying to render things properly without destroying the FPS of the browser.

### Habits Are Powerful

So how did I get to over a year of developing straight? Great question. I wish I could say there's an easy tool out there that you can use that makes you a productive developing machine but that's just not the case. At the core I think it's all about just developing a habit around consistent output. 

### Tools I Used

##### git & Github

git is wonderful. It really is. There's a million different reasons why git is great so I won't go into too much detail here but I'll just list some of the reasons I've found it as a great tool for development and productivity:

* It breaks all your progress into logical steps and improvements.
* You can [get a quick rundown of all you've completed in a window of time](http://khalilravanna.github.io/code/useful-git-stats-2/) with basically no effort.
* Using it with github you can get a [neat "streak" tracker](https://i.imgur.com/VdddoLS.png) that shows you how long you've been working every day in a row.

##### Toggl

[Toggl](https://toggl.com/) is one of a million time tracking tools out there. I used it for a period of about 2 months to keep track of *just* how much time I was putting into development. It was useful in that I got some real data behind how much time I was putting in per week (~14 hours/week). The reason I chose Toggl was because the data being gathered was voluntarily submitted by yours truly. This turned out to be both a blessing and a curse. A blessing because unlike other tools out there it wasn't automatically sending all my computer usage data to some server. And a curse because I had to manually enter all the information myself which was a bit of an inconvenience (especially when I started continually forget to start the timer when I started working and had to guestimate when I started working).

My main reason to track my time wasn't to make sure I was doing the right amount of work but to just get some insight into how much I was already spending on the project. For this it was really useful. My only secondary thought here is that it's probably important to not focus on how much time you're putting into a project unless you have a deadline. If I wasn't feeling working then I wouldn't work. I think that's an important thing to avoid full on burnout, and I think a time tracking tool might be at odds with this mindset.

##### Trello

[Trello](trello.com) is another tool that probably requires no introduction for many developers. It's basically a big board for keeping track of tasks to do in the future. It's used among a lot of development teams for coordinating what a team is working on. I personally use it for planning out my current development "sprints" as well as keeping track of the work I've completed recently. It's really nice to drag a task from the "Current Sprint" list to the "Done" list.

In the future I might even make it public when I have some people playing the game so they can participate in voting on new features and keep track of my progress on various features in the game. Transparency ftw!

##### Evernote

[Evernote](evernote.com) the last of tools that need no real introduction. While Trello I use to plan out the things that I'm currently working on the near future, Evernote serves as my tool of choice for planning out big features that require more writing, planning, and research. Trello is my checklist in my notebook, my planner for the week, and Evernote is my big notebook full of drawings and stories and research.

### Thoughts On Productivity

* Habits are really powerful.
* If you work on something every day and never stop, it will get done eventually.
* You learn a lot in a year.
* Every day will be the day you should have started yesterday, so start today.
* If you get burned out or sick of what you're working on and are losing faith in the vision, take a step back and look at what you've gotten done in the last week, look at what you've done in the past 3 months. This never ceases to readjust my head and bring me back the reality of how I'm working on something that's much larger than what I can get done in one 4 hour session.
* Speaking of burn out, the development process is full of ups and downs. You'll never always be working at full productivity on features you love, sometimes you have to slog through some features that will take a long time to complete and you'll feel like you're getting nowhere. You just need to keep working because even slow progress adds up over time.
* That being said, if you feel stuck or burned out think of a feature that you WANT to work on. Even if it's not in the current plans, or a part of the current vision, if you think you'll have fun working on it, then DO IT. If working on something fun will keep you working and invested in the project, it's worth spending that time on something that might seem pointless initially. My personal example for this was I was working on trying to balance the economy and trade mechanics in the game to be balanced and fun but was getting nowhere so I decided to work on introducing combat to the game which wasn't slated till way later. I had a ton of a fun switching gears and working on something else and it turned out to be the exact infusion of energy in the process to get me excited about the game again. It also had compound benefits by shining all the existing features in a new light and perspective now that entities could go around killing each other.

Be wary of time sinks. They come in a lot of forms but some big ones that I found are:

* Planning too far in advance. You might find that certain mechanics that seem boring at first turn into the real fun key or hook for your game and larger features that seemed integral turn out to be not feasible to make or not fun to include in the game.



