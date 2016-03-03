
/*var myFirebaseRef = new Firebase("https://ratemyroof.firebaseio.com/");
myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

myFirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});*/


//var Firebase = require("firebase");

$(window).load(function(){
   var optionsList = document.getElementById('searchDownbar'); 
    console.log(optionsList);
});

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




/*rootRef.orderByKey().on("child_added", function(snapshot){
    snapshot.forEach(function(data){
        
    });
});*/

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
          }*/
          //console.log(passself.model.buildingsList[k].name);
          //console.log(regex);
          //console.log(passself.model.buildingsList[k].name);
          //console.log(regex.test(passself.model.buildingsList[k].name));
          /*if(!(regex.test(passself.model.buildingsList[k].name))&& 
              !(regex.test(passself.model.buildingsList[k].code))&&
              !(regex.test(passself.model.buildingsList[k].parentName)) &&
              !altNames) {*/
            //console.log('in if');
            //var noMatch = document.getElementById('listID'+k);
            //console.log(noMatch);
            //noMatch.className = 'hidden';
          /*}
          else {
            altNames = false;
            var match = document.getElementById('listID'+k);
            match.className = 'list-group-item';
          }*/
        }
      );
