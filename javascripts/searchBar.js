/*$(document).ready(function() {
    $('select').material_select();
});

var myFirebaseRef = new Firebase("https://ratemyroof.firebaseio.com/");

function createProperty(){
  var street_number = document.getElementById("street_number");
  var street_name = document.getElementById("street_name");
  var num_bathrooms = document.getElementById("rate_num_bathrooms");
  console.log(street_number);
  console.log(street_name);
  var property_name = street_number.value + street_name.value
  myFirebaseRef.push({
    'streetNumber': street_number.value,
    'streetName': street_name.value,
  });
  myFirebaseRef.child("streetName").on("value", function(snapshot) {
    alert(snapshot.val());  // Alerts "San Francisco"
  });
  alert('saved')
}*/

//This is to search for houses
function searchFunction(){
  var search = document.getElementById('searchInput');
  console.log(search.value);
    myFirebaseRef.orderByChild("streetName").equalTo(search.value).on("child_added", function(snapshot) {
    console.log(data);
    var data = snapshot.val()
    alert(data.streetNumber);
  });
}

function showSearchResults(){

}


<<<<<<< HEAD:javascripts/ratemyroof.js
$(window).load(function(){
   var optionsList = document.getElementById('searchDownbar');
=======
/*$(window).load(function(){
   var optionsList = document.getElementById('searchDownbar'); 
>>>>>>> origin/master:javascripts/searchBar.js
    console.log(optionsList);
});*/

<<<<<<< HEAD:javascripts/ratemyroof.js
=======
var rootRef = new Firebase('https://testingforrmr.firebaseio.com/');
var usersRef = rootRef.child("testing properties");
usersRef.set({
    property1: {
        address: "261 Lester Street",
        management: "KW4Rent"
    },
    property2:{
        address: "333 Lester Street",
        management: "BH Properties"
    },
    property3: {
        address: "336 Spruce Street",
        management: "Domus Housing"
    }
});

/*var Firebase = require("firebase");*/
/*var rootRef = new Firebase('https://resplendent-inferno-8914.firebaseio.com/');*/

/*rootRef.orderByKey().on("child_added", function(snapshot){
    snapshot.forEach(function(data){
        
    });
});*/

>>>>>>> origin/master:javascripts/searchBar.js
$('#searchInput').bind('input propertychange', function(){
        console.log("in funciton");
        var inputVal = $(this).val();
        var regexString = '.*';
        for(var i =0; i < inputVal.length; i++){
           regexString = regexString+inputVal[i];//'.*'+inputVal[i];
        }
        regexString = regexString+'.*';
        var regex = new RegExp(regexString, 'i');
        console.log(regex);
        rootRef.orderByKey().on("child_added", function(snapshot){
            snapshot.forEach(function(data){
                if(regex.test(/.*.*/i)){
                    var match = document.getElementById('searchDownbar');
                    match.className = 'hidden';
                }
                else if(regex.test(data.val().address) || regex.test(data.val().management)){
                    var optionsList = document.getElementById('searchDownbar');
                    optionsList.setAttribute('class', 'list-group');
                    var li = document.createElement('li');
                    li.setAttribute('class', 'list-group-item');
                    li.setAttribute('id', 'listID'+data.key());
                    var label = document.createElement('label');
                    label.innerHTML = data.val().address;
                    console.log(li);
                    optionsList.appendChild(li);
                    li.appendChild(label);
                   // var match = document.getElementById('listID'+data.key());
                    //match.className = 'list-group-item';
                }
                //console.log(data.val().address);
            });
        });
<<<<<<< HEAD:javascripts/ratemyroof.js
        }
      );
=======
        //console.log(passself.model.buildingsList);
        //console.log(passself.model);
        /*for(var k=0; k < passself.model.buildingsList.length; k++){
          var altNames = false;
          if(passself.model.buildingsList[k]){
            for(var a = 0; a < passself.model.buildingsList[k].alternateNames.length; a++){
              if(regex.test(passself.model.buildingsList[k].alternateNames[a])){
                altNames = true;
                break;
              }
            }
          //console.log(passself.model.buildingsList[k].name);
          //console.log(regex);
          //console.log(passself.model.buildingsList[k].name);
          //console.log(regex.test(passself.model.buildingsList[k].name));
          /*if(!(regex.test(passself.model.buildingsList[k].name))&& 
              !(regex.test(passself.model.buildingsList[k].code))&&
              !(regex.test(passself.model.buildingsList[k].parentName)) &&
              !altNames) {
            //console.log('in if');
            //var noMatch = document.getElementById('listID'+k);
            //console.log(noMatch);
            //noMatch.className = 'hidden';
          }
          else {
            altNames = false;
            var match = document.getElementById('listID'+k);
            match.className = 'list-group-item';
          }
        }*/
      });

>>>>>>> origin/master:javascripts/searchBar.js
