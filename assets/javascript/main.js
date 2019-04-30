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
  //Sidenav Activate
  $('.sidenav').sidenav();
  //Modal Activate
  $('.modal').modal();
  //Dropdown Activate
  $('select').formSelect();

});








