
console.log("api.js is working")
// function addPhoto(){
// 	$("#upload_btn").on("click",function(event){

// 		// var image =$("<img>").attr("src","../images/testphoto.jpg");
// 		$("#userPhoto").text("jump");
// 		// $("#userPhoto").prepend(image);
// 		console.log("photo")
// 	})
// }

//workiing on adding the API

// var topics= ["apple", "pear","strawberry", "banana", "pineapple","grapes", "plum"];
var topic ;
var phrase;
var queryURL;
var still;


function pickGiphy() {
	var choice = $(this).attr("choiceName");
	 queryURL = ["http://api.eventful.com/json/events/search?app_key=GRHKjTBng3snrgbN&location=Atlanta"];
// https://api.mysportsfeeds.com/v1.1/pull/nba/current/full_game_schedule.json
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
	

		// $(".images").empty();
		// $("")
		console.log("two")
	for(var v = 0; v < 4; v++)

{
	var pick = event.events.title;
	// var pickVid = response.data[v].images.original.url;
	var rating = response.data[v].rating;
	var pickSpot =$ ("<div class='store'>");

	var image =$("<img>").attr("src",pick);
		image.addClass("display");
		image.attr("data-state",still);
		image.attr("data-still",pick);
		// image.attr("data-animate",pickVid);

	var rate =$("<div class='rate'>");
	console.log("api")


	var testPhrase =$("<p>").text(topic);

	pickSpot.append(image);
	// pickSpot.html("<li> rating</li>");
	rate.prepend(rating);

	// console.log(image)

	$(".images").prepend(pickSpot);
	$(".rate").prepend(rating)
}
	})
	}

	$(document).on("click", "#submit",pickGiphy);