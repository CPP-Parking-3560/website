

var auth = fetch('./auth.json');
//This file is used for the form in profile.html

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
firebase.initializeApp(firebaseConfig);
database = firebase.database();

var userID = localStorage.getItem("storageName");
var emailID = localStorage.getItem("emailAuth");


var starCountRef = firebase.database().ref('users/' + userID);
starCountRef.on('value', function(snapshot) {

    document.getElementById("nameInput").innerHTML = (snapshot.val() && snapshot.val().name) || 'Anonymous';
    document.getElementById("emailInput").innerHTML = emailID;
    document.getElementById("passwordInput").innerHTML = (snapshot.val() && snapshot.val().password) || 'Anonymous';
    document.getElementById("phoneInput").innerHTML = (snapshot.val() && snapshot.val().phone) || 'Anonymous';
    document.getElementById("carMakeInput").innerHTML = (snapshot.val() && snapshot.val().make) || 'Anonymous';
    document.getElementById("modelInput").innerHTML = (snapshot.val() && snapshot.val().model) || 'Anonymous';
    document.getElementById("colorInput").innerHTML = (snapshot.val() && snapshot.val().color) || 'Anonymous';
    document.getElementById("yearInput").innerHTML = (snapshot.val() && snapshot.val().year) || 'Anonymous';
    document.getElementById("licenseInput").innerHTML = (snapshot.val() && snapshot.val().license) || 'Anonymous';
});
