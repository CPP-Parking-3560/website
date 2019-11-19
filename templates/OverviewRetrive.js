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

function gotName(data){
    //console.log(name.val());
    var messages = data.val();
    var keys = Object.keys(messages);
    console.log(keys);

    for(var i = 0; i <keys.length; i++){
        var k = keys[i];
        var color = messages[k].color;
        var license = messages[k].license;
        var make = messages[k].make;
        var model = messages[k].model;
        var name = messages[k].name;
        var password = messages[k].password;
        var phone = messages[k].phone;
        var year = messages[k].year;
        //console.log(color, license, make, model, name, password, phone, year);

        var l1 = createElement('l1',name);
        l1.parent('nameInput');

        var l2 = createElement('l2',password);
        l2.parent('passwordInput');

        var l3 = createElement('l3',phone);
        l3.parent('phoneInput');

        var l4 = createElement('l4',make);
        l4.parent('carMakeInput');

        var l5 = createElement('l5',model);
        l5.parent('modelInput');

        var l6 = createElement('l6',color);
        l6.parent('colorInput');

        var l7 = createElement('l7',year);
        l7.parent('yearInput');

        var l8 = createElement('l8',license);
        l8.parent('licenseInput');

        //howdy
    }

}
function errName(name){
    console.log('Error');

}