// Your web app's Firebase configuration
var auth = require('./auth.json');      //Have an auth.json file with the google api key labeled key
                                        //Please do not push auth.json to git
var firebaseConfig = {
    apiKey: auth.key,
    authDomain: "cs3560parking.firebaseapp.com",
    databaseURL: "https://cs3560parking.firebaseio.com",
    projectId: "cs3560parking",
    storageBucket: "cs3560parking.appspot.com",
    messagingSenderId: "270171142840",
    appId: "1:270171142840:web:620cb57b803ba3981a524d",
    measurementId: "G-TVNM1KFV8F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

