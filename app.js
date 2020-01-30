// $(document).ready(function() {
    
    //var holding an array topic strings (1)
    var topics = ["bombers", "fighters", "dirigibles", "barnstormers"]; console.log(topics);

    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // topics + "&api_key=vRVtwSi9eBLLOpTHxJRJflgaFDvr7lH2&limit=10";

    $.each(topics, function(index, value) {
        
        // creating new buttons from topics array
        var topicBtn = $("<button>");

        // adding a class of flight to our buttons
        topicBtn.addClass("flight");

        // adding a data-attribute = value
        topicBtn.attr("data-flight", value);

        // providing buttons with inner text
        topicBtn.text(value);

        // appending buttons to container div
        $("#buttons-view").append(topicBtn);     

    });
    // var p= $("<p>").text("Rating: " + results[i].rating);



// })