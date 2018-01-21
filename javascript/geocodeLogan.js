$(document).ready(function(){
  var key = "a9a61bb81ae8bbec";
  navigator.geolocation.getCurrentPosition(success,error);
  function error() {
    alert("Sorry, we're unable to retrieve your location.");
  }
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    $.getJSON("https://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + latitude + "," + longitude + ".json", function(data) {
      var city = data.location.city;
      var state = data.location.state;
      $(".city").html(city);
      $(".state").html(state);

      //TONY's CODE

    });
  }
});
