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










