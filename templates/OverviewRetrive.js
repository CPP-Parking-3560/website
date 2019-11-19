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

var overviewsRef = firebase.database().ref('messages');

ref.on('name', gotName, errName);

function gotName(name){
    //console.log(name.val());
    var name = data.val();
    var keys = cs3560parking.keys(name);
    console.log(keys);

}
function errName(name){
    console.log('Error');

}