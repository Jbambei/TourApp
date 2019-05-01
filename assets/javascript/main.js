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











