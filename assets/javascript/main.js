var mainApp={};
var firebase;
var uid;
var profileThrill;
var fphours1;
var fpminutes1;
var fphours2;
var fpminutes2;
var fphours3;
var fpminutes3;
var profileHeight= 0;
var fpArray=[];
var favArray=[];
var firstFastPass;
var secondFastPass;
var thirdFastPass;
var firstFastPassTime;
var secondFastPassTime;
var thirdFastPassTime;

(function(){
  var firebase = app_fireBase;
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var user = firebase.auth().currentUser;
         uid = user.uid;
        $(".name").text(user.displayName);
        $(".email").text(user.email);
        // this sets their username and email into the sidenav pulled from firebase
        firebase.database().ref('users/' + uid).set({
          username: user.displayName,
          email: user.email
        });
        // this is the example for pulling data from firebase
        firebase.database().ref('fastpass/' + uid).on('value', function(snapshot){ 
          firstFastPass = (snapshot.val().fp1)
          secondFastPass =(snapshot.val().fp2)
          thirdFastPass =(snapshot.val().fp3)
          firstFastPassTime = (snapshot.val().fpTime1)
          secondFastPassTime = (snapshot.val().fpTime2)
          thirdFastPassTime = (snapshot.val().fpTime3)
        });

        firebase.database().ref('profiles/' + uid).on('value', function(snapshot){ 
           profileThrill = (snapshot.val().type)
           physicalRestrict = (snapshot.val().physicalRestrict)
        });

        
      

        // User is signed in.
        //capturing user id on login
        console.log(user)
      }else{
        //redirect to login page
        uid = null;
        window.location.replace("././login.html");
    }
});

  function logOut(){
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})()


var allRides = [{
  name: "Splash Mountain",
  height: "40",
  thrill: true,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Frontierland",
  priority: 5,
  minutesMorning: 35,
  minutesPeak: 50,
  walking: 10,
  duration: 18,
  done: false,
  imageSource: "assets/images/frontierland/splashmountain.jpg"
},
{
  name: "Big Thunder Mountain Railroad",
  height: "40",
  thrill: true,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Frontierland",
  priority: 5,
  minutesMorning: 25,
  minutesPeak: 50,
  walking: 10,
  duration: 7,
  done: false,
  imageSource: "assets/images/frontierland/bigThunder.jpg"
},
{
  name: "Tom Sawyer's Island",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Frontierland",
  priority: 1,
  minutesMorning: 10,
  minutesPeak: 10,
  walking: 10,
  duration: 30,
  done: false,
  imageSource: "assets/images/frontierland/tomSawyer.jpg"
},
{
  name: "Country Bears' Jamboree",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Frontierland",
  height: 40,
  priority: 1,
  minutesMorning: 16,
  minutesPeak: 16,
  walking: 10,
  duration: 10,
  done: false,
  imageSource: "assets/images/frontierland/countryBears.jpg"
},

{
  name: "Pirates of the Caribbean",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Adventureland",
  priority: 5,
  minutesMorning: 17,
  minutesPeak: 51,
  walking: 10,
  duration: 7.5,
  done: false,
  imageSource: "assets/images/adventureland/pirates.jpg"
},
{
  name: "Jungle Cruise",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Adventureland",
  priority: 4,
  minutesMorning: 20,
  minutesPeak: 35,
  walking: 10,
  duration: 8,
  done: false,
  imageSource: "assets/images/adventureland/jungleCruise.png"
},
{
  name: "The Magic Carpets of Aladdin",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Adventureland",
  priority: 3,
  minutesMorning: 16,
  minutesPeak: 25,
  walking: 10,
  duration: 1.5,
  done: false,
  imageSource: "assets/images/adventureland/aladdin.jpg"
},
{
  name: "Swiss Family Robinson Treehouse",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Adventureland",
  priority: 2,
  minutesMorning: 10,
  minutesPeak: 10,
  walking: 10,
  duration: 30,
  done: false,
  imageSource: "assets/images/adventureland/swissfamily.jpg"
},
{
  name: "Walt Disney's Enchanted Tiki Room",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Adventureland",
  priority: 1,
  minutesMorning: 10,
  minutesPeak: 10,
  walking: 10,
  duration: 15.5,
  done: false,
  imageSource: "assets/images/adventureland/tiki.jpg"
},
{
  name: "The Haunted Mansion",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Liberty Square",
  priority: 4,
  minutesMorning: 22,
  minutesPeak: 30,
  walking: 10,
  duration: 10,
  done: false,
  imageSource: "assets/images/libertySquare/hauntedMansion.jpg"
},
{
  name: "The Hall of Presidents",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Liberty Square",
  priority: 1,
  minutesMorning: 25,
  minutesPeak: 25,
  walking: 10,
  duration: 23,
  done: false,
  imageSource: "assets/images/libertySquare/hallOfPresidents.jpg"
},
{
  name: "Seven Dwarves Mine Train",
  height: "38",
  thrill: true,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 5,
  minutesMorning: 45,
  minutesPeak: 75,
  walking: 10,
  duration: 3,
  done: false,
  imageSource: "assets/images/fantasyland/dwarvesTrain.jpg"
},
{
  name: "Peter Pan's Flight",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 5,
  minutesMorning: 45,
  minutesPeak: 60,
  walking: 10,
  duration: 3,
  done:false,
  imageSource: "assets/images/fantasyland/peterPan.jpg"
},
{
  name: "The Many Adventure of Winnie the Pooh",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 3,
  minutesMorning: 20,
  minutesPeak: 30,
  walking: 10,
  duration: 4,
  done:false,
  imageSource: "assets/images/fantasyland/pooh.jpg"
},
{
  name: "It's a Small World",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 3,
  minutesMorning: 12,
  minutesPeak: 25,
  walking: 10,
  duration: 14,
  done: false,
  imageSource: "assets/images/fantasyland/smallWorld.jpg"
},
{
  name: "Barnstormer",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 3,
  minutesMorning: 10,
  minutesPeak: 25,
  walking: 10,
  duration: 2,
  done: false,
  imageSource: "assets/images/fantasyland/barnstormer.webp"
},
{
  name: "Dumbo",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 3,
  minutesMorning: 15,
  minutesPeak: 25,
  walking: 10,
  duration: 1.5,
  done: false,
  imageSource: "assets/images/fantasyland/dumbo.jpg"
},
{
  name: "Mad Tea Party",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 2,
  minutesMorning: 8,
  minutesPeak: 16,
  walking: 10,
  duration: 1.5,
  done: false,
  imageSource: "assets/images/fantasyland/teaParty.jpg"
},
{
  name: "Under the Sea",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 2,
  minutesMorning: 10,
  minutesPeak: 25,
  walking: 10,
  duration: 7,
  done: false,
  imageSource: "assets/images/fantasyland/mermaid.jpg"

},
{
  name: "Prince Charming's Regal Carousel",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Fantasyland",
  priority: 1,
  minutesMorning: 5,
  minutesPeak: 15,
  walking: 10,
  duration: 2,
  done: false,
  imageSource: "assets/images/fantasyland/carousel.jpg"
},

{
  name: "Space Mountain",
  height: "44",
  thrill: true,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Tomorrowland",
  priority: 5,
  minutesMorning: 30,
  minutesPeak: 55,
  walking: 10,
  duration: 10,
  done: false,
  imageSource: "assets/images/tomorrowland/spaceMountain.jpg"
},
{
  name: "Buzz Lightyear's Space Ranger Spin",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Tomorrowland",
  priority: 4,
  minutesMorning: 20,
  minutesPeak: 30,
  walking: 10,
  duration: 4.5,
  done: false,
  imageSource: "assets/images/tomorrowland/buzz.jpg"
},
{
  name: "Astro Orbiter",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Tomorrowland",
  priority: 3,
  minutesMorning: 22,
  minutesPeak: 30,
  walking: 10,
  duration: 1.5,
  done: false,
  imageSource: "assets/images/tomorrowland/astroOrbiter.jpg"
},
{
  name: "Transit Authority Peoplemover",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Tomorrowland",
  priority: 2,
  minutesMorning: 8,
  minutesPeak: 11,
  walking: 10,
  duration: 10,
  done: false,
  imageSource: "assets/images/tomorrowland/peopleMover.jpg"
},
{
  name: "Walt Disney's Carousel of Progress",
  height: "any",
  thrill: false,
  fastpass: false,
  fastPassTime: null,
  favorite: false,
  land: "Tomorrowland",
  priority: 1,
  minutesMorning: 10,
  minutesPeak: 10,
  walking: 10,
  duration: 21,
  done: false,
  imageSource: "assets/images/tomorrowland/carouselProgress.jpg"
}
]//ALL PARTS OF GENSCHEDULE

/* genschedule()
Set FPs to true
loop through the array and any FP that are true, then set their time to whatever FP time we got from the frontend
cut out any rides that they can't go on
cut out any rides they won't go on
calc the amount of time until now from the next fastpass (in minutes)
loop through the master array, pushing each entry to firebase if they have time (total time left-totalride time)
*/

//cuts out rides they can't go on
/* PULL HEIGHT FROM FIREBASE, SET TO A VARIABLE

if (minHeight < 38) {
    allRides.splice(index,1)
    allRides.splice(index,1)
    allRides.splice(index,1)
    allRides.splice(index,1)
} else if (minHeight < 40) {
    allRides.splice(0,1)
    allRides.splice(0,2)
} else if (minheight < 44) {
    allRides.splice(0,1)
} else {
    console.log("no restrictions :)")
}



//cuts out rides for non-thrill riders
/*
if profileThrill (get from firebase) = false {
     allRides.splice(0,2)
     allRides.splice(9,1)
     allrides.splice(17,1)
}
*/

/*
function addRide(ride,fastpass,favorite,duration,currentTime)
let ref= firebase.database().ref('schedule/' + uid)
ref.push({
    
  ride: rideName,
  fastpass: fastpass,
  favorite: favorite,
  totalRideTime: totalRideTime,
  currentTime: currentTime
})
*/








var rides= ["astro-orbiter","barnstormer", "big-thunder-mountain-railroad", "buzz-lightyears-space-ranger-spin", "country-bear-jamboree","dumbo-the-flying-elephant","hall-of-presidents", "haunted-mansion","its-a-small-world", "jungle-cruise","mad-tea-party","magic-carpets-of-aladdin", "many-adventures-of-winnie-the-pooh", "peter-pans-flight", "pirates-of-the-caribbean","prince-charming-regal-carrousel", "seven-dwarfs-mine-train","space-mountain", "splash-mountain","tomorrowland-speedway","tomorrowland-transit-authority-peoplemover", "under-the-sea","walt-disneys-carousel-of-progress", "enchanted-tiki-room"]

var desc;

for(var i=0; i< rides.length ; i++){
  ride = rides[i]
  var proxyurl = "https://cors-anywhere.herokuapp.com/"
  var url = "https://touringplans.com/magic-kingdom/attractions/"+ ride + ".json"
  var newURL = proxyurl + url 
  
$.ajax({
  url: newURL,
  method: "GET"
})
.then(function(response){
  // var results = response.data;
  desc = (response.name + ": " + response["what_it_is"])
})
}



 

var rideNames=  ["Astro Orbiter","Barnstormer","Big Thunder Mountain Railroad","Buzz LightYear's Space Ranger Spin","Country Bears' Jamboree","Dumbo","The Hall of Presidents","The Haunted Mansion","'It's a small world'","Jungle Cruise","Mad Tea Party","The Magic Carpets of Aladdin" ,"The Many Adventures of Winnie the Pooh","Peter Pan's Flight","Pirate's of the Caribbean", "Prince Charming's Regal Carousel","Seven Dwarves Mine Train","Space Mountain","Splash Mountain","Swiss Family Robinson Tree House","Tom Sawyer's Island","Transit Authority PeopleMover","Under the Sea","Walt Disney's Carousel of Progress" ,"Walt Disney's Enchanted Tiki Room"]
for (var i=0; i < allRides.length; i++){
  var newOption= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  var newOption2= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  var newOption3= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  var newOption4= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  var newOption5= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  var newOption6= $("<option>").attr("value", (allRides[i].name)).text(allRides[i].name)
  $("#firstFPRide").append(newOption)
  $("#secondFPRide").append(newOption2)
  $("#thirdFPRide").append(newOption3)
  $("#firstFavRide").append(newOption4)
  $("#secondFavRide").append(newOption5)
  $("#thirdFavRide").append(newOption6)


}

var hours = ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08"]
for (var i=0; i < hours.length; i++){
  console.log(hours[i])
   var hourOption= $("<option>").attr("value", (hours[i])).text(hours[i])
   var hourOption2= $("<option>").attr("value", (hours[i])).text(hours[i])
   var hourOption3= $("<option>").attr("value", (hours[i])).text(hours[i])
   $("#firstFPTimeHour").append(hourOption)
   $("#secondFPTimeHour").append(hourOption2)
   $("#thirdFPTimeHour").append(hourOption3)
}
var minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]
for (var j=0; j < minutes.length; j++){
  console.log(minutes[j])
   var minuteOption= $("<option>").attr("value", (minutes[j])).text(minutes[j])
   var minuteOption2= $("<option>").attr("value", (minutes[j])).text(minutes[j])
   var minuteOption3= $("<option>").attr("value", (minutes[j])).text(minutes[j])
   $("#firstFPTimeMinute").append(minuteOption)
   $("#secondFPTimeMinute").append(minuteOption2)
   $("#thirdFPTimeMinute").append(minuteOption3)
}



$(document).ready(function(){

  $("#profileSave").on("click", function(event){
    event.preventDefault();


    var profileName = $("#riderName-input").val().trim();
    var riderType = $("#profileType").val();
    var heightRestrict = $("#heightRestrict").val();
    var physicalRestrict = $("#physicalRestrict").val();
    let ref= firebase.database().ref('profiles/' + uid)
    ref.set({
        
      name: profileName,
      type: riderType,
      maxHeight: heightRestrict,
      physicalRestrict: physicalRestrict,
    })
    firebase.database().ref('profiles/' + uid).on('value', function(snapshot){ 
       profileThrill = (snapshot.val().type)
      if ( profileThrill = "noPref" || "thrill"){ profileThrill = true } else if( profileThrill = "noThrill"){
        profileThrill = false
      }
   });
  });

  $("#riderFastPassSubmit").on("click", function(event) {
    event.preventDefault();
    let ref = firebase.database().ref('fastpass/' + uid);
    let fastPassRideOne = $("#firstFPRide").val();
    console.log(fastPassRideOne)
    fphours1 = $("#firstFPTimeHour").val()
    fpminutes1 = $("#firstFPTimeMinute").val()
    if (fphours1 == null) {
      fphours1 = "09"
    } 
    if (fpminutes1 == null) {
      fpminutes1 = "00"
    } 

    let fastPassTimeOne = (fphours1 + ":" + fpminutes1);
    console.log(fastPassTimeOne)
    let fastPassRideTwo = $("#secondFPRide").val();
    
    fphours2 = $("#secondFPTimeHour").val()
    fpminutes2 = $("#secondFPTimeMinute").val()
    if (fphours2 == null) {
      fphours2 = "09"
    } 
    if (fpminutes2 == null) {
      fpminutes2 = "00"
    } 

    let fastPassTimeTwo = (fphours2 + ":" + fpminutes2);
    console.log(fastPassTimeTwo)
    let fastPassRideThree = $("#thirdFPRide").val();
    fphours3 = $("#thirdFPTimeHour").val()
    fpminutes3 = $("#thirdFPTimeMinute").val()
    if (fphours3 == null) {
      fphours3 = "09"
    } 
    if (fpminutes3 == null) {
      fpminutes3 = "00"
    } 

    let fastPassTimeThree = (fphours3 + ":" + fpminutes3);
    console.log(fastPassTimeThree)

        ref.set({
      fp1: fastPassRideOne,
      fpTime1: fastPassTimeOne,
      fp2: fastPassRideTwo,
      fpTime2: fastPassTimeTwo,
      fp3: fastPassRideThree,
      fpTime3: fastPassTimeThree,
    })
});


  $("#favoriteSubmit").on("click", function(event) {
    event.preventDefault();
    let ref = firebase.database().ref('favorites/' + uid);
    var favOne = $("#firstFavRide").val()
    favOne = !(favOne) ? "none" : $("#firstFavRide").val().trim();
    var favTwo = $("#secondFavRide").val()
    favTwo = !(favTwo) ? "none" : $("#secondFavRide").val().trim();
    var favThree = $("#thirdFavRide").val()
    favThree = !(favThree) ? "none" : $("#thirdFavRide").val().trim();
    ref.set({
      fav1: favOne,
      fav2: favTwo,
      fav3: favThree,
    })
    findARide(allRides, uid);
    for (let i = 0; i < allRides.length; i++) {
      var allRidesObject = allRides[i];
      console.log(allRidesObject.duration)
      var newDiv1= $("<div>").addClass("row center-align");
      var newTimeP= $("<p>").addClass("col s2 offset-m1 offset-l2 time").text("9:00");
      var newDiv2 = $("<div>").addClass("col s9 m7 l4 center-align")
      var newDiv3 = $("<div>").addClass("card center-align")
      var newDiv4 = $("<div>").addClass("card-image")
      var newImg = $("<img>").attr("src", allRidesObject.imageSource)
      var newSpan = $("<span>").addClass("card-title").attr("id", "minutes").text(allRidesObject.duration)
      var newA = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light blue")
      var newI = $("<i>").addClass("material-icons right").text("cloud")
        newA.append(newI)
      newDiv4.append(newImg, newSpan, newA)
    
      var newDiv5= $("<div>").addClass("card-content")
      var newDiv6= $("<div>").addClass("row valign-wrapper")
      var newA2 = $("<a>").addClass("waves-effect waves-light btn-large col amber accent-4 s3")
      var newI2 = $("<i>").addClass("material-icons").text("check")
      var newP2 = $("<p>").addClass("col s9 rideTitle").text(allRidesObject.name)
        newA2.append(newI2)
      newDiv6.append(newA2, newP2)
      newDiv5.append(newDiv6)
    
      var newDiv7= $("<div>").addClass("row")
      //need ride location \/
      var newP3 = $("<p>").addClass("col s12 rideLocation").attr("id", "rideLocation").text(allRidesObject.location)
      //need ride description text \/
      var newP4= $("<p>").addClass("col s12  rideDescription").text(desc)
    
    
      newDiv7.append(newP3, newP4)
    
    
      newDiv5.append(newDiv6, newDiv7)
    
      newDiv3.append(newDiv4, newDiv5)
    
      newDiv2.append(newDiv3)
    
      newDiv1.append(newTimeP, newDiv2)
    
      $("#putCardsHere").append(newDiv1)
    
    
    }
    
  });

  //Sidenav Activate
  $('.sidenav').sidenav();
  //Modal Activate
  $('.modal').modal();
  //Dropdown Activate
  $('select').formSelect();

});




var openingTime = moment("9:00", "h:mm")
var currentRideTime;
var timeRemaining;

//  var firstFastPassTime = moment(firstFastPassTime, "h:mm")
  var diffInTimeToFirstFastPass;
//  console.log(diffInTimeToFirstFastPass)

//  var secondFastPassTime = moment(secondFastPassTime, "h:mm")
// // var thirdFastPass = "Mad Tea Party"
//  var thirdFastPassTime = moment(thirdFastPassTime, "h:mm")
//  var currentRideTime = openingTime
 var timeRemaining = diffInTimeToFirstFastPass
 var closingTime = moment("8:59", "h:mm")
 var currentFastPass; 
 var currentFastPassTime;
 var nextFastPassTime;


function findARide(arr, uid) {

   firstFastPassTime = moment(firstFastPassTime, "h:mm")
   diffInTimeToFirstFastPass = moment(firstFastPassTime, "h:mm").diff(moment("9:00", "h:mm"), "minutes") //NEEDS FIRST FAST PASS TIME
  console.log(diffInTimeToFirstFastPass)
 
   secondFastPassTime = moment(secondFastPassTime, "h:mm")
 // var thirdFastPass = "Mad Tea Party"
   thirdFastPassTime = moment(thirdFastPassTime, "h:mm")
   currentRideTime = openingTime
  timeRemaining = diffInTimeToFirstFastPass
 
  currentFastPass = firstFastPass
  currentFastPassTime = firstFastPassTime
  nextFastPassTime = secondFastPassTime
  let ref = firebase.database().ref('schedule/' + uid)

  for (var i = 0; i < arr.length; i += 1) {
    //can take out lower if statment when values are in
    if (arr[i].name === firstFastPass ||
      arr[i].name === secondFastPass ||
      arr[i].name === thirdFastPass) {
      arr[i].fastpass = true
    }
    
    var totalTimeOfRide = arr[i].minutesMorning + arr[i].walking + arr[i].duration
    if (arr[i].done === true) {
      console.log(i)
    } else if (totalTimeOfRide <= timeRemaining && arr[i].name !== firstFastPass &&
      arr[i].name !== secondFastPass &&
      arr[i].name !== thirdFastPass) {

    


    currentRideTime = moment(currentRideTime).add(totalTimeOfRide, "minutes")
    currentRideTimeConverted = moment(currentRideTime, "h:mm").format("h:mm")
    console.log(currentRideTimeConverted)
    ref.push({

      ride: arr[i].name,
      location: arr[i].land,
      fastpass: false,
      timeToRide: currentRideTimeConverted,
      totalRideTime: totalTimeOfRide,

    })

    timeRemaining -= totalTimeOfRide

  } else if (totalTimeOfRide >= timeRemaining) {
    for (var j = 0; j < allRides.length; j += 1) {
      //can take out lower if statement when values are in
      if (arr[j].name === firstFastPass ||
        arr[j].name === secondFastPass ||
        arr[j].name === thirdFastPass) {
        arr[j].fastpass = true
      }
      if (arr[j].name === currentFastPass) {
        currentRideTime = moment(currentFastPassTime).add("60", "minutes")
        diffInTimeToFirstFastPass = moment(nextFastPassTime).diff(moment(currentRideTime), "minutes")
        console.log(diffInTimeToFirstFastPass)
        arr[j].done = true
        ref.push({

          ride: arr[j].name,
          location: arr[j].land,
          fastpass: true,
          fastpassTime: arr[j].fastPassTime,
          totalRideTime: 15,
          timeToRide: arr[j].fastPassTime
        })
        if (currentFastPass === firstFastPass) {
          currentFastPass = secondFastPass
          currentFastPassTime = secondFastPassTime
          nextFastPassTime = thirdFastPassTime
        } else if (currentFastPass === secondFastPass) {
          currentFastPass = thirdFastPass
          currentFastPassTime = thirdFastPassTime
          nextFastPassTime = closingTime
        } else {
          currentFastPass = ""
        }

        timeRemaining = diffInTimeToFirstFastPass - 15
        console.log("time remaining" + timeRemaining)

      }


    }

  }

}
}








// for (let i = 0; i < allRides.length; i++) {
//   var allRidesObject = allRides[i];
//   console.log(allRidesObject.duration)
//   var newDiv1= $("<div>").addClass("row center-align");
//   var newTimeP= $("<p>").addClass("col s2 offset-m1 offset-l2 time").text(allRidesObject.duration);
//   var newDiv2 = $("<div>").addClass("col s9 m7 l4 center-align")
//   var newDiv3 = $("<div>").addClass("card center-align")
//   var newDiv4 = $("<div>").addClass("card-image")
//   var newImg = $("<img>").attr("src", allRidesObject.imageSource)
//   var newSpan = $("<span>").addClass("card-title").attr("id", "minutes").text(allRidesObject.duration)
//   var newA = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light blue")
//   var newI = $("<i>").addClass("material-icons right").text("cloud")
//     newA.append(newI)
//   newDiv4.append(newImg, newSpan, newA)

//   var newDiv5= $("<div>").addClass("card-content")
//   var newDiv6= $("<div>").addClass("row valign-wrapper")
//   var newA2 = $("<a>").addClass("waves-effect waves-light btn-large col amber accent-4 s3")
//   var newI2 = $("<i>").addClass("material-icons").text("check")
//   var newP2 = $("<p>").addClass("col s9 rideTitle").text(allRidesObject.name)
//     newA2.append(newI1)
//   newDiv6.append(newA2, newP2)
//   newDiv5.append(newDiv6)

//   var newDiv7= $("<div>").addClass("row")
//   //need ride location \/
//   var newP3 = $("<p>").addClass("col s12 rideLocation").attr("id", "rideLocation").text(allRidesObject.location)
//   //need ride description text \/
//   var newP4= $("<p>").addClass("col s12  rideDescription").text(desc)


//   newDiv7.append(newP3, newP4)


//   newDiv5.append(newDiv6, newDiv7)

//   newDiv3.append(newDiv4, newDiv5)

//   newDiv2.append(newDiv3)

//   newDiv1.append(newTimeP, newDiv2)

//   $("#putCardsHere").append(newDiv1)


// }


//  var newDiv1= $("<div>").addClass("row center-align")
// //need time of attraction added\/
// var newTimeP= $("<p>").addClass("col s2 offset-m1 offset-l2 time").text()
// var newDiv2 = $("<div>").addClass("col s9 m7 l4 center-align")

// var newDiv3 = $("<div>").addClass("card center-align")
// var newDiv4 = $("<div>").addClass("card-image")

// //need img file path\/
// var newImg = $("<img>").attr("src", "")
// //need how many minutes for attraction \/
// var newSpan = $("<span>").addClass("card-title").attr("id", "minutes").text()
// var newA = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light blue")
// var newI = $("<i>").addClass("material-icons right").text("cloud")

// newA.append(newI)
// newDiv4.append(newImg, newSpan, newA)

// var newDiv5= $("<div>").addClass("card-content")
// var newDiv6= $("<div>").addClass("row valign-wrapper")
// var newA2 = $("<a>").addClass("waves-effect waves-light btn-large col amber accent-4 s3")
// var newI2 = $("<i>").addClass("material-icons").text("check")
// //need ride name \/
// var newP2 = $("<p>").addClass("col s9 rideTitle").text()



// newA2.append(newI1)
// newDiv6.append(newA2, newP2)
// newDiv5.append(newDiv6)

// var newDiv7= $("<div>").addClass("row")
// //need ride location \/
// var newP3 = $("<p>").addClass("col s12 rideLocation").attr("id", "rideLocation").text()
// //need ride description text \/
// var newP4= $("<p>").addClass("col s12  rideDescription").text()


// newDiv7.append(newP3, newP4)


// newDiv5.append(newDiv6, newDiv7)

// newDiv3.append(newDiv4, newDiv5)

// newDiv2.append(newDiv3)

// newDiv1.append(newTimeP, newDiv2)

// $("#putCardsHere").append(newDiv1)





/*html for card base
<div class="row center-align">
                <p class="col s2 offset-m1 offset-l2 time">9:30</p>
                <div class="col s9 m7 l4 center-align">
                    <div class="card center-align">
                        <div class="card-image">
                            <img src="assets/images/splashMountainSample.jpg">
                            <span class="card-title" id="minutes"> 35 min</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light blue "><i
                                    class="material-icons right">cloud</i></a>
                        </div>
                        <div class="card-content">
                            <div class="row valign-wrapper ">
                                <a class="waves-effect waves-light btn-large col amber accent-4 s3 " id="check"><i
                                        class="material-icons">check</i></a>
                                <p class="col s9 rideTitle">Splash Mountain</p>
                                
                            </div>
                            <div class="row">
                                    <p class="col s12 rideLocation" id="rideLocation">Ride Location</p>
                                <p class="col s12  rideDescription">Ride Description: Lalalalalalalalalalala Lalalalalalalalalalala
                                    lalalalala lalala lalalal lalalalala lalalalala</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */









