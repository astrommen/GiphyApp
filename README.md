# GiphyApp

1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. (done)
   * I am choosing 'flight' as my topic cuz why not?

2. Your app should take the topics in this array and create buttons in your HTML.
   * using the .each jquery (done)

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. (done)

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. (done)

5. Under every gif, display its rating (PG, G, so on). (done)
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page. (done)

7. Deploy your assignment to Github Pages. (done)

8. Ensure your app is fully mobile responsive. 

9. Allow users to request additional gifs to be added to the page.
   * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

   - increase limit number;
   
   - make response into a function;
      - maybe change to a for loop; look for more documentation on .each();

   - have button pull 10 at a time;

10. List additional metadata (title, tags, etc) for each gif in a clean and readable format.

   * add more p tags

   * assign p tags with metadata

   * prepend p tags to html div

11. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio

12. Allow users to add their favorite gifs to a `favorites` section.
   * This should persist even when they select or add a new topic.
   * If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).