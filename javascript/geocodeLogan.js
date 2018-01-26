$(document).ready(function(){

  var city = "";
  var state = "";
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



        //Firebase Storage
        // var uploader = document.getElementById('uploader');
        // var fileButton = document.getElementById('fileButton');
        // fileButton.addEventListener('change', function(e) {
        //     var file = e.target.files[0];
        //     var storageRef = firebase.storage().ref('img/' + file.name);
        //     var metadata = {
        //         customMetadata: {
        //             'city': city
        //         }
        //     }
        //     var task = storageRef.put(file, metadata);
        //     task.on('state_changed', function progress(snapshot) {
        //         var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         uploader.value = percentage;
        //     }, function error(err) {
        //     }, function complete() {
        //     });
        // });

        // Download starts here
        var dataRef = firebase.database();
        var photo = "";
        var counter = 0;
        var array = ["Chicago", "New York", "Phoenix"];
        localStorage.setItem("array", JSON.stringify(array));
        var storedArray = JSON.parse(localStorage.getItem("array"));
        var time = "";
        var date = "";

        var storageRef = firebase.storage();
        var uploader = document.getElementById('uploader');
        var fileButton = document.getElementById('fileButton');

        $("#fileButton").on("click", function () {


          // photo = $("#photo-input").val().trim();
          time = moment(moment()).format("hh:mm A");
          date = moment().format("L");

          dataRef.ref().push({
            // photo: photo,
            city: city,
            state: state,
            time: time,
<<<<<<< HEAD
            date: date
=======
            date: date,
//             counter: counter
>>>>>>> 115b6c71c3467a83d4a51619283ab2e4538eb797
          });
        });



        dataRef.ref().on("child_added", function (snapshot) {
          counter++;

          if (array.indexOf(city) === -1 && (storedArray === null || storedArray.indexOf(city) === -1)) {
            array.push(snapshot.val().city);
            localStorage.setItem("array", JSON.stringify(array));
            storedArray = JSON.parse(localStorage.getItem("array"));
              $(".eventTable").append("<tr><td id='date'>"+snapshot.val().date+
            "</td><td id='time'>"+snapshot.val().time+"</td><td>"+
            snapshot.val().city+", "+snapshot.val().state+"</td><td id='counter'>"+counter+"</td></tr>");
          } else {
            $("#counter").html(counter);
            $("#date").html(snapshot.val().date);
            $("#time").html(snapshot.val().time);
            }



          // $("#well").prepend("<img src="+snapshot.val().photo+" class='photos'>")


        });

        fileButton.addEventListener('change', function(e) {
            event.preventDefault();
            var file = e.target.files[0];
            var dataRef = storageRef.ref('img/' + file.name);

            var metadata = {
                customMetadata: {
                    'city': city
                }
            };
            var task = dataRef.put(file, metadata);
            task.on('state_changed', function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;

                }, function error(err) {}, function complete() {
                    // var dataRef = storageRef.ref('img/' + file.name);
                    var downloadURL = task.snapshot.downloadURL;
                    $('#well').prepend('<img class="photos" src=' + downloadURL + '>');
                    // dataRef.getMetadata().then(function(metadata) {

                    });

                })




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


});
