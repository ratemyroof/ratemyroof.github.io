<<<<<<< HEAD

var myFirebaseRef = new Firebase("https://ratemyroof.firebaseio.com/");
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
});
=======
var Firebase = require("firebase");
var rootRef = new Firebase('https://resplendent-inferno-8914.firebaseio.com/');
>>>>>>> origin/master
