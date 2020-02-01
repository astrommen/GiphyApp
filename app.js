$(document).ready(function() {
    
    //var holding an array topic strings (1)
    var topics = ["bomber", "fighter-jet", "dirigible", "aerobatic"];
    
    function loadBtns() { // function to dynamically create topic buttons
        
        $("#buttons-view").empty(); // stops buttons from stacking when submitting new
        
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
    }
    
    // listens for submit button click
    $(document).on("click", "#add-flight", function(){

        event.preventDefault();

        
        //pulls input string from form
        var newFlite = $("#flight-input").val();
    
        topics.push(newFlite); // adds to topic array

        loadBtns();

    })

    // code for GIPHY API call
    $(document).on("click", ".flight", function(){
			
        // grabbing value from clicked button
        var x = $(this).attr("data-flight").trim(); // .trim removes spaces & such

        // placing value into queryURL string w/ API key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            x + "&api_key=vRVtwSi9eBLLOpTHxJRJflgaFDvr7lH2&limit=100";

        // API call
        $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) { // complete response then exec function
            
            // storing data from the AJAX request
            var results = response.data;

            var i = 9; //var to hold iterator for .each loop

            //empties the div so the new content doesnt stack
            $("#gifs").empty();

            addGifs();

            function addGifs(){ // function to dynamically create gif divs
                // for loop running through data index
                $.each(results, function(index){ console.log(results[index]);

                    var gifDiv = $("#gifs"); // assign var to div for modularity

                    var gif = $("<div>"); // assign var to create new divs for gifs

                    // assign var to create new p for ratings
                    var p = $("<p>").text("#" + index + "Gif Rating: " + results[index].rating);
                
                    var gifImage = $("<img>"); // creating and storing an image tag

                    // setting the src attr of image to stills/animated gif pulled from giphy
                    gifImage.attr("src", results[index].images.fixed_height_still.url);

                    gifImage.attr("data-still", results[index].images.fixed_height_still.url);

                    gifImage.attr("data-animate", results[index].images.fixed_height.url);

                    gifImage.attr("data-state", "still");

                    gifImage.addClass("gif");
                    // end of setting attrs for "pause gif" method below

                    gif.append(p); // attach each p to new div

                    gif.append(gifImage); // attach image to new div

                    gifDiv.append(gif); // prepend the new div to html div
                    
                    return (index < i);
                    
                }); // end of each loop

            }//end of function

            //function for more gif button click
            $(document).on("click", "#moreGif", function(){
                
                //adds 10 to the iterator
                i = i+10; console.log(i);

                //empties the div so the new content doesnt stack
                $("#gifs").empty();

                //runs the add Gif function from above
                addGifs();

            }); //end of more gif function

        }); // end of response function
    
    }); // end of document click event listener

    loadBtns(); // initial load of buttons

    // Code to pause gifs
    $(document).on("click", ".gif", function(){
        var state = $(this).attr("data-state");

        if (state === "still") {//if state is still; replace img src with animate src
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate"); //set state to animate
        } 
        else { //vice versa
            $(this).attr("src", $(this).attr("data-still")); 
            $(this).attr("data-state", "still");
        }
        
    }); //end of code to pause gifs

}); // end of document ready
