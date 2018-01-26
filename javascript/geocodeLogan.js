geolocation code

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
      $("#desc").html(data.current_observation.weather);
      $("#city").html(data.location.city);
      $("#state").html(data.location.state);
      $("#number").html(data.current_observation.temp_f);

      if (data.current_observation.weather == "Overcast" || data.current_observation.weather == "Mostly Cloudy" || data.current_observation.weather == "Partly Cloudy") { $("img").attr("src", "https://image.flaticon.com/icons/svg/148/148828.svg")
                                                                                                                 }

      if (data.current_observation.weather == "Clear") { $("img").attr("src", "https://image.flaticon.com/icons/svg/136/136723.svg")
                                                       }

      if (data.current_observation.weather == "Rain") { $("img").attr("src", "https://image.flaticon.com/icons/svg/119/119075.svg")
                                                      }

      $("i").click(function () {
        $("#number").text($("#number").text() == data.current_observation.temp_f ? data.current_observation.temp_c : data.current_observation.temp_f);
        $("#scale").text($("#scale").text() == " F" ? " C" : " F");
      });
    });
  }
});
