$(document).ready(function(){
  var city = "";
  //geolocator starts here
  var key = "a9a61bb81ae8bbec";
  navigator.geolocation.getCurrentPosition(success, error);
  function error() {
      alert("Sorry, we're unable to retrieve your location.");
  }
  function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $.getJSON("https://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + latitude + "," + longitude + ".json", function(data) {
          city = data.location.city;
          state = data.location.state;
          $(".city").html(city);
          $(".state").html(state);
      });
  };
  //geolocator ends here

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWGmHUJjfT193FB4EjMqd49SAqb5AYwVs",
    authDomain: "test-project-d958e.firebaseapp.com",
    databaseURL: "https://test-project-d958e.firebaseio.com",
    projectId: "test-project-d958e",
    storageBucket: "test-project-d958e.appspot.com",
    messagingSenderId: "496730470430"
  };

  firebase.initializeApp(config);
  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e) {
      var file = e.target.files[0];
      var storageRef = firebase.storage().ref('img/' + file.name);
      var metadata = {
          customMetadata: {
              'city': city
          }
      }
      var task = storageRef.put(file, metadata);
      task.on('state_changed', function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
      }, function error(err) {
      }, function complete() {
      });
  });

  // Download starts here
  var dataRef = firebase.database();
  var photo = "";
  var counter = 0;

  $("#add-photo").on("click", function() {

    photo = $("#photo-input").val().trim();


    dataRef.ref().push({
      photo: photo
    });
  });

  dataRef.ref().on("child_added", function(snapshot) {
    $("#well").append("<img src=" + snapshot.val().photo + ">");
    counter++;
    $("#counter").html(counter);
  });










});
