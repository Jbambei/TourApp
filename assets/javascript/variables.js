//rides are named as-is from their paper shorthand, rather than full official names except for Prince Charming Carousel to distingush it from carousel of progress
//height is in inches
//updated 

var AdventurelandArr = [
    {
        name: "Pirates",
        height: "any",
        thrill: false
    },
    {
        name: "JungleCruise",
        height: "any",
        thrill: false
    },
    {
        name: "Aladdin",
        height: "any",
        thrill: false
    },
    {
        name: "Treehouse",
        height: "any",
        thrill: false
    },
    {
        name: "Tiki Hut",
        height: "any",
        thrill: false
    }
]

var frontierlandArr = [
        {
            name: "Splash Mountain",
            height: 40,
            thrill: true
        },
        {
            name: "Thunder Mountain",
            height: 40,
            thrill: true
        },
        {
            name: "Tom Sawyer", 
            height: "any",
            thrill: false
        },
        {
            name: "Country Bears",
            height: "any",
            thrill: false
        }
]

var LibertylandArr = [
    {
        name: "Haunted Mansion",
        height: "any",
        thrill: false
    },
    {
        name: "Hall of Presidents",
        height: "any",
        thrill: false
    }
]

var FantasylandArr = [
    {
        name: "Seven Dwarves",
        height: 38,
        thrill: true
    },
    {
        name: "Pan",
        height: "any",
        thrill: false
    },
    {
        name: "Pooh",
        height: "any",
        thrill: false
    },
    {
        name: "Small World",
        height: "any",
        thrill: false
    },
    {
        name: "Barnstormer",
        height: "any",
        thrill: false
    },
    {
        name: "Dumbo",
        height: "any",
        thrill: false
    },
    {
        name: "Tea Cups",
        height: "any",
        thrill: false
    },
    {
        name: "Mermaid",
        height: "any",
        thrill: false
    },
    {
        name: "Prince Charming Carousel",
        height: "any",
        thrill: false
    }
]
var TomorrowlandArr = [
    {
        name: "Space Mountain",
        height: "44",
        thrill: true
    },
    {
        name: "Buzz",
        height: "any",
        thrill: false
    },
    {
        name: "Astro Orbiter",
        height: "any",
        thrill: false
    },
    {
        name: "Peoplemover",
        height: "any",
        thrill: false
    },
    {
        name: "Carousel of Progress",
        height: "any",
        thrill: false
    }
]


// to modify arrays: 
/* 
AdventurelandArr.splice(0, 2) //syntax is starting at position 0, remove two elements 
console.log(AdventurelandArr)

 returns: 
Array(3)
0: {name: "Aladdin", height: "any", thrill: false}
1: {name: "Treehouse", height: "any", thrill: false}
2: {name: "Tiki Hut", height: "any", thrill: false}
length: 3

To remove the thrill or height rides, a if statement should be made.
*/





/* working if statement for no-thrill riders 

if profileThrill (get from firebase) = false {
     frontierlandArr.splice(0,2)
     fantasylandArr.splice(0,1)
     TomorrowlandArr.splice(0,1)
}
*/

/* Working if statements for height restrictions


 if (minHeight < 38) {
    frontierlandArr.splice(0,2)
    fantasylandArr.splice(0,1)
    TomorrowlandArr.splice(0,1)
} else if (minHeight < 40) {
    TomorrowlandArr.splice(0,1)
    frontierlandArr.splice(0,2)
} else if (minheight < 44) {
    TomorrowlandArr.splice(0,1)
} else {
    console.log("no restrictions :)")
}
*/
if (FantasylandArr.length = 4) {
    console.log("this won't push without this code")
}