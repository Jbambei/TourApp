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










