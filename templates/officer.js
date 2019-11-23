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

    var getCarData = firebase.database().ref('cars/' + licenseNumber);

    console.log(getCarData);

    if(getCarData != null) {
        userID = getCarData.userID;
        console.log(userID);
        window.alert("License Found");
    }
    else {
        window.alert("License Not Found");
    }

}

function submitClick() {
    
}