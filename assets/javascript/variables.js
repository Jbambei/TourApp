//rides are named as-is from their paper shorthand, rather than full official names except for Prince Charming Carousel to distingush it from carousel of progress
//height is in inches
//updated 

<<<<<<< HEAD

=======
var adventurelandArr = [
    {
        name: "Pirates",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "JungleCruise",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Aladdin",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Treehouse",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Tiki Hut",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "moveToFrontierland",
        height: "error if shown to user",
        thrill: "error if shown to user"
    }
]

var frontierlandArr = [
        {
            name: "Splash Mountain",
            height: 40,
            thrill: true,
            fastpass: false,
            favorite: false
        },
        {
            name: "Thunder Mountain",
            height: 40,
            thrill: true,
            fastpass: false,
            favorite: false
        },
        {
            name: "Tom Sawyer", 
            height: "any",
            thrill: false,
            fastpass: false,
            favorite: false
        },
        {
            name: "Country Bears",
            height: "any",
            thrill: false,
            fastpass: false,
            favorite: false
        },
        {
            name: "moveToLibertyland",
            height: "error if shown to user",
            thrill: "error if shown to user"
        }
]

var LibertylandArr = [
    {
        name: "Haunted Mansion",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Hall of Presidents",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "moveToFantasyland",
        height: "error if shown to user",
        thrill: "error if shown to user"
    }
]

var FantasylandArr = [
    {
        name: "Seven Dwarves",
        height: 38,
        thrill: true,
        fastpass: false,
        favorite: false
    },
    {
        name: "Pan",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Pooh",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Small World",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Barnstormer",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Dumbo",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Tea Cups",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Mermaid",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Prince Charming Carousel",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "moveToTomorrowland",
        height: "error if shown to user",
        thrill: "error if shown to user"
    }
]
var TomorrowlandArr = [
    {
        name: "Space Mountain",
        height: "44",
        thrill: true,
        fastpass: false,
        favorite: false
    },
    {
        name: "Buzz",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Astro Orbiter",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Peoplemover",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "Carousel of Progress",
        height: "any",
        thrill: false,
        fastpass: false,
        favorite: false
    },
    {
        name: "moveToAdventureland",
        height: "error if shown to user",
        thrill: "error if shown to user"
    }
]
>>>>>>> 88fe27c010998a17707f081ca92437f50ee93887



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


