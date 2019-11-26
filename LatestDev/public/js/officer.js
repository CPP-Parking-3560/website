var auth = fetch('./auth.json');
//This file is used for the form in profile.html
var firebaseConfig = {
    apiKey: "AIzaSyA8bOv1jNRZwyX59w9mqZYom2joLCJWFqQ",
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

var userID;

function searchClick() {
    var licenseNumber = document.getElementById("licenseSearch").value;

    console.log(licenseNumber);

    var getCarData = firebase.database().ref().child('cars/' + licenseNumber);

    console.log(getCarData);

    setTimeout(function(){
        var userKey = localStorage.getItem("userKey");

        if(userKey != 'Anonymous') {
            console.log("User key is: " + userKey);
            document.getElementById('status').innerHTML='License Found';
            document.getElementById("citationReason").style.display = "block";
        }
        else {
            document.getElementById('status').innerHTML='License Not Found';
            document.getElementById("citationReason").style.display = "none";
        }
    }, 2000);

    firebase.database().ref('cars/' + licenseNumber).once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().userID) || 'Anonymous';
        console.log(username);
        localStorage.setItem("userKey",username);
    });


}

function submitClick() {
    var userKey = localStorage.getItem("userKey");
    var citationOption = document.getElementById("dropdownButton").value;
    var price;

    if(citationOption == 1) {
        citationOption = "No Visible Permit";
        price = "$100";
    }
    else if(citationOption == 2) {
        citationOption = "Invalid Parking Spot";
        price = "$150"
    }
    else if(citationOption == 3) {
        citationOption = "Expired Permit";
        price = "$200";
    }
    else {
        citationOption = "Kill me";
    }

    firebase.database().ref('users').child(userKey).update({
        'citation': citationOption,
        'price': price
    });

    document.getElementById('status').innerHTML='Ticket Submitted';
}