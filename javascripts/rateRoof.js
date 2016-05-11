$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

var starRating;

$(document).ready(function() {
    $('select').material_select();
    $("#rateYo").rateYo({
      starWidth: "50px",
      halfStar: true,
      onSet: function (rating, rateYoInstance) {
        starRating = rating;
   },
 });
});




var myFirebaseRef = new Firebase("https://ratemyroof.firebaseio.com/");

function createProperty(){
  var address = document.getElementById("pac-input");
  var comment = document.getElementById("textarea1");
  console.log(comment.value)
    myFirebaseRef.push({
      'address': address.value,
      'rating': [starRating],
      'comments': [comment.value]
    });
    myFirebaseRef.child("streetName").on("value", function(snapshot) {
      alert(snapshot.val());  // Alerts "San Francisco"
    });
    alert('saved')
}

function doesHouseExist(address){
    console.log(address.value);
    myFirebaseRef.orderByChild('address').equalTo(address.value).on("child_added", function(snapshot) {
      var data = snapshot.key();
      sweetAlert("Oops...", "Looks like the roof already exists", "error");
      address.value = "";
      });
}

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
