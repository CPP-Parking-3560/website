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

//reference message collection
var messagesRef = firebase.database().ref('messages');

var userID = localStorage.getItem("storageName");

/* Listen for form Save */
document.getElementById('profile-form').addEventListener('submit', submitForm);
/* This function saves user information */
function submitForm(e){
    e.preventDefault();
    //get values
    var name = getInput('name');
    var password = getInput('password');
    var phone = getInput('phone');
    var make = getInput('carMake');
    var model = getInput('model');
    var color = getInput('color');
    var year = getInput('year');
    var license = getInput('licNumber');

    localStorage.setItem("licNum", license);


    //save message
    saveMessage(name, password, phone, make, model, color, year, license);
}

//Function to get form values
function getInput(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, password, phone, make, model, color, year, license){
    firebase.database().ref('users/' + userID).set({
        name: name,
        password: password,
        phone: phone,
        license: license
    });
    firebase.database().ref('cars/' + license).set({
        userID: userID,
        make: make,
        model: model,
        color: color,
        year: year,
        license: license
    });
}