
var myFirebaseRef = new Firebase("https://ratemyroof.firebaseio.com/");

function createProperty(){
  var street_number = document.getElementById("street_number");
  var street_name = document.getElementById("street_name");
  console.log(street_number);
  console.log(street_name);
  var property_name = street_number.value + street_name.value
  myFirebaseRef.push({
    'streetNumber': street_number.value,
    'streetName': street_name.value,
    'location': {
      city: "San Francisco",
      state: "California",
      zip: 94103
    }
  });
  myFirebaseRef.child("location/city").on("value", function(snapshot) {
    alert(snapshot.val());  // Alerts "San Francisco"
  });
  alert('saved')
}
