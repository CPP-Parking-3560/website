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
            const auth = firebase.auth();
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
