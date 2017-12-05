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
    ]

    // displayTopicInfo function re-renders the HTML to display the appropriate content
    function displayTopicInfo() {

        animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "rating=g&api_key=tCwpdl0eJ6I8erhDV0uQSYoUyHgTKBeZ";

        //ajax to call the api
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            console.log(response);
        });

        // Creating a div to hold the results
        var resultDiv = $("<div class='result'>");

        // Retrieving the URL for the image
        //var imgURL = response.Poster;

        // Creating an element to hold the image
        //var image = $("<img>").attr("src", imgURL);
    }

    var animal = "";


    // Click Button changes what is stored in firebase
    $("#click-button").on("click", function (event) {
        event.preventDefault();
        // Get input
        animal = $("#name-input").val().trim();
        console.log(animal);
        topics.push(animal);
        console.log(topics);
    })




});