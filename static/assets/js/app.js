(function(){
        const config = {
        apiKey: "AIzaSyA-ChRzG5RcrIzyyYHg3Uj9tELlCtl1xwQ",
        authDomain: "cppparking-12e62.firebaseapp.com",
        databaseURL: "https://cppparking-12e62.firebaseio.com",
        projectId: "cppparking-12e62",
        storageBucket: "cppparking-12e62.appspot.com",
        messagingSenderId: "421167264622",
        appId: "1:421167264622:web:ae06e56f16d8fc9c26477f",
        measurementId: "G-48NHV7P46N"
        };
        firebase.initializeApp(config);

        //Get elements
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogIn');
        const btnSignUp = document.getElementById('btnSignUp');

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
