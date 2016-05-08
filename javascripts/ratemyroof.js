$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

$(document).ready(function() {
    $('select').material_select();
});



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
  });
  myFirebaseRef.child("streetName").on("value", function(snapshot) {
    alert(snapshot.val());  // Alerts "San Francisco"
  });
  alert('saved')
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


$(window).load(function(){
   var optionsList = document.getElementById('searchDownbar');
    console.log(optionsList);
});

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
        }
      );
