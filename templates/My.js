// Your web app's Firebase configuration
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
var auth = require('./auth.json');      //Have an auth.json file with the google api key labeled key
                                        //Please do not push auth.json to git

require("firebase/auth");
require("firebase/database");

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

