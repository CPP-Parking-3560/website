firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if(firebaseUser) {
        //user logged in
        console.log(firebaseUser);
    }
    else {
        //user not logged in
        console.log('Not Logged in');
    }
});

function login(){
    const txtEmail = document.getElementById('txtEmail').value;
    const txtPassword = document.getElementById('txtPassword').value;
    const btnLogin = document.getElementById('btnLogIn').value;
    const btnSignUp = document.getElementById('btnSignUp').value;

    firebase.auth().signInWithEmailAndPassword(txtEmail, txtPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " = errorMessage);
      // ...
    });
}

function signup(){

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'http://localhost:63342/CS%203560/templates/login.html?_ijt=pdhrrahpnv8qs9ci4c9ov46pu8',
        handleCodeInApp: false
    };

    firebase.auth().sendSignInLinkToEmail(txtEmail, actionCodeSettings)
        .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', txtEmail);
        })
        .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
            window.alert("Error : " = errorMessage);
        });

    firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
        .then(function() {
            // Verification email sent.
        })
        .catch(function(error){
            window.alert("Error : " = errorMessage);
        })

    // Confirm the link is a sign-in with email link.
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        var email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        firebase.auth().signInWithEmailLink(email, window.location.href)
            .then(function(result) {
            // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                // You can access the new user via result.user
                // Additional user info profile not available via: result.additionalUserInfo.profile == null
                // You can check if the user is new or existing: result.additionalUserInfo.isNewUser
                if(result.additionalUserInfo.isNewUser){
                    firebase.auth().createUserWithEmailAndPassword(email, txtPassword).catch(function(error) {
                      // Handle Errors here.
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      // ...
                    });
                }
            })
            .catch(function(error) {
                window.alert("Error : " = errorMessage);
            });
    }
}

/*
function toggleSignIn() 
{
        
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email txtEmail.value;
        var password = txtPassword.value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
}


(function(){
       


        //Add login event
        btnLogin.addEventListener('click',e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const suth = firebase.auth();
            //signin
            const promise = auth.signInWithEmailAndPassword(email,pass);
            promise.catch(e => console.log(e.message));
        });

        //Add signup event
        btnSignUp.addEventListener('click',e => {
            const email = txtEmail.value;
            // TODO: Check 4 valid  email
            const pass = txtPassword.value;
            const suth = firebase.auth();
            //signin
            const promise = auth.createUserWithEmailAndPassword(email,pass);
            promise.catch(e => console.log(e.message));
        });
        
        //Add realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser)
            {
                console.log(firebaseUser);
            }
            else
            {
                console.log('Not Logged in');
            }
        });
}());
