
var firebase = require("firebase/app");
var auth = require('./auth.json');
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
firebase.initializeApp(firebaseConfig)

//reference message collection
var messagesRef = firebase.database().ref('messages');

/* Listen for form Save */
document.getElementById('permitForm').addEventListener('submit', submitClick);
/* This function saves user information */
function submitClick(e){
    e.preventDefault();
    //get values
    var name = getInput('name');
    var email = getInput('email');
    var password = getInput('password');
    var phone = getInput('phone');
    var make = getInput('make');
    var model = getInput('model');
    var color = getInput('color');
    var year = getInput('year');
    var license = getInput('license');

    //save message
    saveMessage(name, email, password, phone, make, model, color, year, license);


}

//Function to get form values
function getInput(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, password, phone, make, model, color, year, license){
    var newMassageRef = messagesRef.push;
    newMassageRef.set({
        name: name,
        email: email,
        password: password,
        phone: phone,
        make: make,
        model: model,
        color: color,
        year: year,
        license: license
    });

}