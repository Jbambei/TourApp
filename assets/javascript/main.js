var mainApp={};
var firebase;
var uid;
var profileThrill= false;
var profileHeight= 0;
var fpArray=[];
var favArray=[];

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
          console.log(snapshot.val().fp1)
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
  done: false
},
{
  name: "Thunder Mountain",
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done:false
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
  done:false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
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
  done: false
}
]

//ALL PARTS OF GENSCHEDULE

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
    
  ride: ride,
  fastpass: fastpass,
  favorite: favorite,
  totalRideTime: totalRideTime,
  currentTime: currentTime
})
*/






/*

var rides= ["astro-orbiter","barnstormer", "big-thunder-mountain-railroad", "buzz-lightyears-space-ranger-spin", "country-bear-jamboree","dumbo-the-flying-elephant","hall-of-presidents", "haunted-mansion","its-a-small-world", "jungle-cruise","mad-tea-party","magic-carpets-of-aladdin", "many-adventures-of-winnie-the-pooh", "peter-pans-flight", "pirates-of-the-caribbean","prince-charming-regal-carrousel", "seven-dwarfs-mine-train","space-mountain", "splash-mountain","tomorrowland-speedway","tomorrowland-transit-authority-peoplemover", "under-the-sea","walt-disneys-carousel-of-progress", "enchanted-tiki-room"]



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
  console.log(response.name + ": " + response["average_wait_per_hundred"])
})
}

*/

 

var rideNames=  ["Astro Orbiter","Barnstormer","Big Thunder Mountain Railroad","Buzz LightYear's Space Ranger Spin","Country Bears' Jamboree","Dumbo","The Hall of Presidents","The Haunted Mansion","'It's a small world'","Jungle Cruise","Mad Tea Party","The Magic Carpets of Aladdin" ,"The Many Adventures of Winnie the Pooh","Peter Pan's Flight","Pirate's of the Caribbean", "Prince Charming's Regal Carousel","Seven Dwarves Mine Train","Space Mountain","Splash Mountain","Swiss Family Robinson Tree House","Tom Sawyer's Island","Transit Authority PeopleMover","Under the Sea","Walt Disney's Carousel of Progress" ,"Walt Disney's Enchanted Tiki Room"]
for (var i=0; i < rideNames.length; i++){
  console.log(rideNames[i])
  var newOption= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  var newOption2= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  var newOption3= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  var newOption4= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  var newOption5= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  var newOption6= $("<option>").attr("value", (rideNames[i])).text(rideNames[i])
  $("#firstFPRide").append(newOption)
  $("#secondFPRide").append(newOption2)
  $("#thirdFPRide").append(newOption3)
  $("#firstFavRide").append(newOption4)
  $("#secondFavRide").append(newOption5)
  $("#thirdFavRide").append(newOption6)


}

for (var i=1; i < 13; i++){
  console.log(i)
   var hourOption= $("<option>").attr("value", ([i])).text([i])
   var hourOption2= $("<option>").attr("value", ([i])).text([i])
   var hourOption3= $("<option>").attr("value", ([i])).text([i])
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
    ref.push({
        
      name: profileName,
      type: riderType,
      maxHeight: heightRestrict,
      physicalRestrict: physicalRestrict,
    })

  });

  $("#riderFastPassSubmit").on("click", function(event) {
    event.preventDefault();
    let ref = firebase.database().ref('fastpass/' + uid);
    let fastPassRideOne = $("#firstFPRide").val();
    console.log(fastPassRideOne)
    let fastPassTimeOne = $("#firstFPTimeHour").val() + ":" + $("#firstFPTimeMinute").val();
    console.log(fastPassTimeOne)
    let fastPassRideTwo = $("#secondFPRide").val();
    let fastPassTimeTwo = $("#secondFPTimeHour").val() + ":" + $("#secondFPTimeMinute").val();
    console.log(fastPassTimeTwo)
    let fastPassRideThree = $("#thirdFPRide").val();
    let fastPassTimeThree = $("#thirdFPTimeHour").val() + ":" + $("#thirdFPTimeMinute").val();
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
  });

  //Sidenav Activate
  $('.sidenav').sidenav();
  //Modal Activate
  $('.modal').modal();
  //Dropdown Activate
  $('select').formSelect();

});







/*
 This is the code to make the materialize cards, I have commented where we need info input

var newDiv1= $("<div>").addClass("row center-align")
//need time of attraction added\/
var newTimeP= $("<p>").addClass("col s2 offset-m1 offset-l2 time").text()
var newDiv2 = $("<div>").addClass("col s9 m7 l4 center-align")
var newDiv3 = $("<div>").addClass("card center-align")
var newDiv4 = $("<div>").addClass("card-image")
//need img file path\/
var newImg = $("<img>").attr("src", "")
//need how many minutes for attraction \/
var newSpan = $("<span").addClass("card-title").attr("id", "minutes").text()
var newA = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light blue")
var newI = $("<i>").addClass("material-icons right").text("cloud")

newA.append(newI)
newDiv4.append(newImg, newSpan, newA)

var newDiv5= $("<div>").addClass("card-content")
var newDiv6= $("<div>").addClass("row valign-wrapper")
var newA2 = $("<a>").addClass("waves-effect waves-light btn-large col amber accent-4 s3")
var newI2 = $("<i>").addClass("material-icons").text("check")
//need ride name \/
var newP2 = $("<p>").addClass("col s9 rideTitle").text()



newA2.append(newI1)
newDiv6.append(newA2, newP2)
newDiv5.append(newDiv6)

var newDiv7= $("<div>").addClass("row")
//need ride location \/
var newP3 = $("<p>").addClass("col s12 rideLocation").attr("id", "rideLocation").text()
//need ride description text \/
var newP4= $("<p>").addClass("col s12  rideDescription").text()


newDiv7.append(newP3, newP4)


newDiv5.append(newDiv6, newDiv7)

newDiv3.append(newDiv4, newDiv5)

newDiv2.append(newDiv3)

newDiv1.append(newTimeP, newDiv2)

$("#putCardsHere").append(newDiv1)

*/



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









