firebase.auth().onAuthStateChanged(function(user) {
   if(user) {
       // User is signed in.
       console.log("logged in");

       // Keeps user signed in
       var user = firebase.auth().currentUser;
       if(user!=null){
           var email_id = user.email;
           var email_verified = user.emailVerified;
           var Uid = firebase.auth().currentUser.uid;
           localStorage.setItem("storageName",Uid);
           localStorage.setItem("emailAuth", email_id);

           //localStorage.setItem("storageName", uid);
           console.log("Welcome: " + email_id +
                        "\nUserID: " + Uid +
                        "\nVerified: " + email_verified);
           if(email_verified != true) {
               user.sendEmailVerification().then(function () {
                   // Email sent.
                   console.log("Verification sent");
               }).catch(function (error) {
                   // An error happened.
                   console.log("Error: " + error.message);
               });
           }
           else{
               location.replace("profile.html");
           }


       }
   } else {
       // No user is signed in.
       console.log("logged out");
   }
});

function login(){
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log("Error : " + errorMessage);
    });
    window.alert("stop refreshing please");
}

function signup(){
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;

    var email_str = "" + email;
    var str = email_str.slice(-8);
    if(str == "@cpp.edu"){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
            console.log("Error : " + errorMessage);
        });

        //window.alert(email, password);
    }
    else
        window.alert("Invalid email: " + str);
}