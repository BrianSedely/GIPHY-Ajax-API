$(document).ready(function () {
    // Initial search items
    var topics = [
        "Sea Otter",
        "River Otter",
        "Dolphin",
        "Porpoise",
        "Manatee",
        "Sea Lion",
        "Walrus",
        "Blue Whale",
        "Orca",
        "Hippopotamus",
        "Beaver"
    ];

    // displayTopicInfo function re-renders the HTML to display the appropriate content
    function displayTopicInfo() {

        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "rating=g&api_key=tCwpdl0eJ6I8erhDV0uQSYoUyHgTKBeZ";

        //ajax to call the api
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            console.log(response);
        });

        // Creating a div to hold the results
        var animalDiv = $("<div class='animal'>");

        // Retrieving the URL for the image
        var imgURL = response.data;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        animalDiv.append(image);

        // Putting the entire animal above the previous animals
        $("#animalsArea").prepend(animalDiv);

        // Retrieving the URL for the image
        //var imgURL = response.Poster;

        // Creating an element to hold the image
        //var image = $("<img>").attr("src", imgURL);
    }

    var animal = "";

    function buttonMaker() {
        $("#buttonsArea").empty();

        // Looping through the array of animals
        for (var i = 0; i < animals.length; i++) {

            // Then dynamicaly generating buttons for each animal in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of animal to our button
            a.addClass("animal");
            // Adding a data-attribute
            a.attr("data-name", animals[i]);
            // Providing the initial button text
            a.text(animals[i]);
            // Adding the button to the buttonsArea div
            $("#buttonsArea").append(a);
        }
    };


// Click Button changes what is stored in firebase
$("#click-button").on("click", function (event) {
    event.preventDefault();
    // Get input
    var animal = $("#animal-input").val().trim();
    $("#animal-input").val("").focus();
    console.log(animal);
    topics.push(animal);
    console.log(topics);
    buttonMaker();
});

 $(document).on("click", ".animal", displayanimalInfo);
 
 renderButtons();






});