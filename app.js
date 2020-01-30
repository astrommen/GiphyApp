$(document).ready(function() {
    
    //var holding an array topic strings (1)
    var topics = ["bomber", "fighter", "dirigibles", "barnstormers"]; console.log(topics);

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
    // code for GIPHY API call
    $(document).on("click", ".flight", function(){
			
        // grabbing value from clicked button
        var x = $(this).attr("data-flight");

        // placing value into queryURL string w/ API key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            x + "&api_key=vRVtwSi9eBLLOpTHxJRJflgaFDvr7lH2&limit=10";

        // API call
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response) { // complete response then exec function
            
            // storing data from the AJAX request
            var results = response.data;

            //empties the div so the new content doesnt stack
            $("#gifs-appear-here").empty();
        
            // for loop running through data index
            $.each(results, function(index, value){ console.log(results[index]);

                var gifDiv = $("#gifs-appear-here"); // assign var to div for modularity

                var gif = $("<div>"); // assign var to create new divs for gifs

                // assign var to create new p for ratings
                var p = $("<p>").text("Gif Rating: " + results[index].rating);
            
                var gifImage = $("<img>"); // creating and storing an image tag

                // setting the src attr of image pulled from giphy
                gifImage.attr("src", results[index].images.fixed_height.url);
                
                gif.append(p); // attach each p to new div
                gif.append(gifImage); // attach image to new div

                gifDiv.prepend(gif); // prepend the new div to html div

            }); // end of each loop
        }); // end of response function
    }); // end of document click event listener
}); // end of document ready
