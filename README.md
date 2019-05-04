# TourApp
Creates an optimized daily schedule for a Magic Kingdom park aimed at novice users while also allowing experieced users to customize their schedule. 


#Presentation

Corey:
problem: I am a tour guide for disney. I know my way around the parks extremely well as a result, but obviously not everyone does. Anyone who has spent even a little time in one of Disney's many parks knows that it can be kind of daunting to decide where to go, let alone the entirely different level of when to go to have the shortest lines, how to go through the park to get on the most rides or which rides are the best and should be prioritized.  This leads to most people not getting the most magic out of their day at Disney. But there is now a better way to get the most magical experience possible.

solution (how): Our app takes your input on your favorite rides, fastpasses, ride preferences, and height/physical restrictions (handicap/pregnant) and turns it into a full, customized schedule for you and your group that makes for a much more magical time in the park. 

Steps: We used firebase, firebase authentication, toursAPI (and a proxy to use it), weatherAPI, materialize, dynamically creating schedule w/ JQuery

	Firebase is used to store all the things we need for the program because it needs to carry over from multiple sessions. We used firebase authentication so that google handles passwords/encryption and that is one less thing we have to host ourselves.

	We use ToursAPI to get data like what the average wait time is, if there are physical restrictions, etc. 

	Proxy: Corey (1m)

	Weather Api to pull weather and display icon (hour by hour)

	materialize for style/format

	dynamically create schedule with Jquery 


Walkthrough (1m, can stretch if necessary)



2.0: 
multiple profiles
custom weather icons
instructions page on how to use it/customize
animation screen on opening if not signed in for a magical feeling
Ability to select rides specifically to not put them on
change modals to different pages (better UX)
ability to login w/ facebook, google etc
custom branding
More work on styling/animations "magic" feel
