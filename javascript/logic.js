/**
 * [config description]
 * @type {Object}
 */
let firebaseConfig = {
    apiKey: "AIzaSyBn5xUU9cipD3IVxgi750aYFO-bM_AM85A",
    authDomain: "midnightsungiants.firebaseapp.com",
    databaseURL: "https://midnightsungiants.firebaseio.com",
    projectId: "midnightsungiants",
    storageBucket: "midnightsungiants.appspot.com",
    messagingSenderId: "849065062207"
  };

let displayEventScreen = function()
{
	let event_div = document.getElementById("table_screen"); 
	event_div.style.display = "block";

};

let displayPage = function(event)
{
	// Get handles to all the divs representing top level screensl
    let event_div = document.getElementById("table_screen"); 
    let picture_div = document.getElementById("picture_screen");

    // Set the display of all the top level divs to "none"
    event_div.style.display = "none";
    picture_div.style.display = "none";
    
    // Get the data-name of the object that was clicked
    let name = event.target.getAttribute("data-name");
    console.log("name is " + name);

    // Set the display of one of the top level divs to
    // "block" so that it will be seen.
    switch (name)
    {
    	case "event_screen_nav":
            console.log("doWhut");
            event_div.style.display = "block";
            break;

        case "picture_screen_nav":
            console.log("edit_items");
            picture_div.style.display = "block";
            break;

    } // End of switch (name)

}; // End of let displayPage = function(event)


$( document ).ready(function() 
{
    // Add a click event listener to all elements with a class of "nav-link"
    $(document).on("click", ".nav-link", displayPage);

    // Display the event screen
    displayEventScreen();

    // Initialize firebase
    firebase.initializeApp(firebaseConfig);

}); // End of ready()
