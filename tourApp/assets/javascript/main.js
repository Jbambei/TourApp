var mainApp={};

var uid = null;

(function(){
  var firebase = app_fireBase;
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //think we are saving user password here
        uid = user.uid;
      }else{
        //redirect to login page
        uid = null;
        window.location.replace("login.html");
    }
});

  function logOut(){
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})()






