//rides are named as-is from their paper shorthand, rather than full official names except for Prince Charming Carousel to distingush it from carousel of progress
//height is in inches
//updated 




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


