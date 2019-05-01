var mainApp={};

var uid = null;

(function(){
  var firebase = app_fireBase;
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //capturing user id on login
        uid = user.uid;
        console.log(uid)
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
  var newOption= $("<option>").attr("value", (i+1)).text(rideNames[i])
  var newOption2= $("<option>").attr("value", (i+1)).text(rideNames[i])
  var newOption3= $("<option>").attr("value", (i+1)).text(rideNames[i])
  var newOption4= $("<option>").attr("value", (i+1)).text(rideNames[i])
  var newOption5= $("<option>").attr("value", (i+1)).text(rideNames[i])
  var newOption6= $("<option>").attr("value", (i+1)).text(rideNames[i])
  $("#firstFPRide").append(newOption)
  $("#secondFPRide").append(newOption2)
  $("#thirdFPRide").append(newOption3)
  $("#firstFavRide").append(newOption4)
  $("#secondFavRide").append(newOption5)
  $("#thirdFavRide").append(newOption6)


}








$(document).ready(function(){
  $("#riderTypeSubmit").on("click", function(event) {
    event.preventDefault();
    var riderName = $("#riderName-input").val().trim();
    var riderType = $("#profileType").val();
  
    console.log(riderName, riderType)
    localStorage.clear();

    localStorage.setItem("name", riderName);
    localStorage.setItem("type", riderType);
  });

  $("#riderRestrictSubmit").on("click", function(event) {
    event.preventDefault();
    var heightRestrict = $("#heightRestrict").val();
    var physicalRestrict = $("#physicalRestrict").val();
  
    console.log(heightRestrict, physicalRestrict)

    localStorage.setItem("heightRestrict", heightRestrict);
    localStorage.setItem("physicalRestrict", physicalRestrict);
  });

  $("#riderFastPassSubmit").on("click", function(event) {
    event.preventDefault();
    var fastPassRideOne = $("#firstFPRide").val()
    var fastPassTimeOne = $("#firstFPTime").val().trim()
    var fastPassRideTwo = $("#secondFPRide").val()
    var fastPassTimeTwo = $("#secondFPTime").val().trim()  
    var fastPassRideThree = $("#thirdFPRide").val()
    var fastPassTimeThree = $("#thirdFPTime").val().trim()


    localStorage.setItem("FirstFastPass", fastPassRideOne);
    localStorage.setItem("SecondFastPass", fastPassRideTwo);
    localStorage.setItem("ThirdFastPass", fastPassRideThree);
    localStorage.setItem("FirstFastPassTime", fastPassTimeOne);
    localStorage.setItem("SecondFastPassTime", fastPassTimeTwo);
    localStorage.setItem("ThirdFastPassTime", fastPassTimeThree);

  })

  $("#favoriteSubmit").on("click", function(event) {
    event.preventDefault();
    var favOne = $("#firstFavRide").val()
    var favTwo = $("#secondFavRide").val()
    var favThree = $("#thirdFavRide").val()


    localStorage.setItem("FirstFavRide", favOne);
    localStorage.setItem("SecondFavRide", favTwo);
    localStorage.setItem("ThirdFavRide", favThree);


  });

  //Sidenav Activate
  $('.sidenav').sidenav();
  //Modal Activate
  $('.modal').modal();
  //Dropdown Activate
  $('select').formSelect();

});








var newDiv1= $("<div>").addClass("row")
//need time of attraction added\/
var newTimeP= $("<p>").addClass("col s1").text()
var newDiv2 = $("<div>").addClass("col s11 m6")
var newDiv3 = $("<div>").addClass("card")
var newDiv4 = $("<div>").addClass("card-image")
//need img file path\/
var newImg = $("<img>").attr("src", "")
//need how many minutes for attraction \/
var newSpan = $("<span").addClass("card-title").text()
var newA = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light blue")
var newI = $("<i>").addClass("material-icons right").text("cloud")

newA.append(newI)
newDiv4.append(newImg, newSpan, newA)

var newDiv5= $("<div>").addClass("card-content")
var newDiv6= $("<div>").addClass("row")
var newA2 = $("<a>").addClass("waves-effect waves-light btn-large col s2")
var newI2 = $("<i>").addClass("material-icons").text("check")
//need ride name \/
var newP2 = $("<p>").addClass("col s10").text()
//need ride location \/
var newP3 = $("<p>").addClass("col s10").text()


newA2.append(newI1)
newDiv6.append(newA2, newP2, newP3)
newDiv5.append(newDiv6)

var newDiv7= $("<div>").addClass("row")
var newA3 = $("<a>").addClass("waves-effect waves-light btn-large col s2")
var newI3 = $("<i>").addClass("material-icons").text("clear")
//need ride description text \/
var newP4= $("<p>").addClass("col s10").text()

newA3.append(newI3)
newDiv7.append(newA3, newP4)


newDiv5.append(newDiv6, newDiv7)

newDiv3.append(newDiv4, newDiv5)

<div class="row">
<p class="col s1">9:30</p>
<div class="col s11 m6">
    <div class="card">
        <div class="card-image">
            <img src="assets/images/splashMountainSample.jpg">
            <span class="card-title">Minutes</span>
            <a class="btn-floating halfway-fab waves-effect waves-light blue"><i
                    class="material-icons right">cloud</i></a>
        </div>
        <div class="card-content">
            <div class="row">
                <a class="waves-effect waves-light btn-large col s2"><i
                        class="material-icons">check</i></a>
                <p class="col s10">Splash Mountain</p>
                <p class="col s10">Ride Location</p>
            </div>
            <div class="row">
                <a class="waves-effect waves-light btn-large col s2"><i
                        class="material-icons">clear</i></a>
                <p class="col s10">Ride Description: Lalalalalalalalalalala Lalalalalalalalalalala
                    lalalalala lalala lalalal lalalalala lalalalala</p>
            </div>
        </div>
    </div>
</div>
</div>











