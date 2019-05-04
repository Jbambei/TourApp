var profileThrill = false;
var profileHeight = 0;

$("#profileSave").on("click", function (event) {
    event.preventDefault();
    firebase.database().ref('profiles/' + uid).on('value', function (snapshot) {
 console.log(snapshot);
        //profileThrill = true if BOTH (the type is either thrill OR no pref)  
        //  AND the physicalRestrict is false
        profileThrill = ((snapshot.val().type === 'thrill' || snapshot.val().type === 'noPref') &&
            snapshot.val().physicalRestrict === 'false')
        profileHeight = parseInt(snapshot.val().maxHeight);
        // console.log(profileThrill + ' ' + profileHeight)
    });
    firebase.database().ref('fastpass/' + uid).on('value', function (snapshot) {
        console.log(snapshot);
        fpArray = []
        
        thisRide=snapshot.val().fp1
        var thisLand=getLand(thisRide)
        fpArray.push({'fpName': thisRide,'fpTime' :snapshot.val().fpTime1,'land': thisLand})
        
        thisRide = snapshot.val().fp2
        var thisLand = getLand(thisRide);
        fpArray.push({'fpName': thisRide, 'fpTime': snapshot.val().fpTime2, 'land': thisLand})
        
        thisRide = snapshot.val().fp3
        var thisLand = getLand(thisRide)
        fpArray.push({'fpName': thisRide, 'fpTime': snapshot.val().fpTime3, 'land': thisLand})
        //  console.log("db fast passes: "+fpArray)  
        // fpArray.sort(function (a, b) {
        //     return fpTime.a - fpTime.b
        // })
        console.log(JSON.stringify(fpArray))  
       
        });


    
     firebase.database().ref('favorites/' + uid).on('value', function (snapshot) {
         console.log("db favorites: "+snapshot)
         var favArray = []
         thisRide = snapshot.val().fav1
         var thisLand = getLand(thisRide)
         favArray.push({'favName': thisRide, 'land': thisLand})
         
         thisRide = snapshot.val().fav2
         var thisLand = getLand(thisRide)
         favArray.push({'favName': thisRide, 'land': thisLand})
         
         thisRide = snapshot.val().fav3
         var thisLand = getLand(thisRide)
         favArray.push({'favName': thisRide, 'land': thisLand})

         console.log("favorites: " + JSON.stringify(favArray))


     });
});

function getLand(myRide){
for (var i = 0; i < allRides.length; i += 1) {
    if (allRides[i].name === myRide) {
        thisLand = allRides[i].land
        return thisLand
    }
}
}